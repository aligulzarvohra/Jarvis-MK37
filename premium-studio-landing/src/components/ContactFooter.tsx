import { useEffect, useRef } from "react";
import gsap from "gsap";

const MARQUEE_TEXT = "PREMIUM WEBSITES • BUILT WITH AI • ";
const EMAIL = "hello@aurealstudio.com";

const ContactFooter = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 35,
        ease: "none",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="overflow-hidden bg-bg pb-10 pt-20">
      {/* Marquee */}
      <div ref={marqueeRef} className="mb-16 select-none md:mb-24">
        <div className="marquee-track flex whitespace-nowrap will-change-transform">
          <span className="text-outline font-display text-6xl italic md:text-8xl lg:text-9xl">
            {MARQUEE_TEXT.repeat(8)}
          </span>
          <span className="text-outline font-display text-6xl italic md:text-8xl lg:text-9xl">
            {MARQUEE_TEXT.repeat(8)}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        {/* CTA block */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
            Ready to start?
          </p>
          <h2 className="mb-10 max-w-3xl font-display text-5xl italic leading-[0.95] text-text-primary md:text-7xl">
            Let&rsquo;s build something{" "}
            <span className="accent-text-gradient">worth showing.</span>
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="gradient-border group inline-flex items-center gap-2.5 rounded-full border border-stroke bg-bg px-8 py-4 text-sm text-text-primary transition-transform duration-300 hover:scale-105"
          >
            {EMAIL}
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Footer bar */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-stroke pt-8 md:flex-row md:justify-between md:gap-0">
          <div className="text-xs text-muted">
            <span className="font-display italic text-text-primary">
              Aureal Studio
            </span>{" "}
            © 2026
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted transition-colors hover:text-text-primary"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
