const stats = [
  { value: "500+", label: "creators inside" },
  { value: "10k–100k", label: "follower growth range" },
  { value: "97%", label: "organic-only strategies" },
  { value: "$0", label: "paid ads needed" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#faf7f2] border-y border-[#e8ddd0] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs text-[#aaa] uppercase tracking-widest mb-8">
          Community results
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] tracking-tight">
                {s.value}
              </span>
              <span className="text-sm text-[#888]">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 opacity-50">
          {["Instagram", "TikTok", "YouTube", "LinkedIn", "Threads"].map((platform) => (
            <span key={platform} className="text-sm font-semibold text-[#666] tracking-wide">
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
