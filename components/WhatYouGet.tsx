const pillars = [
  {
    number: "01",
    title: "The Story System",
    desc: "A repeatable framework to mine your own life for content ideas that no one else can copy. Authenticity as a moat.",
    color: "bg-[#e8f4e8]",
    accent: "text-[#5a9a5a]",
  },
  {
    number: "02",
    title: "Magnetic Hooks & Openings",
    desc: "The first 3 seconds decide everything. Learn to craft openers that stop the scroll without being clickbait.",
    color: "bg-[#faf7f2]",
    accent: "text-[#c4934a]",
  },
  {
    number: "03",
    title: "Platform-Native Strategy",
    desc: "Instagram, TikTok, YouTube — each has its own language. Learn to speak fluently on every platform you choose.",
    color: "bg-[#f0ece8]",
    accent: "text-[#a07050]",
  },
  {
    number: "04",
    title: "Community & Accountability",
    desc: "Weekly live calls, peer feedback sessions, and a community of 500+ creators who get it and push each other forward.",
    color: "bg-[#e8f0f8]",
    accent: "text-[#5a7aaa]",
  },
  {
    number: "05",
    title: "Asian Creator Advantage",
    desc: "Specific playbooks for leaning into your cultural perspective — the exact thing Western creators can't replicate.",
    color: "bg-[#f8ece8]",
    accent: "text-[#b06060]",
  },
  {
    number: "06",
    title: "Content Vault",
    desc: "100+ templates, swipe files, hooks libraries, and real breakdowns of what worked and why.",
    color: "bg-[#eef8ee]",
    accent: "text-[#4a8a6a]",
  },
];

export default function WhatYouGet() {
  return (
    <section id="program" className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7aad7a] font-medium mb-3">
            Inside Creatopia
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight max-w-2xl mx-auto">
            Six pillars to go from unknown to unmissable.
          </h2>
          <p className="mt-4 text-[#666] text-base max-w-xl mx-auto leading-relaxed">
            Everything is designed around one outcome: a personal brand
            audience that grows because of who you are, not despite it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.number}
              className={`${p.color} border border-[#e8ddd0]/60 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-all duration-200`}
            >
              <span className={`text-xs font-bold tracking-widest ${p.accent}`}>
                {p.number}
              </span>
              <h3 className="font-bold text-[#2d2d2d] text-lg leading-snug">{p.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bonus callout */}
        <div className="mt-10 bg-[#2d2d2d] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-shrink-0 text-4xl">🎁</div>
          <div>
            <p className="text-[#a8c8a8] text-xs uppercase tracking-widest font-medium mb-1">
              Founding Member Bonus
            </p>
            <h3 className="font-bold text-lg mb-1">
              1-on-1 Brand Audit Call (worth $297)
            </h3>
            <p className="text-[#aaa] text-sm leading-relaxed">
              The first 50 members get a private 30-minute brand audit where we
              map out your exact content strategy for the next 90 days.
            </p>
          </div>
          <div className="flex-shrink-0 bg-[#7aad7a] text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
            Only 12 left
          </div>
        </div>
      </div>
    </section>
  );
}
