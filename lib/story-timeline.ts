// ─── STORY TIMELINE DATA ──────────────────────────────────────────────
// Ken's canon events, left → right (past → present).
// Swap the placeholder photos in /public/story/ (1.jpg … 14.jpg) for real
// images (same filenames = no code changes). `title` may contain a line break
// (\n) — it is rendered verbatim.

export type StoryEvent = {
  /** short marker shown beneath the photo — a year or "now" */
  year: string;
  /** short lowercase label; \n forces a line break */
  title: string;
  /** image under /public/story — swap for a real photo, same filename */
  src: string;
  /** alt text for the photo */
  alt: string;
};

export const storyTimeline: StoryEvent[] = [
  { year: "2004", title: "born in jakarta,\nindonesia", src: "/story/1.jpg", alt: "Born in Jakarta, Indonesia" },
  { year: "2010", title: "moved to sydney,\naustralia", src: "/story/2.jpg", alt: "Moved to Sydney, Australia" },
  { year: "2011", title: "entered kindy,\ntransformers backpack", src: "/story/3.jpg", alt: "First day of kindergarten" },
  { year: "2015", title: "started my first\nyoutube channel", src: "/story/4.jpg", alt: "Started a first YouTube channel" },
  { year: "2017", title: "graduated primary,\nhigh school began", src: "/story/5.jpg", alt: "Graduated primary, started high school" },
  { year: "2020", title: "started year 10,\nknucklehead phase", src: "/story/6.jpg", alt: "Year 10, the knucklehead phase" },
  { year: "2021", title: "senior year,\nfirst heartbreak", src: "/story/7.jpg", alt: "Senior year and first heartbreak" },
  { year: "2022", title: "gymbro villain era", src: "/story/8.jpg", alt: "The gymbro era" },
  { year: "2022", title: "built a JDM\nclothing brand", src: "/story/9.jpg", alt: "Built a JDM clothing brand" },
  { year: "2023", title: "started uni,\nleft my business", src: "/story/10.jpg", alt: "Started university, left the business" },
  { year: "2024", title: "started creating content,\nbegan coaching", src: "/story/11.jpg", alt: "Started creating content and coaching" },
  { year: "2025", title: "gave my life to Jesus,\ngrew 700k audience", src: "/story/12.jpg", alt: "Gave his life to Jesus; grew a 700k audience" },
  { year: "2026", title: "baptised & graduated,\nasia solo trip", src: "/story/13.jpg", alt: "Baptised, graduated, and an Asia solo trip" },
  { year: "now", title: "building Origin Story™", src: "/story/14.jpg", alt: "Building Origin Story today" },
];
