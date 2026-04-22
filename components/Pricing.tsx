const included = [
  "Full Story System curriculum",
  "Magnetic Hooks & Openings module",
  "Platform-native strategy guides",
  "Weekly live group calls",
  "Private community of 500+ creators",
  "Content Vault (100+ templates)",
  "Asian Creator Advantage playbooks",
  "Monthly hot-seat coaching",
  "Direct access to founder",
  "Cancel anytime",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7aad7a] font-medium mb-3">
            Simple Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            One membership. Everything you need.
          </h2>
        </div>

        <div className="bg-white border border-[#e8ddd0] rounded-3xl overflow-hidden shadow-xl">
          {/* Price header */}
          <div className="bg-gradient-to-br from-[#4a7a4a] to-[#3a6a3a] p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 text-8xl flex items-center justify-center select-none">
              🌿
            </div>
            <p className="relative z-10 text-[#a8d8a8] text-sm font-medium uppercase tracking-widest mb-2">
              Creatopia Community
            </p>
            <div className="relative z-10 flex items-end justify-center gap-1 mb-1">
              <span className="text-2xl font-medium text-white/70 mb-2">$</span>
              <span className="text-7xl font-bold leading-none">97</span>
              <span className="text-xl font-medium text-white/70 mb-3">/mo</span>
            </div>
            <p className="relative z-10 text-[#a8d8a8] text-sm">
              or $797/year · save 32%
            </p>
          </div>

          {/* Features list */}
          <div className="p-8">
            <ul className="flex flex-col gap-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#444]">
                  <span className="text-[#7aad7a] font-bold text-base mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://www.skool.com/creatopia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full bg-[#7aad7a] hover:bg-[#5a9a5a] text-white font-bold text-base py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Join Creatopia Now
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>

            <p className="text-center text-xs text-[#aaa] mt-4">
              Hosted on Skool · Cancel anytime · No contracts
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 bg-[#faf7f2] border border-[#e8ddd0] rounded-2xl p-6 flex gap-4">
          <span className="text-3xl flex-shrink-0">🌱</span>
          <div>
            <p className="font-semibold text-[#2d2d2d] mb-1">30-Day Growth Guarantee</p>
            <p className="text-sm text-[#666] leading-relaxed">
              Show up, do the work, and if you don&apos;t see traction in your first 30
              days, message me directly and I&apos;ll refund you. No questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
