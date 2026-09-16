"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { storyTimeline } from "@/lib/story-timeline";
import styles from "./StoryTimeline.module.css";

/**
 * "my canon events" — a floating horizontal photo collage.
 *
 * Photos (mostly landscape, some square) float at staggered heights and are
 * threaded together by a curvy line that reads left (past) → right (present).
 * The line fills terracotta the further you scroll to the right. It auto-drifts
 * slowly, eases to a stop and glides back, pauses on hover/touch, supports
 * mouse-drag / swipe / side arrows / keyboard, and is static under
 * prefers-reduced-motion. All motion runs on one axis (viewport scrollLeft).
 */

// per-photo visual layout: height factor (× --ph), aspect ratio, float offset (px)
const LAYOUT = [
  { f: 1.0, ar: "3 / 2", dy: 8 },
  { f: 0.86, ar: "1 / 1", dy: 46 },
  { f: 1.08, ar: "4 / 3", dy: 0 },
  { f: 0.9, ar: "1 / 1", dy: 40 },
  { f: 1.0, ar: "3 / 2", dy: 14 },
  { f: 0.88, ar: "1 / 1", dy: 48 },
  { f: 1.1, ar: "4 / 3", dy: 4 },
  { f: 0.92, ar: "1 / 1", dy: 42 },
  { f: 1.02, ar: "3 / 2", dy: 12 },
  { f: 0.87, ar: "1 / 1", dy: 46 },
  { f: 1.08, ar: "4 / 3", dy: 0 },
  { f: 0.9, ar: "1 / 1", dy: 38 },
  { f: 1.0, ar: "3 / 2", dy: 16 },
  { f: 0.95, ar: "3 / 2", dy: 32 },
];

