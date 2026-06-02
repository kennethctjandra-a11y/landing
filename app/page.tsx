"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─── DATA ───────────────────────────────────────────────── */

const SKOOL = "https://www.skool.com/creatopia/about";

const floatingElements = [
  { el: "🧧", x: 12, y: 18, size: 2.8, depth: 0.3,  anim: "floatA", delay: 0,   opacity: 0.42 },
  { el: "✝️", x: 78, y: 12, size: 3.2, depth: 0.5,  anim: "floatB", delay: 1.5, opacity: 0.32 },
  { el: "福",  x:  8, y: 58, size: 3.5, depth: 0.2,  anim: "floatC", delay: 3,   opacity: 0.18 },
  { el: "🌸", x: 88, y: 42, size: 2.2, depth: 0.4,  anim: "floatA", delay: 0.8, opacity: 0.36 },
  { el: "Α",   x: 22, y: 78, size: 3.0, depth: 0.3,  anim: "floatD", delay: 2,   opacity: 0.22 },
  { el: "🏮", x: 62, y:  8, size: 2.2, depth: 0.6,  anim: "floatB", delay: 4,   opacity: 0.30 },
  { el: "🕊️",x: 42, y: 82, size: 2.5, depth: 0.2,  anim: "floatA", delay: 1,   opacity: 0.34 },
  { el: "壽",  x: 92, y: 68, size: 3.0, depth: 0.4,  anim: "floatC", delay: 2.5, opacity: 0.16 },
  { el: "✦",   x: 50, y: 28, size: 1.4, depth: 0.1,  anim: "floatD", delay: 0.5, opacity: 0.50 },
  { el: "🌿", x:  4, y: 38, size: 2.4, depth: 0.5,  anim: "floatB", delay: 3.5, opacity: 0.28 },
  { el: "Ω",   x: 72, y: 88, size: 2.8, depth: 0.3,  anim: "floatA", delay: 1.8, opacity: 0.20 },
  { el: "🙏", x: 32, y: 48, size: 2.2, depth: 0.35, anim: "floatC", delay: 0.3, opacity: 0.30 },
  { el: "愛",  x: 58, y: 72, size: 3.2, depth: 0.2,  anim: "floatD", delay: 2.8, opacity: 0.16 },
  { el: "⛩️", x: 82, y: 55, size: 1.8, depth: 0.5,  anim: "floatA", delay: 4.5, opacity: 0.26 },
  { el: "恩",  x: 68, y: 32, size: 2.5, depth: 0.25, anim: "floatB", delay: 1.2, opacity: 0.18 },
  { el: "☦",   x: 18, y: 28, size: 2.4, depth: 0.4,  anim: "floatD", delay: 3.8, opacity: 0.28 },
  { el: "🪷", x: 76, y: 72, size: 2.2, depth: 0.3,  anim: "floatC", delay: 2.2, opacity: 0.30 },
  { el: "א",   x: 38, y: 62, size: 2.8, depth: 0.45, anim: "floatA", delay: 4.2, opacity: 0.20 },
  { el: "🎋", x: 48, y: 11, size: 2.0, depth: 0.15, anim: "floatB", delay: 0.7, opacity: 0.26 },
  { el: "道",  x: 26, y: 14, size: 3.0, depth: 0.35, anim: "floatD", delay: 1.6, opacity: 0.16 },
];

