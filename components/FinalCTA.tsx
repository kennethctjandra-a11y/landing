export default function FinalCTA() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative top */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 text-3xl select-none">
            <span className="animate-float" style={{ animationDelay: "0s" }}>🌿</span>
            <span className="animate-float" style={{ animationDelay: "0.8s" }}>✦</span>
            <span className="animate-float" style={{ animationDelay: "1.6s" }}>🌱</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] leading-[1.1] tracking-tight mb-6">
          Your audience is waiting.
          <br />
          <span className="text-[#7aad7a]">They just haven't found you yet.</span>
        </h2>

        <p className="text-lg text-[#666] leading-relaxed mb-10 max-w-xl mx-auto">
          Stop scrolling through other people&apos;s highlight reels wondering when
          it&apos;s your turn. Join Creatopia and start building the audience that
          changes your life.
        </p>

        <a
          href="https://www.skool.com/creatopia"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-[#7aad7a] hover:bg-[#5a9a5a] text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200"
        >
          Join Creatopia for $97/mo
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>

        <p className="text-xs text-[#aaa] mt-4">
          30-day guarantee · Cancel anytime · Hosted on Skool
        </p>
      </div>
    </section>
  );
}
