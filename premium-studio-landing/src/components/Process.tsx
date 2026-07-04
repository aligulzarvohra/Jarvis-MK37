import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "/01",
    title: "Discovery",
    description:
      "We learn your brand, your clients, and what you need the site to do. 30 minutes and we know where to go.",
  },
  {
    number: "/02",
    title: "Design & Build",
    description:
      "We build your site with custom animations, mobile-perfect layout, and all content in place.",
  },
  {
    number: "/03",
    title: "Review & Refine",
    description:
      "Two rounds of revisions. You give feedback, we refine until it's exactly right.",
  },
  {
    number: "/04",
    title: "Launch",
    description:
      "Domain connected. Site live. You walk away with something you're genuinely excited to send people to.",
  },
];

const Process = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 80 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative min-h-[200vh] bg-bg py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        {/* Left sticky column */}
        <div className="md:sticky md:top-24 md:h-fit md:self-start">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              How we work
            </span>
          </div>
          <h2 className="mb-5 font-display text-4xl leading-tight text-text-primary md:text-6xl">
            Simple process,
            <br />
            <span className="italic">premium result.</span>
          </h2>
          <p className="max-w-sm text-sm text-muted md:text-base">
            No endless revisions. No confusion. Just a clear path from brief to
            live.
          </p>
        </div>

        {/* Right scrolling column */}
        <div className="flex flex-col gap-6 md:gap-10">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="process-card rounded-2xl border border-stroke bg-surface p-8"
            >
              <span className="accent-text-gradient font-display text-lg italic">
                {step.number}
              </span>
              <h3 className="mb-3 mt-2 font-display text-2xl italic text-text-primary md:text-3xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
