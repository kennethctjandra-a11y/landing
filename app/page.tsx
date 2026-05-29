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
].map(n => `/trail/${n}.png`).sort(() => Math.random() - 0.5);

const projects = [
  { tag: "presets · tools",       name: "Colour Grade",    desc: "Cinematic colour grading presets and tools built for storytellers. Live and exclusively available now.",                                     status: "live",        link: "#",  cta: "explore →" },
  { tag: "in-person · sydney",    name: "S.A.F.E.",        desc: "Sydney Asian Founders Exclusive — a private in-person community for asian founders to build, share values, and grow together.",             status: "coming soon", link: "#",  cta: "coming soon" },
  { tag: "youtube · documentary", name: "Asia Solo Trip",  desc: "Documenting a solo journey across asia — faith, identity, and creativity on the road. the next youtube series.",                            status: "coming soon", link: "#",  cta: "coming soon" },
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
  { q: "what makes this different from courses?",a: "most courses teach tactics. creatopia teaches you how to find and tell your story — which no algorithm can kill and no trend can replace. it's built specifically for second-gen asian and christian founders, not a generic creator audience." },
  { q: "how much time do i need each week?",     a: "3–5 hours minimum. the members seeing the biggest results are creating consistently, showing up to the weekly live calls, and getting peer feedback. part-time engagement still works — it just takes longer." },
];

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Home() {
  const [scrolled,        setScrolled]        = useState(false);
  const [openFaq,         setOpenFaq]         = useState<number | null>(null);
  const [carouselIndex,   setCarouselIndex]   = useState(0);
  const [carouselPaused,  setCarouselPaused]  = useState(false);

  const heroRef    = useRef<HTMLElement>(null);
  const floatRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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

  /* carousel auto-rotate */
  useEffect(() => {
    if (!carouselPaused) {
      intervalRef.current = setInterval(() => {
        setCarouselIndex(p => (p + 1) % champions.length);
      }, 3500);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [carouselPaused]);

  const carouselPrev = () => setCarouselIndex(p => (p - 1 + champions.length) % champions.length);
  const carouselNext = () => setCarouselIndex(p => (p + 1) % champions.length);
  const deg = 360 / champions.length; // 60

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

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            for faith-first founders &amp; creators
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
            <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              join creatopia — $107/mo →
            </a>
            <a href="#offers" className="btn-secondary">apply for 1-1 coaching</a>
          </div>
          <a href="#offers" className="hero-see-offers">see the offers ↓</a>
          <p className="hero-tagline">real is the new viral.</p>
        </div>

        <div className="scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="stats-inner">
          {[
            { value: "1.9M+",   label: "combined followers" },
            { value: "1,000+",  label: "creators helped" },
            { value: "$16K/m",  label: "community scaled" },
            { value: "90 days", label: "avg. to first 10K" },
          ].map(s => (
            <div key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
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
            {[
              { num: "01", title: "you've tried posting. it didn't stick.",         body: "you followed the advice. posted consistently. used trending audio. and still nothing. because tactics without story are noise." },
              { num: "02", title: "you're earning, but invisible online.",           body: "you've built something real in the offline world. but online, nobody knows you exist. your work speaks — but your audience can't hear it." },
              { num: "03", title: "you overthink every idea before it's made.",     body: "the draft folder is full. the ideas are there. but imposter syndrome, perfectionism, and fear of judgment keep every post unpublished." },
            ].map(p => (
              <div className="problem-card" key={p.num}>
                <div className="problem-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-white" />

      {/* ── CREATOR COLLAGE ── */}
      <section className="section section-black">
        <div className="section-inner">
          <div className="creator-intro">
            <span className="eyebrow eyebrow-red">✦ student results</span>
            <h2 className="section-h2 section-h2-light">creators who stopped waiting.</h2>
            <p className="section-lead section-lead-light">
              real people from the community — founders who used their story to build something real.
            </p>
          </div>
          <div className="creator-grid">
            {creators.map(c => (
              <div className="creator-card" key={c.handle}>
                <div className="creator-top">
                  <div className="creator-avatar" style={{ background: c.avatarBg, color: c.avatarColor }}>{c.initials}</div>
                  <div className="creator-meta">
                    <div className="creator-name">{c.name}</div>
                    <a href={c.igUrl} target="_blank" rel="noopener noreferrer" className="creator-handle">{c.handle}</a>
                    <div className="creator-platforms">
                      {c.platforms.map(p => <span className="platform-badge" key={p}>{p}</span>)}
                    </div>
                  </div>
                </div>
                <div className="creator-growth">
                  <span className="growth-before">{c.before}</span>
                  <span className="growth-arrow">→</span>
                  <span className="growth-after">{c.after}</span>
                </div>
                <p className="creator-quote">&ldquo;{c.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION ── */}
      <section className="section section-light">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">✦ the shift</span>
          <h2 className="section-h2 section-h2-dark">
            from creating out of fear<br />to creating from freedom.
          </h2>
          <div className="transform-grid">
            <div className="transform-col transform-before">
              <div className="transform-label">before</div>
              <div className="transform-items">
                {[["😮‍💨","creating from fear and comparison"],["📉","chasing metrics that don't move"],["📋","copy-paste content that sounds like everyone else"],["🧱","stuck in a loop of overthinking and not posting"],["🌫️","invisible online despite real-world success"]].map(([icon,text]) => (
                  <div className="transform-item" key={text}><span className="transform-icon">{icon}</span><span>{text}</span></div>
                ))}
              </div>
            </div>
            <div className="transform-arrow"><div className="arrow-circle">→</div></div>
            <div className="transform-col transform-after">
              <div className="transform-label">after</div>
              <div className="transform-items">
                {[["✦","creating from clarity and conviction"],["📈","attracting the right people with the right content"],["🎙️","content that sounds unmistakably like you"],["⚡","a system that makes posting feel natural, not forced"],["🌿","a growing audience that trusts you before you sell"]].map(([icon,text]) => (
                  <div className="transform-item" key={text}><span className="transform-icon">{icon}</span><span>{text}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-white" />

      {/* ── OFFERS ── */}
      <section id="offers" className="section section-white">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">✦ pricing</span>
          <h2 className="section-h2 section-h2-dark">choose your path.</h2>
          <p className="section-lead section-lead-dark">same transformation. two ways to get there.</p>
          <div className="offers-grid">
            <div className="offer-card offer-garden">
              <span className="offer-badge badge-red">most popular</span>
              <div>
                <div className="offer-who">the community</div>
                <h3 className="offer-title">The Garden<br /><span style={{ opacity: 0.45, fontSize: "1.1rem" }}>creatopia</span></h3>
                <p className="offer-subtag">turning entrepreneurs into creators</p>
              </div>
              <div className="offer-price">
                <span className="price-amount">$107</span>
                <span className="price-period">/month</span>
              </div>
              <p className="offer-tagline">for founders and creators who are done overthinking and ready to build a brand that actually sounds like them.</p>
              <div className="offer-divider" />
              <ul className="offer-features">
                {["full story system curriculum","weekly live group calls with ken","1,000+ member community on skool","platform playbooks (IG, TT, YT, LI)","content vault — hooks, templates, swipe files","asian creator advantage modules","peer feedback on your content","cancel anytime"].map(f => (
                  <li className="offer-feature" key={f}><span className="feature-check">✦</span>{f}</li>
                ))}
              </ul>
              <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="offer-cta cta-garden">join the garden →</a>
            </div>
            <div className="offer-card offer-greenhouse">
              <span className="offer-badge badge-white">limited spots</span>
              <div>
                <div className="offer-who">1-on-1 with ken</div>
                <h3 className="offer-title">The Greenhouse<br /><span style={{ opacity: 0.45, fontSize: "1.1rem" }}>private coaching</span></h3>
              </div>
              <div className="offer-price">
                <span className="price-amount">$3,000</span>
                <span className="price-period">/month</span>
              </div>
              <p className="offer-tagline">for founders who are ready to go all-in. i&apos;m in your corner every day — strategy, content, feedback, accountability.</p>
              <div className="offer-divider" />
              <ul className="offer-features">
                {["private 1-on-1 calls with ken (2x/month)","daily access via voice memo + dm","custom 90-day brand roadmap","content review on every piece you post","full creatopia community access included","direct introductions to ken's network","90-day minimum commitment"].map(f => (
                  <li className="offer-feature" key={f}><span className="feature-check">✦</span>{f}</li>
                ))}
              </ul>
              <a href="https://form.typeform.com/to/io6ZyWkn" target="_blank" rel="noopener noreferrer" className="offer-cta cta-greenhouse">apply for coaching →</a>
            </div>
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
              style={{ width: "100%", height: "600px", border: "none" }}
              title="Work with Ken Tjandra — Application"
            />
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="section section-light">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">✦ what i&apos;m building</span>
          <h2 className="section-h2 section-h2-dark">current projects.</h2>
          <p className="section-lead section-lead-dark">products and projects in the works.</p>
          <div className="work-grid">
            {projects.map(p => (
              <a key={p.name} href={p.link} target={p.link === "#" ? undefined : "_blank"} rel="noopener noreferrer" className="work-card">
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

      {/* ── CHAMPIONS CAROUSEL ── */}
      <section className="section section-dark">
        <div className="section-inner">
          <span className="eyebrow eyebrow-gold">✦ the champions</span>
          <h2 className="section-h2 section-h2-light">real numbers. real people.</h2>
          <p className="section-lead section-lead-light">
            these are creatopia members who showed up, told their story, and built audiences that changed their lives.
          </p>

          <div
            className="carousel-wrap"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            <div className="carousel-scene">
              <div
                className="carousel-track"
                style={{ transform: `rotateY(${-carouselIndex * deg}deg)` }}
              >
                {champions.map((c, i) => (
                  <div
                    key={c.name}
                    className={`carousel-card${i === carouselIndex ? " carousel-card-active" : ""}`}
                    style={{ transform: `rotateY(${i * deg}deg) translateZ(300px)` }}
                  >
                    <div className="champ-top">
                      <div className="champ-avatar" style={{ background: c.avatarBg, color: c.avatarColor }}>{c.initials}</div>
                      <div>
                        <div className="champ-name">{c.name}</div>
                        <a href={c.igUrl} target="_blank" rel="noopener noreferrer" className="champ-handle">{c.handle}</a>
                      </div>
                    </div>
                    <div className="champ-divider" />
                    <div className="champ-stats">
                      <div className="champ-stat">
                        <span className="champ-platform">📷 Instagram</span>
                        <span className="champ-num">{c.ig}</span>
                      </div>
                      {c.tt !== "—" && (
                        <div className="champ-stat">
                          <span className="champ-platform">🎵 TikTok</span>
                          <span className="champ-num">{c.tt}</span>
                        </div>
                      )}
                    </div>
                    <div className="champ-total">
                      <span className="champ-total-label">✦ total reach</span>
                      <span className="champ-total-num">{c.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn" onClick={carouselPrev} aria-label="Previous">←</button>
              <div className="carousel-dots">
                {champions.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot${i === carouselIndex ? " active" : ""}`}
                    onClick={() => setCarouselIndex(i)}
                    aria-label={`Go to ${champions[i].name}`}
                  />
                ))}
              </div>
              <button className="carousel-btn" onClick={carouselNext} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </section>


      {/* ── ABOUT ── */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-visual">
              <div className="mindmap-root">
                <svg className="mindmap-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {([[50,6],[84,18],[95,50],[80,84],[50,95],[16,84],[10,28]] as [number,number][]).map(([x,y],i) => (
                    <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#d8cfc4" strokeWidth="0.7" strokeDasharray="2.5 2.5" />
                  ))}
                </svg>
                <div className="mindmap-photo">
                  <Image
                    src="/img/ken.jpg"
                    alt="Ken Tjandra"
                    fill
                    sizes="(max-width: 768px) 80vw, 22vw"
                    style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  />
                </div>
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
                    {pos.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow eyebrow-muted">✦ who is ken?</span>
              <h2>21. indo-australian.<br /><em>building in faith.</em></h2>
              <div className="about-body">
                <p>3 years ago — zero followers, zero dollars, zero direction. then i gave my life to Jesus and everything changed. not because i got a strategy. because i got a story.</p>
                <p>i live at the intersection of faith, culture, and content. not because it&apos;s a brand position — because it&apos;s my testimony. i grew 700K+ by sharing it all: the faith journey, the failures, the comeback.</p>
                <p>creatopia is what i wish existed when i was starting. a room for founders who have something real to say, and just need to learn how to say it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-white" />

      {/* ── FAQ ── */}
      <section className="section section-white">
        <div className="section-inner-sm">
          <span className="eyebrow eyebrow-muted">✦ questions</span>
          <h2 className="section-h2 section-h2-dark">before you join.</h2>
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

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="final-cta-glow" />
        <div className="final-cta-watermark">α</div>
        <div className="final-cta-inner">
          <span className="eyebrow eyebrow-light">✦ the garden is open</span>
          <h2>come as you are.<br /><em>leave as who you&apos;re meant to be.</em></h2>
          <p>your story is not too ordinary. your background is not a disadvantage. your faith is not a filter. it&apos;s all the content.</p>
          <div className="final-cta-btns">
            <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-primary-light">join creatopia — $107/mo →</a>
            <a href="https://form.typeform.com/to/io6ZyWkn" target="_blank" rel="noopener noreferrer" className="btn-secondary-light">apply for coaching</a>
          </div>
          <p className="final-micro">30-day money back guarantee · cancel anytime · hosted on skool</p>
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
          <a href="https://www.kentjandra.com/coaching"    target="_blank" rel="noopener noreferrer">coaching</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} ken tjandra. all rights reserved.</p>
        <p className="footer-faith">built in faith. rooted in story.</p>
      </footer>
    </>
  );
}