const creators = [
  { name: "Jesse Ongkili",  handle: "@jesse_ongkili",  igUrl: "https://www.instagram.com/jesse_ongkili/",  initials: "JO", platforms: ["IG","TT"], before: "800",  after: "511K", quote: "had my first 100K reel 3 weeks after joining. the framework works.",        avatarBg: "#3a2a1a", avatarColor: "#d4a853" },
  { name: "Aung Kaw Sett",  handle: "@aungsett_",       igUrl: "https://www.instagram.com/aungsett_/",       initials: "AS", platforms: ["IG","TT"], before: "0",    after: "373K", quote: "ken taught me my story was the content. now i can't stop creating.",       avatarBg: "#2a3a2a", avatarColor: "#7aad7a" },
  { name: "Andy Xu",        handle: "@cafeandy_",        igUrl: "https://www.instagram.com/cafeandy_/",        initials: "AX", platforms: ["IG"],      before: "4K",   after: "250K", quote: "grew my café audience faster than any paid ad ever did.",                  avatarBg: "#1a2a2a", avatarColor: "#5aada8" },
  { name: "Chris Vu",       handle: "@lolchrisvu",       igUrl: "https://www.instagram.com/lolchrisvu/",       initials: "CV", platforms: ["IG"],      before: "2K",   after: "45K",  quote: "used to hate making content. now i look forward to it every day.",        avatarBg: "#2a1a2a", avatarColor: "#c06aa0" },
  { name: "Ryan Devine",    handle: "@itsryandevine",    igUrl: "https://www.instagram.com/itsryandevine/",    initials: "RD", platforms: ["IG"],      before: "1.2K", after: "14K",  quote: "stopped chasing trends. started telling my story. everything changed.",   avatarBg: "#1e2f4a", avatarColor: "#6a9fd8" },
  { name: "Matthew Kim",    handle: "@matthewkim10",     igUrl: "https://www.instagram.com/matthewkim10/",     initials: "MK", platforms: ["IG"],      before: "500",  after: "10K",  quote: "creatopia gave me the clarity to know what to say and how to say it.",   avatarBg: "#2a2a1a", avatarColor: "#ada85a" },
];

const champions = [
  { name: "Jesse Ongkili", handle: "@jesse_ongkili",  igUrl: "https://www.instagram.com/jesse_ongkili/",  initials: "JO", ig: "217K", tt: "294K", total: "511K", avatarBg: "#3a2a1a", avatarColor: "#d4a853" },
  { name: "Aung Kaw Sett", handle: "@aungsett_",       igUrl: "https://www.instagram.com/aungsett_/",       initials: "AS", ig: "129K", tt: "244K", total: "373K", avatarBg: "#2a3a2a", avatarColor: "#7aad7a" },
  { name: "Andy Xu",       handle: "@cafeandy_",        igUrl: "https://www.instagram.com/cafeandy_/",        initials: "AX", ig: "245K", tt:  "5K", total: "250K", avatarBg: "#1a2a2a", avatarColor: "#5aada8" },
  { name: "Chris Vu",      handle: "@lolchrisvu",       igUrl: "https://www.instagram.com/lolchrisvu/",       initials: "CV", ig:  "40K", tt: "5.2K",total:  "45K", avatarBg: "#2a1a2a", avatarColor: "#c06aa0" },
  { name: "Ryan Devine",   handle: "@itsryandevine",    igUrl: "https://www.instagram.com/itsryandevine/",    initials: "RD", ig: "10.4K",tt: "3.8K",total:  "14K", avatarBg: "#1e2f4a", avatarColor: "#6a9fd8" },
  { name: "Matthew Kim",   handle: "@matthewkim10",     igUrl: "https://www.instagram.com/matthewkim10/",     initials: "MK", ig:  "10K", tt:   "—", total:  "10K", avatarBg: "#2a2a1a", avatarColor: "#ada85a" },
];

const trailSrcs = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
  41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
  61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,
  95,96,99,101,
].map(n => `/trail/${n}.png`);

