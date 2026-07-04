import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface/80 px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        {/* Logo mark */}
        <a
          href="#top"
          className="accent-gradient group flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
          aria-label="Aureal Studio home"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary">
            AS
          </span>
        </a>

        <span className="mx-1 h-5 w-px bg-stroke" />

        {/* Nav links */}
        <div className="flex items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                active === link.label
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="mx-1 h-5 w-px bg-stroke" />

        {/* Let's talk */}
        <a
          href="#contact"
          className="gradient-border group ml-1 inline-flex items-center gap-1.5 rounded-full bg-bg px-4 py-2 text-xs text-text-primary transition-colors sm:text-sm"
        >
          Let&rsquo;s talk
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
