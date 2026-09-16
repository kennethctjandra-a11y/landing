"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { storyTimeline } from "@/lib/story-timeline";
import styles from "./StoryTimeline.module.css";

/**
 * "my story" — a horizontal timeline reel of Ken's canon events.
 *
 * Motion mirrors the site's student-wins marquee: a slow, eased auto-scroll
 * that drifts past → present, eases to a stop at the present, glides back, and
 * loops. It pauses on hover and touch, supports mouse-drag / mobile-swipe, and
 * goes fully static under prefers-reduced-motion. All motion runs on a single
 * axis (the viewport's scrollLeft) so auto-scroll and manual input never fight.
 */
export default function StoryTimeline() {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let last = 0;
    let dir = 1; // 1 = toward the present (right), -1 = back toward the past
    let interacting = false; // hover / touch / recent drag
    let dragging = false; // active mouse drag
    let startX = 0;
    let startLeft = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;

    const SPEED = 22; // px/sec — the site's slow, marquee-like pace

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

    // ── auto ping-pong (never armed under reduced motion) ──
    const tick = (now: number) => {
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const max = vp.scrollWidth - vp.clientWidth;
      if (!interacting && !dragging && max > 1) {
        const t = Math.min(Math.max(vp.scrollLeft / max, 0), 1);
        // ease-in-out velocity: slow at both ends, full through the middle,
        // with a small floor so it always reaches the ends and flips.
        const ease = 0.12 + 0.88 * Math.sin(Math.PI * t);
        vp.scrollLeft += dir * SPEED * ease * dt;
        if (vp.scrollLeft >= max - 0.5) dir = -1;
        else if (vp.scrollLeft <= 0.5) dir = 1;
      }
      raf = requestAnimationFrame(tick);
    };

    // ── hover (mouse) ──
    const onEnter = () => pause();
    const onLeave = () => {
      if (!dragging) resumeSoon(400);
    };

    // ── pointer: mouse-drag to scroll; touch pauses and uses native scroll ──
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

    // ── keyboard ──
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      pause();
      vp.scrollBy({ left: e.key === "ArrowRight" ? 260 : -260, behavior: "smooth" });
      resumeSoon(2500);
    };

    vp.addEventListener("mouseenter", onEnter);
    vp.addEventListener("mouseleave", onLeave);
    vp.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endInteraction);
    window.addEventListener("pointercancel", endInteraction);
    vp.addEventListener("keydown", onKey);

    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      vp.removeEventListener("mouseenter", onEnter);
      vp.removeEventListener("mouseleave", onLeave);
      vp.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endInteraction);
      window.removeEventListener("pointercancel", endInteraction);
      vp.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <section className={styles.story} aria-labelledby="story-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>✦ my story</span>
        <h2 id="story-heading" className={styles.heading}>
          the story <em>so far.</em>
        </h2>
        <p className={styles.lead}>jakarta to now — the honest version.</p>
      </div>

      <div
        className={styles.viewport}
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label="Ken's story timeline — scroll or drag to move through it"
      >
        <div className={styles.track}>
          <div className={styles.line} aria-hidden="true" />
          {storyTimeline.map((e, i) => (
            <article className={styles.card} key={i}>
              <div className={styles.media}>
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 480px) 60vw, 240px"
                  className={styles.img}
                />
                <span className={styles.year}>{e.year}</span>
              </div>
              <span className={styles.node} aria-hidden="true" />
              <h3 className={styles.title}>{e.title}</h3>
              <p className={styles.caption}>{e.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
