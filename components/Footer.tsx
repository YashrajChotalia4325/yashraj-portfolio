export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 py-12 px-6"
    >

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl font-bold">
            YASHRAJ CHOTALIA
          </h2>

          <p className="text-gray-500 mt-2">
            Building intelligent systems for the future of work.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex gap-6 text-gray-400">

          <a
            href="https://www.linkedin.com/in/yashraj-chotalia-755028278?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-all"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/YashrajChotalia4325"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-all"
          >
            GitHub
          </a>

          <a
            href="mailto:chotaliayashraj12@gmail.com"
            className="hover:text-orange-400 transition-all"
          >
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}