export default function Footer() {
  return (
    <footer className="bg-[#faf7f2] border-t border-[#e8ddd0] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-[#2d2d2d] font-semibold tracking-tight">
            creatopia<span className="text-[#7aad7a]">.</span>
          </span>
          <span className="text-xs text-[#aaa]">
            A community for Asian creators, founders & entrepreneurs.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#aaa]">
          <a href="#" className="hover:text-[#666] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#666] transition-colors">
            Terms
          </a>
          <a
            href="https://www.skool.com/creatopia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#666] transition-colors"
          >
            Skool Community
          </a>
        </div>

        <p className="text-xs text-[#ccc]">
          © {new Date().getFullYear()} Creatopia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
