const testimonials = [
  {
    name: "Mei L.",
    handle: "@meilifts",
    platform: "Instagram",
    growth: "1.2k → 34k in 4 months",
    quote:
      "I spent two years trying to hide that I was Asian in my content. Creatopia showed me that my background was my biggest edge. I tripled my growth in 90 days just by owning my story.",
    avatar: "ML",
    color: "bg-[#c8e6c8]",
  },
  {
    name: "Jason K.",
    handle: "@jasonbuilds",
    platform: "YouTube + TikTok",
    growth: "800 → 22k in 3 months",
    quote:
      "I'm a dev founder who thought I had nothing interesting to share. The Story System completely changed how I see my own journey. Now I can write content ideas in 10 minutes that used to take me days.",
    avatar: "JK",
    color: "bg-[#e8ddd0]",
  },
  {
    name: "Sophie T.",
    handle: "@sophietang_",
    platform: "TikTok",
    growth: "3k → 67k in 5 months",
    quote:
      "The community alone is worth 10x the price. Everyone actually supports each other. It's the first space I've been in where I don't feel like I have to perform a version of myself that isn't me.",
    avatar: "ST",
    color: "bg-[#f0ece8]",
  },
  {
    name: "Ryan C.",
    handle: "@ryancreates_",
    platform: "Instagram",
    growth: "500 → 18k in 3 months",
    quote:
      "I joined skeptical. Left on month two with brand deals and a waitlist for my consulting. The magnetic hooks module alone changed everything about how I open my videos.",
    avatar: "RC",
    color: "bg-[#e8f4e8]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#faf7f2] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7aad7a] font-medium mb-3">
            Real Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            Creators who stopped waiting and started growing.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#e8ddd0] rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md hover:border-[#c8e6c8] transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`${t.color} w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-[#555] flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#2d2d2d]">{t.name}</p>
                  <p className="text-xs text-[#999]">
                    {t.handle} · {t.platform}
                  </p>
                </div>
                <div className="ml-auto bg-[#e8f4e8] text-[#5a8a5a] text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {t.growth}
                </div>
              </div>
              <blockquote className="text-sm text-[#555] leading-relaxed border-l-2 border-[#c8e6c8] pl-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#aaa]">
          * Results vary. These are real members sharing their experiences. Your results depend on your effort and consistency.
        </p>
      </div>
    </section>
  );
}
