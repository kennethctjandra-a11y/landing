// ─── STORY TIMELINE DATA ──────────────────────────────────────────────
// Ken's canon story, as a left→right (past → present) reel.
// Edit freely: swap the placeholder photos in /public/story/ (1.jpg … 6.jpg)
// for your real images, and tweak the year / title / caption on each beat.
// Keep it lowercase and short — one photo, a year, a title, 1–2 lines.

export type StoryEvent = {
  /** short marker shown over the photo — a year or a phase ("2009", "now") */
  year: string;
  /** lowercase headline for the beat */
  title: string;
  /** 1–2 line caption */
  caption: string;
  /** image under /public/story — swap for a real photo, same filename */
  src: string;
  /** alt text for the photo */
  alt: string;
};

export const storyTimeline: StoryEvent[] = [
  {
    year: "jakarta",
    title: "where it started",
    caption:
      "born in jakarta. a migrant family with a long-term plan. the first five years were home.",
    src: "/story/1.jpg",
    alt: "Ken as a child in Jakarta",
  },
  {
    year: "2009",
    title: "one-way tickets",
    caption:
      "dad saved for a fresh start in sydney. a transformers backpack on the first day of school.",
    src: "/story/2.jpg",
    alt: "The family's early years in Sydney",
  },
  {
    year: "2023",
    title: "first business",
    caption:
      "mizushi — a car page turned clothing brand. 200k+ followers in a year, then he walked away.",
    src: "/story/3.jpg",
    alt: "Ken building his first business, Mizushi",
  },
  {
    year: "the turn",
    title: "finding christ",
    caption:
      "at his lowest, a miracle happened. he gave his life to jesus, and the prodigal came home.",
    src: "/story/4.jpg",
    alt: "Ken's faith turning point",
  },
  {
    year: "2024",
    title: "what's in the box",
    caption:
      "the reveal that broke free of society's labels. millions of views. then he got baptised.",
    src: "/story/5.jpg",
    alt: "Ken's breakthrough content",
  },
  {
    year: "now",
    title: "who i am now",
    caption:
      "700k+ followers, 500M+ views, still faith-forward — building to retire his parents.",
    src: "/story/6.jpg",
    alt: "Ken today",
  },
];
