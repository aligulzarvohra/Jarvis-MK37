import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ROLE_TYPES = ["luxury", "ambitious", "visual", "premium"];

const Hero = () => {
  const rootRef = useRef<HTMLElement>(null);
  const [typeIndex, setTypeIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTypeIndex((prev) => (prev + 1) % ROLE_TYPES.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(12px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.12,
        },
        0.3,
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full object-cover"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, hsl(0 0% 10%) 0%, hsl(0 0% 5%) 45%, hsl(0 0% 3%) 100%)",
          }}
        />
        {/* ambient accent glows */}
        <div
          className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #c4a265 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full opacity-[0.08] blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, #8b6f3e 0%, transparent 70%)",
          }}
        />
        {/* subtle grain / grid texture */}
        <div className="halftone absolute inset-0 opacity-[0.04]" />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          Premium Web Design
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          We build websites
          <br />
          that close deals.
        </h1>

        <p className="blur-in mb-6 text-base text-muted md:text-lg">
          A studio built for{" "}
          <span
            key={typeIndex}
            className="animate-word-fade-in inline-block font-display italic text-text-primary"
          >
            {ROLE_TYPES[typeIndex]}
          </span>{" "}
          brands.
        </p>

        <p className="blur-in mx-auto mb-12 max-w-md text-sm text-muted md:text-base">
          Premium websites built with AI and obsessive attention to detail. For
          brands that take their image seriously.
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="gradient-border group rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-all duration-300 hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="gradient-border rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <div className="accent-gradient animate-scroll-down absolute left-0 top-0 h-1/2 w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
