"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── DATA ───────────────────────────────────────────────── */

const creators = [
  {
    name: "Aung Sett",
    handle: "@aungsett_",
    initials: "AS",
    platforms: ["IG", "TT"],
    before: "0",
    after: "80K+",
    quote: "ken taught me my story was the content. now i can't stop creating.",
    topViews: "2.1M views",
    avatarBg: "#2a3a2a",
    avatarColor: "#7aad7a",
  },
  {
    name: "Ryan Devine",
    handle: "@itsryandevine",
    initials: "RD",
    platforms: ["IG"],
    before: "1.2K",
    after: "60K+",
    quote: "stopped chasing trends. started telling my story. everything changed.",
    topViews: "890K views",
    avatarBg: "#1e2f4a",
    avatarColor: "#6a9fd8",
  },
  {
    name: "Jesse Ongkili",
    handle: "@jesse_ongkili",
    initials: "JO",
    platforms: ["IG", "TT"],
    before: "800",
    after: "25K+",
    quote: "had my first 100K reel 3 weeks after joining. the framework works.",
    topViews: "450K views",
    avatarBg: "#3a2a1a",
    avatarColor: "#d4a853",
  },
  {
    name: "Chris Vu",
    handle: "@lolchrisvu",
    initials: "CV",
    platforms: ["IG"],
    before: "2K",
    after: "55K+",
    quote: "used to hate making content. now i look forward to it every day.",
    topViews: "1.3M views",
    avatarBg: "#2a1a2a",
    avatarColor: "#c06aa0",
  },
  {
    name: "Cafe Andy",
    handle: "@cafeandy_",
    initials: "CA",
    platforms: ["IG"],
    before: "4K",
    after: "90K+",
    quote: "grew my café audience faster than any paid ad ever did. pure storytelling.",
    topViews: "3.2M views",
    avatarBg: "#1a2a2a",
    avatarColor: "#5aada8",
  },
  {
    name: "Matthew Kim",
    handle: "@matthewkim10",
    initials: "MK",
    platforms: ["IG"],
    before: "500",
    after: "35K+",
    quote: "creatopia gave me the clarity to know what to say and how to say it.",
    topViews: "680K views",
    avatarBg: "#2a2a1a",
    avatarColor: "#ada85a",
  },
];

const testimonials = [
  {
    name: "Jesse Ongkili",
    handle: "@jesse_ongkili · IG + TikTok",
    initials: "JO",
    avatarBg: "#3a2a1a",
    avatarColor: "#d4a853",
    quote:
      "i came in with 800 followers and zero direction. ken showed me how to use my testimony as the content. 3 weeks in, i had a reel hit 450K. the community accountability is what made it stick.",
    result: "800 → 25K+ followers",
  },
  {
    name: "Ryan Devine",
    handle: "@itsryandevine · Instagram",
    initials: "RD",
    avatarBg: "#1e2f4a",
    avatarColor: "#6a9fd8",
    quote:
      "i was earning decent money but completely invisible online. creatopia fixed my positioning in week one. the story system is genuinely different from anything i've seen — no tactics, just truth.",
    result: "1.2K → 60K+ followers",
  },
  {
    name: "Aung Sett",
    handle: "@aungsett_ · IG + TikTok",
    initials: "AS",
    avatarBg: "#2a3a2a",
    avatarColor: "#7aad7a",
    quote:
      "i was overthinking every post. ken's framework broke that cycle completely. now i batch content in a single morning and it actually sounds like me — not a template.",
    result: "0 → 80K+ followers",
  },
  {
    name: "Andy",
    handle: "@cafeandy_ · Instagram",
    initials: "CA",
    avatarBg: "#1a2a2a",
    avatarColor: "#5aada8",
    quote:
      "grew my café's audience 20x in 6 months with zero paid ads. the community is full of people who actually get the asian creator experience. it's the room i didn't know i needed.",
    result: "4K → 90K+ followers",
  },
  {
    name: "Olivia T.",
    handle: "Creatopia Member · TikTok",
    initials: "OT",
    avatarBg: "#2a1a2a",
    avatarColor: "#b06aa0",
    quote:
      "as a second-gen asian woman, i always felt like i had to shrink myself online. ken literally told me my background was the strategy. first month in: 12K new followers.",
    result: "3K → 42K+ followers",
  },
  {
    name: "Jannat",
    handle: "Creatopia Member · IG + YouTube",
    initials: "JA",
    avatarBg: "#2a2a1a",
    avatarColor: "#b0903a",
    quote:
      "worth every dollar. i've paid for 4 courses that gave me generic advice. this is the first time someone showed me how to build a brand that sounds like mine, not theirs.",
    result: "0 → 18K+ followers",
  },
];

