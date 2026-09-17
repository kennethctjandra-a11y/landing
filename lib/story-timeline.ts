// ─── STORY TIMELINE DATA ──────────────────────────────────────────────
// Ken's canon events, left → right (past → present).
// Each card flips on tap to reveal `summary`. Swap the placeholder photos in
// /public/story/ (1.jpg … 16.jpg) for real images (same filenames = no code
// changes). `title` may contain a line break (\n) — rendered verbatim.

export type StoryEvent = {
  /** short marker shown beneath the photo — a year or "now" */
  year: string;
  /** short lowercase label; \n forces a line break */
  title: string;
  /** 2–3 sentence summary shown on the flipped (burgundy) back of the card */
  summary: string;
  /** image under /public/story — swap for a real photo, same filename */
  src: string;
  /** alt text for the photo */
  alt: string;
};

export const storyTimeline: StoryEvent[] = [
  {
    year: "2004",
    title: "born in jakarta,\nindonesia",
    summary:
      "born in jakarta to a migrant family running on a long-term plan. the first five years were home before everything changed. “if anyone is my hero, it’s my mom. if anyone is my guardian, it’s my dad.”",
    src: "/story/1.jpg",
    alt: "Born in Jakarta, Indonesia",
  },
  {
    year: "2010",
    title: "moved to sydney,\naustralia",
    summary:
      "dad saved for one-way tickets to sydney — a bet on a better future for his kids. grandma flew over to help mum raise a baby in a brand-new country. a fresh start, from zero.",
    src: "/story/2.jpg",
    alt: "Moved to Sydney, Australia",
  },
  {
    year: "2011",
    title: "entered kindy,\ntransformers backpack",
    summary:
      "first day of kindergarten near the family apartment, a transformers backpack on his shoulders. a shy kid who already felt invisible — a little different from everyone else.",
    src: "/story/3.jpg",
    alt: "First day of kindergarten",
  },
  {
    year: "2015",
    title: "started my first\nyoutube channel",
    summary:
      "picked up a camera and started posting to youtube — the first taste of making something for an audience. no plan, no followers, just curiosity and the itch to create.",
    src: "/story/4.jpg",
    alt: "Started a first YouTube channel",
  },
  {
    year: "2016",
    title: "lust entered my life",
    summary:
      "the quiet beginning of a battle that would shape the next decade. what started young and small grew into something he’d carry in secret for years.",
    src: "/story/5.jpg",
    alt: "A private struggle begins",
  },
  {
    year: "2017",
    title: "graduated primary,\nhigh school began",
    summary:
      "finished primary and stepped into high school — year 7 felt like liberation. bigger spaces, more independence, a few good uneventful years before the storm.",
    src: "/story/6.jpg",
    alt: "Graduated primary, started high school",
  },
  {
    year: "2019",
    title: "secretly battling\np*rn addiction",
    summary:
      "on the outside, a normal teenager. underneath, a private war with p*rn and lust he told no one about — relapsing again and again, praying in shame, losing confidence in himself.",
    src: "/story/7.jpg",
    alt: "A private battle in high school",
  },
  {
    year: "2020",
    title: "started year 10,\nknucklehead phase",
    summary:
      "years of rejection curdled into bitterness he buried by running with a rowdier crowd. drinking, smoking, riding bikes — the highest highs and lowest lows, all at sixteen.",
    src: "/story/8.jpg",
    alt: "Year 10, the knucklehead phase",
  },
  {
    year: "2021",
    title: "senior year,\nfirst heartbreak",
    summary:
      "his first relationship — daily texts, nightly facetimes, a few short months. he asked her out near valentine’s, an act of desperation, already losing interest. a week later she ended it, and it broke him.",
    src: "/story/9.jpg",
    alt: "Senior year and first heartbreak",
  },
  {
    year: "2022",
    title: "gymbro villain era,\nmental health struggles",
    summary:
      "chasing the perfect physique for thirst traps and validation — starving himself, deep in body dysmorphia and hustle culture. the discipline looked like growth; underneath it was a coping mechanism, not a cure.",
    src: "/story/10.jpg",
    alt: "The gymbro era and mental health struggles",
  },
  {
    year: "2022",
    title: "built a JDM\nclothing brand",
    summary:
      "co-founded Mazushi — a jdm car page that became a clothing brand. it grew from a few hundred to 200,000+ followers in a year, with real-life car meets that drew crowds, hype, and chaos.",
    src: "/story/11.jpg",
    alt: "Built a JDM clothing brand",
  },
  {
    year: "2023",
    title: "started uni,\nleft my business",
    summary:
      "started uni and switched from engineering to business after a late-night talk about purpose. when the Mazushi partnership soured, he walked away — his first business exit.",
    src: "/story/12.jpg",
    alt: "Started university, left the business",
  },
  {
    year: "2024",
    title: "started creating content,\nbegan coaching",
    summary:
      "pivoted his whole brand to faith, story, and creation. around 400 videos flopped before anything landed, and he built creatopia — a community coaching young christian creators.",
    src: "/story/13.jpg",
    alt: "Started creating content and coaching",
  },
  {
    year: "2025",
    title: "gave my life to Jesus,\ngrew 700k audience",
    summary:
      "at his lowest, a miracle happened — he gave his life to jesus and came home like the prodigal son. the content finally broke through to millions of views and a 700k audience. “yet not i, but christ lives in me.”",
    src: "/story/14.jpg",
    alt: "Gave his life to Jesus; grew a 700k audience",
  },
  {
    year: "2026",
    title: "baptised & graduated,\nasia solo trip",
    summary:
      "got baptised and finished his degree, then took a solo month through singapore, china, and indonesia to reflect and pray on what’s next — even turning down a paid internship to chase the real calling.",
    src: "/story/15.jpg",
    alt: "Baptised, graduated, and an Asia solo trip",
  },
  {
    year: "now",
    title: "2 years porn-free,\nbuilding Origin Story™",
    summary:
      "two years p*rn-free and still counting. now building origin story™ — helping business owners turn their testimony into a brand. “my identity is not in entrepreneurship. it is in christ alone.”",
    src: "/story/16.jpg",
    alt: "Building Origin Story today",
  },
];
