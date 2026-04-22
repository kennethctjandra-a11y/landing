const forItems = [
  {
    icon: "📸",
    title: "The Instagram creator",
    desc: "You're posting consistently but the algorithm keeps you stuck at 2k. You know your content is good — it just doesn't spread.",
  },
  {
    icon: "🎬",
    title: "The TikTok/YouTube maker",
    desc: "You've had a few viral moments but can't replicate them. You want a system, not luck.",
  },
  {
    icon: "🏗️",
    title: "The founder building in public",
    desc: "You're building something real and want an audience that believes in you before you even launch.",
  },
  {
    icon: "🌏",
    title: "The Asian voice ready to be heard",
    desc: "You're tired of advice built for a Western audience. You want to lead with your culture, not hide it.",
  },
];

const notForItems = [
  "Looking for overnight viral hacks",
  "Want to copy trending audio all day",
  "Not willing to show up as yourself",
  "Want to outsource your voice to AI",
];

export default function WhoThisIsFor() {
  return (
    <section className="bg-[#faf7f2] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7aad7a] font-medium mb-3">
            Is this for you?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            Creatopia was built for people like you.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {forItems.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#e8ddd0] rounded-2xl p-6 flex gap-4 hover:shadow-md hover:border-[#c8e6c8] transition-all duration-200"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-[#2d2d2d] mb-1">{item.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f5f5f5] border border-[#e0dbd4] rounded-2xl p-8 max-w-xl mx-auto">
          <p className="font-semibold text-[#2d2d2d] mb-4 text-center">
            This is <span className="text-red-400">not</span> for you if…
          </p>
          <ul className="flex flex-col gap-3">
            {notForItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#777]">
                <span className="text-red-300 font-bold text-base mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
