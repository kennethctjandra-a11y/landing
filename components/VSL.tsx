export default function VSL() {
  return (
    <section id="vsl" className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#7aad7a] font-medium mb-3">
            Watch First
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] leading-tight">
            Why most creators stay stuck — and how{" "}
            <span className="text-[#7aad7a]">Creatopia</span> is different.
          </h2>
        </div>

        {/* VSL Embed Placeholder */}
        <div className="w-full aspect-video bg-[#2d2d2d] rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer">
          {/* Thumbnail gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a5a3a] via-[#2d2d2d] to-[#5a3a2a]" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')]" />
          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white/70 text-sm font-medium">Watch the full story</p>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            12:34
          </div>
        </div>

        <p className="text-center text-[#888] text-sm max-w-lg leading-relaxed">
          Replace this embed with your Loom, Vimeo, or YouTube VSL link. The
          video above walks through exactly who Creatopia is for and the system
          inside.
        </p>
      </div>
    </section>
  );
}
