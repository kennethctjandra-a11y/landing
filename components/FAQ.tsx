"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to already have an audience?",
    a: "Not at all. Some of our best success stories started at zero. The system is designed to build from scratch — you just need to be willing to show up consistently.",
  },
  {
    q: "What platforms does Creatopia cover?",
    a: "We have dedicated playbooks for Instagram, TikTok, YouTube Shorts, and LinkedIn. Most members pick 1–2 platforms to focus on first.",
  },
  {
    q: "How much time do I need to commit each week?",
    a: "Minimum 3–5 hours per week to post content and engage with the community. The most successful members are active daily, but even part-timers see meaningful growth.",
  },
  {
    q: "Is this only for Asian creators?",
    a: "The community is primarily built around and for Asian creators, but the strategies work for anyone building an authentic personal brand. The cultural perspective and specific playbooks are tailored for Asian voices.",
  },
  {
    q: "What exactly is Skool?",
    a: "Skool is a community platform (like a private, focused version of Facebook Groups). You get access via a simple login — no app download required, though there's a great mobile app available.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel any time with one click inside Skool. No lock-ins, no cancellation fees.",
  },
  {
    q: "How is this different from free YouTube content?",
    a: "Free content gives you tactics. Creatopia gives you a personalized system, direct feedback on your content, accountability from peers, and a community of people doing the same work as you — all without the noise.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#e8ddd0] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-[#faf7f2] transition-colors duration-150"
      >
        <span className="font-medium text-[#2d2d2d] text-sm">{q}</span>
        <span
          className={`text-[#7aad7a] text-lg flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="bg-[#faf7f2] px-5 pb-5">
          <p className="text-sm text-[#666] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#faf7f2] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7aad7a] font-medium mb-3">
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            Frequently asked.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