const faqs = [
  {
    q: "do i need to be christian?",
    a: "no. the community is built on faith-first values, but we welcome anyone who resonates with authentic, values-driven content creation. you'll see faith referenced in the culture here because it's part of ken's story — but it's never a requirement.",
  },
  {
    q: "what if i'm just starting out?",
    a: "this is actually the best time to join. starting with the right framework means you don't spend years unlearning bad habits. some of our fastest-growing members came in with zero followers.",
  },
  {
    q: "can i cancel anytime?",
    a: "yes — creatopia is month-to-month with no lock-ins. you can cancel directly from skool with one click, no questions asked.",
  },
  {
    q: "what makes this different from other creator courses?",
    a: "most courses teach you tactics. creatopia teaches you how to find and tell your story — which no algorithm can kill and no trend can replace. it's also built specifically for second-gen asian and christian founders, not a generic creator audience.",
  },
  {
    q: "how much time do i need each week?",
    a: "3–5 hours minimum. the members seeing the biggest results are creating consistently, showing up to the weekly live calls, and getting peer feedback. part-time engagement still works — it just takes longer.",
  },
];

const SKOOL = "https://www.skool.com/creatopia/about";

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          ken tjandra<span>.</span>
        </a>
        <div className="nav-actions">
          <a href="#offers" className="btn-ghost">
            the offers
          </a>
          <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-red">
            join creatopia →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-glow" />

        {/* Left: text */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            for asian founders · creators · entrepreneurs
          </div>
          <h1>
            your story is your
            <br />
            <em>unfair advantage.</em>
          </h1>
          <p className="hero-sub">
            stop overthinking. start creating. build a brand that actually
            sounds like you.
          </p>
          <div className="hero-ctas">
            <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              join creatopia — $97/mo →
            </a>
            <a href="#offers" className="btn-secondary">
              apply for 1-1 coaching
            </a>
          </div>
          <p className="hero-tagline">real is the new viral.</p>
        </div>

        {/* Right: photo */}
        <div className="hero-right">
          <div className="hero-photo-wrap">
            <Image
              src="/ken.jpg"
              alt="Ken Tjandra — personal brand coach"
              fill
              priority
              sizes="(max-width: 900px) 0px, 44vw"
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
            <div className="hero-photo-tag">
              <span className="photo-tag-name">ken tjandra</span>
              <span className="photo-tag-sub">700K+ followers built</span>
            </div>
          </div>
          <div className="hero-badge">
            <div className="badge-num">🧧</div>
            <div className="badge-label">in christ</div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="stats-inner">
          {[
            { value: "700K+",  label: "combined followers" },
            { value: "1,000+", label: "creators helped" },
            { value: "$16K/m", label: "community scaled" },
            { value: "90 days", label: "avg. to first 10K" },
          ].map((s) => (
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
          <span className="eyebrow eyebrow-muted">sound familiar?</span>
          <h2 className="section-h2 section-h2-dark">
            you&apos;re not the problem.
            <br />
            the approach is.
          </h2>
          <div className="problem-grid">
            {[
              {
                num: "01",
                title: "you've tried posting. it didn't stick.",
                body: "you followed the advice. posted consistently. used trending audio. and still nothing. because tactics without story are noise.",
              },
              {
                num: "02",
                title: "you're earning, but invisible online.",
                body: "you've built something real in the offline world. but online, nobody knows you exist. your work speaks — but your audience can't hear it.",
              },
              {
                num: "03",
                title: "you overthink every idea before it's made.",
                body: "the draft folder is full. the ideas are there. but imposter syndrome, perfectionism, and fear of judgment keep every post unpublished.",
              },
            ].map((p) => (
              <div className="problem-card" key={p.num}>
                <div className="problem-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATOR COLLAGE ── */}
      <section className="section section-black">
        <div className="section-inner">
          <div className="creator-intro">
            <span className="eyebrow eyebrow-red">student results</span>
            <h2 className="section-h2 section-h2-light">
              creators who stopped waiting.
            </h2>
            <p className="section-lead section-lead-light">
              real people from the community — second-gen asian founders who
              used their story to build something real.
            </p>
          </div>
          <div className="creator-grid">
            {creators.map((c) => (
              <div className="creator-card" key={c.handle}>
                <div className="creator-top">
                  <div
                    className="creator-avatar"
                    style={{ background: c.avatarBg, color: c.avatarColor }}
                  >
                    {c.initials}
                  </div>
                  <div className="creator-meta">
                    <div className="creator-name">{c.name}</div>
                    <div className="creator-handle">{c.handle}</div>
                    <div className="creator-platforms">
                      {c.platforms.map((p) => (
                        <span className="platform-badge" key={p}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="creator-growth">
                  <span className="growth-before">{c.before}</span>
                  <span className="growth-arrow">→</span>
                  <span className="growth-after">{c.after}</span>
                </div>
                <p className="creator-quote">&ldquo;{c.quote}&rdquo;</p>
                <p className="creator-views">
                  top video: <strong>{c.topViews}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION ── */}
      <section className="section section-light">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">the shift</span>
          <h2 className="section-h2 section-h2-dark">
            from creating out of fear
            <br />
            to creating from freedom.
          </h2>
          <div className="transform-grid">
            <div className="transform-col transform-before">
              <div className="transform-label">before creatopia</div>
              <div className="transform-items">
                {[
                  ["😮‍💨", "creating from fear and comparison"],
                  ["📉",   "chasing metrics that don't move"],
                  ["📋",   "copy-paste content that sounds like everyone else"],
                  ["🧱",   "stuck in a loop of overthinking and not posting"],
                  ["🌫️",  "invisible online despite real-world success"],
                ].map(([icon, text]) => (
                  <div className="transform-item" key={text}>
                    <span className="transform-icon">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="transform-arrow">
              <div className="arrow-circle">→</div>
            </div>
            <div className="transform-col transform-after">
              <div className="transform-label">after creatopia</div>
              <div className="transform-items">
                {[
                  ["✦",  "creating from clarity and conviction"],
                  ["📈", "attracting the right people with the right content"],
                  ["🎙️","content that sounds unmistakably like you"],
                  ["⚡", "a system that makes posting feel natural, not forced"],
                  ["🌿","a growing audience that trusts you before you sell"],
                ].map(([icon, text]) => (
                  <div className="transform-item" key={text}>
                    <span className="transform-icon">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section id="offers" className="section section-white">
        <div className="section-inner">
          <span className="eyebrow eyebrow-muted">where to start</span>
          <h2 className="section-h2 section-h2-dark">two ways in.</h2>
          <p className="section-lead section-lead-dark">
            pick the one that matches where you are right now.
          </p>
          <div className="offers-grid">
            {/* The Garden */}
            <div className="offer-card offer-garden">
              <span className="offer-badge badge-red">most popular</span>
              <div>
                <div className="offer-who">the community</div>
                <h3 className="offer-title">
                  The Garden
                  <br />
                  <span style={{ opacity: 0.45, fontSize: "1.1rem" }}>creatopia</span>
                </h3>
              </div>
              <div className="offer-price">
                <span className="price-amount">$97</span>
                <span className="price-period">/month</span>
              </div>
              <p className="offer-tagline">
                for asian and christian creators who are done overthinking and
                ready to build a brand that actually sounds like them.
              </p>
              <div className="offer-divider" />
              <ul className="offer-features">
                {[
                  "full story system curriculum",
                  "weekly live group calls with ken",
                  "1,000+ member community on skool",
                  "platform playbooks (IG, TT, YT, LI)",
                  "content vault — hooks, templates, swipe files",
                  "asian creator advantage modules",
                  "peer feedback on your content",
                  "cancel anytime",
                ].map((f) => (
                  <li className="offer-feature" key={f}>
                    <span className="feature-check">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="offer-cta cta-garden">
                join the garden →
              </a>
            </div>

            {/* The Greenhouse */}
            <div className="offer-card offer-greenhouse">
              <span className="offer-badge badge-white">limited spots</span>
              <div>
                <div className="offer-who">1-on-1 with ken</div>
                <h3 className="offer-title">
                  The Greenhouse
                  <br />
                  <span style={{ opacity: 0.45, fontSize: "1.1rem" }}>private coaching</span>
                </h3>
              </div>
              <div className="offer-price">
                <span className="price-amount">$3,000</span>
                <span className="price-period">/month</span>
              </div>
              <p className="offer-tagline">
                for founders who are ready to go all-in. i&apos;m in your corner
                every day — strategy, content, feedback, accountability.
              </p>
              <div className="offer-divider" />
              <ul className="offer-features">
                {[
                  "private 1-on-1 calls with ken (2x/month)",
                  "daily access via voice memo + dm",
                  "custom 90-day brand roadmap",
                  "content review on every piece you post",
                  "full creatopia community access included",
                  "direct introductions to ken's network",
                  "90-day minimum commitment",
                ].map((f) => (
                  <li className="offer-feature" key={f}>
                    <span className="feature-check">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://form.typeform.com/to/io6ZyWkn"
                target="_blank"
                rel="noopener noreferrer"
                className="offer-cta cta-greenhouse"
              >
                apply for coaching →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-dark">
        <div className="section-inner">
          <span className="eyebrow eyebrow-red">in their words</span>
          <h2 className="section-h2 section-h2-light">
            real people. real results.
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testi-card" key={t.name}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    className="testi-avatar"
                    style={{ background: t.avatarBg, color: t.avatarColor }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-handle">{t.handle}</div>
                  </div>
                </div>
                <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-result">✦ {t.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-photo-wrap">
                <Image
                  src="/ken.jpg"
                  alt="Ken Tjandra"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                />
              </div>
              <div className="about-tag">
                <div className="about-tag-num">700K+</div>
                <div className="about-tag-label">followers built</div>
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow eyebrow-muted">who is ken?</span>
              <h2>
                21. indo-australian.
                <br />
                <em>building in faith.</em>
              </h2>
              <div className="about-body">
                <p>
                  3 years ago i was grinding in a 3 square meter room with zero
                  followers, zero dollars, and zero direction.{" "}
                  <strong>then i gave my life to Jesus and everything changed.</strong>
                </p>
                <p>not because i got a strategy. because i got a story.</p>
                <p>
                  i grew 700K+ followers across platforms by sharing my raw
                  testimony in a cinematic format — the faith journey, the
                  business failures, the family tension, the comeback. all of
                  it. unfiltered.
                </p>
                <p>
                  creatopia is what i wish had existed when i was starting.{" "}
                  <strong>
                    a room built for second-gen asian founders who have
                    something real to say and just need to learn how to say it.
                  </strong>
                </p>
              </div>
              <div className="about-ctas">
                <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  join the community →
                </a>
                <a
                  href="https://www.youtube.com/@kentjandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark"
                >
                  watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-white">
        <div className="section-inner-sm">
          <span className="eyebrow eyebrow-muted">questions</span>
          <h2 className="section-h2 section-h2-dark">before you join.</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className="faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className={`faq-body${openFaq === i ? " open" : ""}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="final-cta-glow" />
        <div className="final-cta-inner">
          <span className="eyebrow eyebrow-light">the garden is open</span>
          <h2>
            come as you are.
            <br />
            <em>leave as who you&apos;re meant to be.</em>
          </h2>
          <p>
            your story is not too ordinary. your background is not a
            disadvantage. your faith is not a filter. it&apos;s all the content.
          </p>
          <div className="final-cta-btns">
            <a href={SKOOL} target="_blank" rel="noopener noreferrer" className="btn-primary-light">
              join creatopia — $97/mo →
            </a>
            <a
              href="https://form.typeform.com/to/io6ZyWkn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-light"
            >
              apply for coaching
            </a>
          </div>
          <p className="final-micro">
            30-day money back guarantee · cancel anytime · hosted on skool
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <a href="#" className="footer-logo">
          ken tjandra<span>.</span>
        </a>
        <div className="footer-links">
          <a href="https://www.instagram.com/kentjandraa" target="_blank" rel="noopener noreferrer">instagram</a>
          <a href="https://www.tiktok.com/@kentjandraa" target="_blank" rel="noopener noreferrer">tiktok</a>
          <a href="https://www.youtube.com/@kentjandra" target="_blank" rel="noopener noreferrer">youtube</a>
          <a href={SKOOL} target="_blank" rel="noopener noreferrer">skool community</a>
          <a href="https://www.kentjandra.com/coaching" target="_blank" rel="noopener noreferrer">coaching</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} ken tjandra. all rights reserved.</p>
        <p className="footer-faith">built in faith. rooted in story.</p>
      </footer>
    </>
  );
}