// Catmull-Rom → cubic bezier: a smooth curve through the given points
function buildPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export default function StoryTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const progRef = useRef<SVGPathElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lenRef = useRef(0);
  const ctlRef = useRef<{ pause: () => void; resumeSoon: (ms: number) => void } | null>(null);

  // draw / redraw the curvy line through the photo centres
  const layoutLine = () => {
    const track = trackRef.current;
    const svg = svgRef.current;
    const base = baseRef.current;
    const prog = progRef.current;
    if (!track || !svg || !base || !prog) return;

    const tr = track.getBoundingClientRect();
    const rects = photoRefs.current
      .filter(Boolean)
      .map((el) => {
        const r = (el as HTMLDivElement).getBoundingClientRect();
        const y = r.top - tr.top + r.height / 2;
        return { lx: r.left - tr.left, rx: r.right - tr.left, y };
      });
    if (rects.length < 2) return;

    // attach to each photo's left & right edge, and wave through the gaps
    const AMP = 22;
    const seq: { x: number; y: number }[] = [];
    for (let i = 0; i < rects.length; i++) {
      seq.push({ x: rects[i].lx, y: rects[i].y });
      seq.push({ x: rects[i].rx, y: rects[i].y });
      if (i < rects.length - 1) {
        const midX = (rects[i].rx + rects[i + 1].lx) / 2;
        const midY = (rects[i].y + rects[i + 1].y) / 2 + AMP * (i % 2 === 0 ? -1 : 1);
        seq.push({ x: midX, y: midY });
      }
    }

    const d = buildPath(seq);
    const w = track.scrollWidth;
    const h = track.offsetHeight;
    svg.setAttribute("width", String(w));
    svg.setAttribute("height", String(h));
    svg.style.width = `${w}px`;
    svg.style.height = `${h}px`;
    base.setAttribute("d", d);
    prog.setAttribute("d", d);

    const len = prog.getTotalLength();
    lenRef.current = len;
    prog.style.strokeDasharray = `${len}`;
    updateProgress();
  };

  // colour the line terracotta in proportion to how far right we've scrolled
  const updateProgress = () => {
    const vp = viewportRef.current;
    const prog = progRef.current;
    const len = lenRef.current;
    if (!vp || !prog || !len) return;
    const max = vp.scrollWidth - vp.clientWidth;
    const p = max > 0 ? Math.min(Math.max(vp.scrollLeft / max, 0), 1) : 0;
    prog.style.strokeDashoffset = `${len * (1 - p)}`;
  };

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let last = 0;
    let dir = 1;
    let interacting = false;
    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;

    const SPEED = 20; // px/sec — slow, marquee-like

    const pause = () => {
      interacting = true;
      if (resumeTimer) {
        clearTimeout(resumeTimer);
        resumeTimer = null;
      }
    };
    const resumeSoon = (ms: number) => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        interacting = false;
      }, ms);
    };
    ctlRef.current = { pause, resumeSoon };

    const tick = (now: number) => {
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const max = vp.scrollWidth - vp.clientWidth;
      if (!interacting && !dragging && max > 1) {
        const t = Math.min(Math.max(vp.scrollLeft / max, 0), 1);
        const ease = 0.12 + 0.88 * Math.sin(Math.PI * t);
        vp.scrollLeft += dir * SPEED * ease * dt;
        if (vp.scrollLeft >= max - 0.5) dir = -1;
        else if (vp.scrollLeft <= 0.5) dir = 1;
        updateProgress();
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => pause();
    const onLeave = () => {
      if (!dragging) resumeSoon(400);
    };
    const onPointerDown = (e: PointerEvent) => {
      pause();
      if (e.pointerType === "mouse") {
        dragging = true;
        startX = e.clientX;
        startLeft = vp.scrollLeft;
        vp.classList.add(styles.grabbing);
        try {
          vp.setPointerCapture(e.pointerId);
        } catch {
          /* no-op */
        }
      }
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      vp.scrollLeft = startLeft - (e.clientX - startX);
    };
    const endInteraction = () => {
      if (dragging) {
        dragging = false;
        vp.classList.remove(styles.grabbing);
      }
      resumeSoon(2000);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      pause();
      vp.scrollBy({ left: e.key === "ArrowRight" ? 300 : -300, behavior: "smooth" });
      resumeSoon(2500);
    };
    const onScroll = () => updateProgress();

    vp.addEventListener("mouseenter", onEnter);
    vp.addEventListener("mouseleave", onLeave);
    vp.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endInteraction);
    window.addEventListener("pointercancel", endInteraction);
    vp.addEventListener("keydown", onKey);
    vp.addEventListener("scroll", onScroll, { passive: true });

    // draw the line now and whenever the layout changes
    layoutLine();
    const ro = new ResizeObserver(() => layoutLine());
    ro.observe(vp);
    if (trackRef.current) ro.observe(trackRef.current);
    const onResize = () => layoutLine();
    window.addEventListener("resize", onResize);
    const t1 = setTimeout(layoutLine, 120); // after fonts/layout settle

    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      clearTimeout(t1);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      vp.removeEventListener("mouseenter", onEnter);
      vp.removeEventListener("mouseleave", onLeave);
      vp.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endInteraction);
      window.removeEventListener("pointercancel", endInteraction);
      vp.removeEventListener("keydown", onKey);
      vp.removeEventListener("scroll", onScroll);
    };
  }, []);

  const nudge = (px: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    ctlRef.current?.pause();
    vp.scrollBy({ left: px, behavior: "smooth" });
    ctlRef.current?.resumeSoon(2500);
  };

  return (
    <section className={styles.story} aria-labelledby="story-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>✦ my story</span>
        <h2 id="story-heading" className={styles.heading}>
          my canon events<em>…</em>
        </h2>
      </div>

      <div className={styles.reelWrap}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          aria-label="Scroll back in time"
          onClick={() => nudge(-320)}
        >
          ←
        </button>

        <div
          className={styles.viewport}
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-label="Ken's canon events"
        >
          <div className={styles.track} ref={trackRef}>
            <svg className={styles.timeline} ref={svgRef} aria-hidden="true" preserveAspectRatio="none">
              <path ref={baseRef} className={styles.lineBase} fill="none" />
              <path ref={progRef} className={styles.lineProgress} fill="none" />
            </svg>

            {storyTimeline.map((e, i) => {
              const l = LAYOUT[i % LAYOUT.length];
              return (
                <figure className={styles.item} key={i} style={{ marginTop: l.dy }}>
                  <div
                    className={styles.photo}
                    style={{ height: `calc(var(--ph) * ${l.f})`, aspectRatio: l.ar }}
                    ref={(el) => {
                      photoRefs.current[i] = el;
                    }}
                  >
                    <Image
                      src={e.src}
                      alt={e.alt}
                      fill
                      sizes="(max-width: 480px) 45vw, 220px"
                      className={styles.img}
                    />
                  </div>
                  <figcaption className={styles.cap}>
                    <span className={styles.year}>{e.year}</span>
                    <span className={styles.title}>{e.title}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          aria-label="Scroll forward in time"
          onClick={() => nudge(320)}
        >
          →
        </button>
      </div>
    </section>
  );
}