const screenshots: string[] = [
  "/img/biz-1.png",
  "/img/biz-2.png",
  "/img/biz-3.png",
  "/img/biz-4.png",
  "/img/biz-5.png",
  "/img/biz-6.png",
  "/img/biz-7.png",
  "/img/biz-8.png",
  "/img/profile-1.png",
  "/img/profile-2.png",
  "/img/profile-3.png",
  "/img/profile-4.png",
  "/img/profile-5.png",
  "/img/profile-6.png",
  "/img/profile-7.png",
  "/img/profile-8.png",
  "/img/profile-9.png",
  "/img/skool-1.png",
  "/img/skool-2.png",
  "/img/skool-3.png",
  "/img/skool-4.png",
  "/img/skool-5.png",
  "/img/skool-6.png",
  "/img/dm-1.jpg",
  "/img/dm-2.jpeg",
  "/img/dm-3.jpeg",
  "/img/dm-4.jpg",
  "/img/dm-5.png",
  "/img/dm-6.png",
  "/img/dm-7.png",
  "/img/dm-8.png",
  "/img/views-1.png",
  "/img/views-2.png",
  "/img/views-3.png",
  "/img/views-4.png",
  "/img/views-5.png",
  "/img/views-6.png",
  "/img/views-7.png",
  "/img/views-8.png",
  "/img/views-9.png",
  "/img/views-10.png",
  "/img/views-11.png",
];

const problems = [
  {
    num: "01",
    frontTitle: "copy-paste hooks don't build brands.",
    frontBody: "you've tried the tactics, the trending audio, the first-liners – but nothing sticks. a story without identity is just noise.",
    backTitle: "your testimony is the strategy.",
    backBody: "I'll give you a personalised system to turn your story into premium, high-performing content that converts – no templates or trends required.",
  },
  {
    num: "02",
    frontTitle: "one viral video won't change your life.",
    frontBody: "going viral once doesn't build trust – it builds a moment. you need content people come back to, not a clip they forget by tomorrow.",
    backTitle: "build a brand, not a moment.",
    backBody: "I'll teach you how to create short & long-form videos that compound throughout time – every post builds trust & authority, not just views.",
  },
  {
    num: "03",
    frontTitle: "overthinking is the enemy.",
    frontBody: "your notes app is full. but every time you're about to post, fear & perfectionism creeps in. that's not a consistency issue, it's an internal issue.",
    backTitle: "clarity kills overthinking.",
    backBody: "when you know who you are & what you stand for, posting becomes natural. that's exactly what we've done with 1,000+ creators.",
  },
];

const projects = [
  { tag: "fashion · collab", name: "The Blessed T-shirt", desc: "an exclusive collab with Owlam – a Christian clothing brand built by my close friends. limited stock only.", status: "dropping fri june 5", link: "https://www.owlamapparel.com/", cta: "shop now →" },
  { tag: "traveling · digital nomad", name: "Asia Solo Trip", desc: "currently journeying across Singapore, China, and Indonesia — searching for what's next.", status: "next up", link: undefined as unknown as string, cta: "flying soon ✈︎" },
  { tag: "in-person · sydney", name: "S.A.F.E.", desc: "Sydney Asian Founders Exclusive – a private in-person group for asian founders to hangout, share values, and grow.", status: "live beta", link: "https://www.instagram.com/kentjandraa", cta: "dm if interested →" },
  { tag: "content series", name: "The Garden", desc: "\"the garden\" explores the intersection of faith, identity, creativity, & entrepreneurship. raw, uncut, out on all platforms.", status: "content series", link: "https://youtube.com/playlist?list=PLMVybBYH5sdFwq-VHsThEw2U1k7t_H03s&si=cwLUyOkOqOhWGfAS", cta: "watch now →" },
  { tag: "presets · tools", name: "Cinematic Grade", desc: "my one-click DaVinci colour grade – built for storytellers. live and exclusively available now.", status: "live", link: "https://kentjandra.gumroad.com/l/colourgrade", cta: "explore →" },
  { tag: "content series", name: "what's in the Box?", desc: "\"what's in the box?\" is a series about you, me, and everyone else. watch on all platforms.", status: "content series", link: "https://youtube.com/playlist?list=PLMVybBYH5sdHSWCAYXDQATVaAh3EoE02D&si=71YJ_rs-vGvFMOhQ", cta: "find out ❒" },
];

