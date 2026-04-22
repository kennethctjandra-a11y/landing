import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Soft background orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#c8e6c8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#e8ddd0]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#faf7f2]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Floating leaf accents */}
      <div className="absolute top-32 right-16 text-[#a8c8a8] text-5xl opacity-40 animate-float select-none" style={{ animationDelay: "0s" }}>
        🌿
      </div>
      <div className="absolute bottom-32 left-12 text-[#a8c8a8] text-4xl opacity-30 animate-float select-none" style={{ animationDelay: "1.5s" }}>
        🌱
      </div>
      <div className="absolute top-1/2 right-8 text-[#a8c8a8] text-3xl opacity-25 animate-float select-none" style={{ animationDelay: "2.5s" }}>
        ✦
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-[#faf7f2] border border-[#c8e6c8] text-[#5a8a5a] text-sm font-medium px-4 py-2 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#7aad7a] inline-block" />
          For Asian Creators · Founders · Entrepreneurs
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl md:text-7xl font-bold text-[#2d2d2d] leading-[1.1] tracking-tight">
          Grow from{" "}
          <span className="shimmer-text">0 → 100k</span>
          <br />
          with stories only{" "}
          <em className="not-italic text-[#7aad7a]">you</em> can tell.
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-in-up-delay-2 max-w-2xl text-lg sm:text-xl text-[#666] leading-relaxed">
          Creatopia is the community where Asian creators, founders, and
          entrepreneurs learn to build magnetic personal brands through organic,
          authentic storytelling — no cringe trends, no hollow virality.
        </p>

        {/* CTA Group */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#pricing"
            className="group flex items-center gap-2 bg-[#7aad7a] hover:bg-[#5a9a5a] text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Join Creatopia for $97/mo
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#vsl"
            className="text-[#555] hover:text-[#2d2d2d] text-sm font-medium underline underline-offset-4 decoration-[#c8e6c8] hover:decoration-[#7aad7a] transition-colors duration-200"
          >
            Watch the video first ↓
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="animate-fade-in-up-delay-3 text-xs text-[#999] mt-1">
          Cancel anytime · Hosted on Skool · Real results, real community
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs text-[#888] tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#888] to-transparent" />
      </div>
    </section>
  );
}