const values = [
  { num: "01", name: "Faith",           desc: "Everything I build starts here. Faith is not a filter — it's the foundation." },
  { num: "02", name: "Authenticity",    desc: "Creating from who you actually are, not who the algorithm wants you to be." },
  { num: "03", name: "Storytelling",    desc: "The most powerful tool a person can hold. Story outlasts every trend." },
  { num: "04", name: "Growth",          desc: "Always learning. Always becoming. Never arriving." },
  { num: "05", name: "Community",       desc: "You rise by lifting others. Real wins are shared wins." },
  { num: "06", name: "Identity",        desc: "Knowing who you are is your unfair advantage. Your background is not a limitation." },
  { num: "07", name: "Excellence",      desc: "Not for applause — for God. Do your best work because it matters, not because it's noticed." },
];

const faqs = [
  { q: "do i need to be christian?",             a: "no. the community is built on faith-first values, but we welcome anyone who resonates with authentic, values-driven content creation. you'll see faith referenced in the culture here because it's part of ken's story — but it's never a requirement." },
  { q: "what if i'm just starting out?",         a: "this is actually the best time to join. starting with the right framework means you don't spend years unlearning bad habits. some of our fastest-growing members came in with zero followers." },
  { q: "can i cancel anytime?",                  a: "yes — creatopia is month-to-month with no lock-ins. you can cancel directly from skool with one click, no questions asked." },
  { q: "what makes this different from courses?",a: "most courses teach you to copy-and-paste viral hooks. creatopia teaches you how to find and tell your story — which no algorithm can kill and no trend can replace. it's built for you to scale your personal brand, long-term." },
  { q: "how much time do i need each week?",     a: "3–5 hours minimum. the members seeing the biggest results are creating consistently, showing up to the weekly live calls, and getting peer feedback. part-time engagement still works — it just takes longer." },
];

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Home() {
  const [scrolled,  setScrolled]  = useState(false);
  const [openFaq,   setOpenFaq]   = useState<number | null>(null);
  const [isAnnual,  setIsAnnual]  = useState(true);
  const [photoFlipped, setPhotoFlipped] = useState(false);
  const [flippedCard,  setFlippedCard]  = useState<number | null>(null);

  const heroRef    = useRef<HTMLElement>(null);
  const floatRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const trailContainerRef = useRef<HTMLDivElement>(null);
  const trailIndexRef     = useRef(0);
  const lastSpawnRef      = useRef({ x: -999, y: -999 });

  /* scroll → nav */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* mouse parallax */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const xPct = (e.clientX - r.left)  / r.width  - 0.5;
      const yPct = (e.clientY - r.top)   / r.height - 0.5;
      floatRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = floatingElements[i].depth;
        el.style.transform = `translate(${xPct * d * 55}px, ${yPct * d * 55}px)`;
      });
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  /* cursor trail */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const sizes = [
      { w: 68, h: 68 }, { w: 96, h: 63 }, { w: 63, h: 99 },
      { w: 114, h: 75 }, { w: 57, h: 93 }, { w: 105, h: 84 },
      { w: 78, h: 114 }, { w: 87, h: 87 }, { w: 120, h: 66 },
      { w: 69, h: 120 }, { w: 81, h: 69 }, { w: 99, h: 99 },
    ];
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dist = Math.hypot(x - lastSpawnRef.current.x, y - lastSpawnRef.current.y);
      if (dist < 42) return;
      lastSpawnRef.current = { x, y };
      const src  = trailSrcs[trailIndexRef.current % trailSrcs.length];
      const size = sizes[trailIndexRef.current % sizes.length];
      trailIndexRef.current++;
      const img = document.createElement("img");
      img.className = "cursor-trail";
      img.src = src;
      img.alt = "";
      img.style.left   = `${x}px`;
      img.style.top    = `${y}px`;
      img.style.width  = `${size.w}px`;
      img.style.height = `${size.h}px`;
      img.style.setProperty("--r",   `${(Math.random() - 0.5) * 30}deg`);
      img.style.setProperty("--dx",  `${(Math.random() - 0.5) * 160}px`);
      img.style.setProperty("--dur", `${1.5 + Math.random() * 2.5}s`);
      trailContainerRef.current?.appendChild(img);
      setTimeout(() => img.remove(), 4100);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">ken tjandra<span>.</span></a>
        <a href="mailto:support@kentjandra.com" className="nav-email">support@kentjandra.com</a>
        <div className="nav-actions">
          <a href="#offers" className="btn-ghost">the offers</a>
          <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-red">join creatopia →</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-grain" />
        <div className="hero-glow" />
        <div className="cursor-trail-container" ref={trailContainerRef} />

        {/* floating collage */}
        {floatingElements.map((f, i) => (
          <div
            key={i}
            className="float-wrap"
            ref={el => { floatRefs.current[i] = el; }}
            style={{ left: `${f.x}%`, top: `${f.y}%`, opacity: f.opacity }}
          >
            <span
              className="float-inner"
              style={{
                fontSize: `${f.size}rem`,
                animationName: f.anim,
                animationDuration: `${5 + i * 0.55}s`,
                animationDelay: `${f.delay}s`,
              }}
            >
              {f.el}
            </span>
          </div>
        ))}

        <div className="hero-main">
          <div className="hero-photo-col">
            <p className="mindmap-label-top">core values</p>
              <div className="mindmap-root">
                <div className="mindmap-orbit-layer">
                  <svg className="mindmap-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    {([[50,6],[84,18],[95,50],[80,84],[50,95],[16,84],[10,28]] as [number,number][]).map(([x,y],i) => (
                      <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#d8cfc4" strokeWidth="0.7" strokeDasharray="2.5 2.5" />
                    ))}
                  </svg>
                  {([
                    { top: "6%",  left: "50%", name: "Faith" },
                    { top: "18%", left: "84%", name: "Authenticity" },
                    { top: "50%", left: "95%", name: "Storytelling" },
                    { top: "84%", left: "80%", name: "Growth" },
                    { top: "95%", left: "50%", name: "Community" },
                    { top: "84%", left: "16%", name: "Identity" },
                    { top: "28%", left: "10%", name: "Excellence" },
                  ]).map(pos => (
                    <div key={pos.name} className="mindmap-node" style={{ top: pos.top, left: pos.left }}>
                      <span className="mindmap-node-inner">{pos.name}</span>
                    </div>
                  ))}
                </div>
                <div
                  className={`mindmap-photo${photoFlipped ? " photo-flipped" : ""}`}
                  onClick={() => setPhotoFlipped(v => !v)}
                  role="button"
                  aria-label="Click to learn about Ken"
                >
                  <div className="photo-face photo-front">
                    <Image
                      src="/img/ken.jpg"
                      alt="Ken Tjandra"
                      fill
                      sizes="(max-width: 768px) 80vw, 25vw"
                      style={{ objectFit: "cover", objectPosition: "center 10%" }}
                    />
                  </div>
                  <div className="photo-face photo-back">
                    <p>21. indo-australian. saved by Grace. building culture, community &amp; content – with Christ at the centre.</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="hero-text-col">
            <div className="hero-eyebrow">
              <span className="hero-dot" />
              for faith-driven founders &amp; creators
            </div>
            <h1>
              your story is your
              <br />
              <em>unfair advantage.</em>
            </h1>
            <p className="hero-sub">
              stop overthinking. start creating. build a brand that actually sounds like you.
            </p>
            <div className="hero-ctas">
              <a href="#offers" className="btn-primary">choose your plan →</a>
            </div>
            <p className="hero-tagline">real is the new viral.</p>
          </div>
        </div>

        <div className="scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="section section-light">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">✦ sound familiar?</span>
          <h2 className="section-h2 section-h2-dark">
            you&apos;re not the problem.<br />the approach is.
          </h2>
          <div className="problem-grid">
            {problems.map((p, i) => (
              <div
                className={`flip-card${flippedCard === i ? " flipped" : ""}`}
                key={p.num}
                onClick={() => setFlippedCard(flippedCard === i ? null : i)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="problem-num">{p.num}</div>
                    <h3>{p.frontTitle}</h3>
                    <p>{p.frontBody}</p>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-label">✦ the fix</div>
                    <h3>{p.backTitle}</h3>
                    <p>{p.backBody}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-white" />

      {/* ── STUDENT WINS ── */}
      <section className="section-black ss-section">
        <div className="section-inner ss-header">
          <span className="eyebrow eyebrow-red">✦ student wins</span>
          <h2 className="section-h2 section-h2-light">real results. real people.</h2>
        </div>
        {screenshots.length > 0 ? (
          <div className="ss-rows">
            {([0, 1, 2] as const).map(ri => {
              const row = screenshots.filter((_, i) => i % 3 === ri);
              if (!row.length) return null;
              return (
                <div key={ri} className="ss-row-wrap">
                  <div className={`ss-row-track ss-rt-${ri}`}>
                    {[...row, ...row].map((src, i) => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={i} src={src} alt="Student win" className="ss-item" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="ss-placeholder">
            <p>screenshots coming soon.</p>
          </div>
        )}
      </section>

      {/* ── OFFERS ── */}
      <section id="offers" className="section section-white">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">✦ plans & pricing</span>
          <h2 className="section-h2 section-h2-dark">choose your path.</h2>
          <p className="section-lead section-lead-dark">pick an offer that suits your needs.</p>

          <div className="offers-grid">
            <div className="offer-card offer-garden" style={{ position: "relative" }}>
              <div className="price-toggle price-toggle-corner">
                <span className={`toggle-label${!isAnnual ? " toggle-active" : ""}`}>mo</span>
                <button
                  className={`toggle-switch${isAnnual ? " toggle-on" : ""}`}
                  onClick={() => setIsAnnual(v => !v)}
                  aria-label="Toggle billing period"
                >
                  <span className="toggle-thumb" />
                </button>
                <span className={`toggle-label${isAnnual ? " toggle-active" : ""}`}>
                  yr <span className="toggle-save">-50%</span>
                </span>
              </div>
              <span className="offer-badge badge-red">most popular</span>
              <div>
                <div className="offer-who">Creatopia</div>
                <h3 className="offer-title">Group Coaching<br /><span style={{ opacity: 0.45, fontSize: "1.1rem" }}>Community Program</span></h3>
              </div>
              <div>
                <div className="offer-price">
                  <span className="price-amount">{isAnnual ? "$53" : "$107"}</span>
                  <span className="price-period">/month{isAnnual && <span className="price-annual-bracket"> ($640/yr)</span>}</span>
                </div>
              </div>
              <p className="offer-tagline">for entrepreneurs and creators who are done overthinking and ready to build a brand that actually sounds like them.</p>
              <div className="offer-divider" />
              <ul className="offer-features">
                {["full story system curriculum","weekly live group calls with ken","community accountability on skool","platform playbooks (IG, TT, YT)","content vault — hooks, templates, swipe files","entrepreneur identity modules","peer feedback on your content","cancel anytime"].map(f => (
                  <li className="offer-feature" key={f}><span className="feature-check">✦</span>{f}</li>
                ))}
              </ul>
              <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="offer-cta cta-garden">join creatopia →</a>
            </div>
            <div className="offer-card offer-greenhouse">
              <div className="offer-badges-row">
                <span className="offer-badge badge-white">limited spots</span>
                <span className="offer-badge badge-white-outline">asian-only</span>
              </div>
              <div>
                <div className="offer-who">Greenhouse</div>
                <h3 className="offer-title">1-on-1 Coaching<br /><span style={{ opacity: 0.45, fontSize: "1.1rem" }}>Private Scaling</span></h3>
              </div>
              <div className="offer-price">
                <span className="price-amount">$3,000</span>
                <span className="price-period">/month<span className="price-annual-bracket"> (x3 months)</span></span>
              </div>
              <p className="offer-tagline">for invisible business owners making $10k/month+ who are ready to go all-in on their personal brand. i&apos;m in your corner every day.</p>
              <div className="offer-divider" />
              <ul className="offer-features">
                {["private 1-on-1 calls with ken (x1/week)","daily access via voice memo + dm","custom 90-day brand roadmap","content review on every piece you post","full creatopia community access included","direct introductions to ken's network","90-day commitment, period."].map(f => (
                  <li className="offer-feature" key={f}><span className="feature-check">✦</span>{f}</li>
                ))}
              </ul>
              <a href="#coaching-form" className="offer-cta cta-greenhouse">apply for coaching →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-white">
        <div className="section-inner-sm">
          <span className="eyebrow eyebrow-muted">✦ questions</span>
          <h2 className="section-h2 section-h2-dark">before you join...</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className={`faq-body${openFaq === i ? " open" : ""}`}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COACHING FORM ── */}
      <section className="section section-light" id="coaching-form">
        <div className="section-inner-sm">
          <span className="eyebrow eyebrow-muted">✦ apply</span>
          <h2 className="section-h2 section-h2-dark">ready to work together?</h2>
          <p className="section-lead section-lead-dark">fill out the form below and ken will be in touch within 48 hours.</p>
          <div className="typeform-wrap">
            <iframe
              src="https://form.typeform.com/to/io6ZyWkn"
              style={{ width: "100%", height: "900px", border: "none" }}
              title="Work with Ken Tjandra — Application"
            />
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="section section-light">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">✦ what i&apos;m building</span>
          <h2 className="section-h2 section-h2-dark">my projects.</h2>
          <p className="section-lead section-lead-dark">products and projects in the works.</p>
          <div className="work-grid">
            {projects.map(p => (
              <a key={p.name} href={p.link ?? undefined} target={!p.link || p.link === "#" ? undefined : "_blank"} rel="noopener noreferrer" className="work-card">
                <div className="work-card-tag">{p.tag}</div>
                <div className="work-card-name">{p.name}</div>
                <div className="work-card-desc">{p.desc}</div>
                <div className="work-card-footer">
                  <span className={`work-status${p.status === "live" ? " work-status-live" : ""}`}>{p.status}</span>
                  <span className="work-cta">{p.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <span className="eyebrow eyebrow-light">✦ ready?</span>
          <h2>come as you are.<br /><em>leave as who you&apos;re meant to be.</em></h2>
          <div className="final-cta-btns">
            <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-primary-light">join creatopia — $107/mo →</a>
            <a href="https://form.typeform.com/to/io6ZyWkn" target="_blank" rel="noopener noreferrer" className="btn-secondary-light">apply for 1-1 coaching →</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <a href="#" className="footer-logo">ken tjandra<span>.</span></a>
        <div className="footer-links">
          <a href="https://www.instagram.com/kentjandraa"  target="_blank" rel="noopener noreferrer">instagram</a>
          <a href="https://www.tiktok.com/@kentjandraa"    target="_blank" rel="noopener noreferrer">tiktok</a>
          <a href="https://www.youtube.com/@kentjandra"    target="_blank" rel="noopener noreferrer">youtube</a>
          <a href={SKOOL}                                  target="_blank" rel="noopener noreferrer">skool community</a>
          <a href="https://form.typeform.com/to/io6ZyWkn"   target="_blank" rel="noopener noreferrer">coaching</a>
          <a href="https://docs.google.com/document/d/1pXNcOx7kqadX1OX2gwMfh9EDX2F3Cz1FEMukHBY3u5s/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">policies</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} ken tjandra. all rights reserved.</p>
        <p className="footer-faith">built in faith. rooted in story.</p>
      </footer>
    </>
  );
}
