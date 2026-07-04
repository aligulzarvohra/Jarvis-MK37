import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 7, suffix: "+", label: "Years Building" },
  { value: 92, suffix: "%", label: "Client Retention" },
];

const TESTIMONIALS = [
  {
    quote:
      "They rebuilt our site in three weeks and inbound doubled the month after launch. The attention to detail is unreal.",
    name: "Elena Marchetti",
    role: "Founder, Marchetti Interiors",
  },
  {
    quote:
      "Finally a studio that gets luxury. Every scroll, every transition feels considered. Our clients notice.",
    name: "David Okonkwo",
    role: "Principal, Okonkwo Architecture",
  },
  {
    quote:
      "Fast, calm, and genuinely obsessed with the craft. It's the first website I'm actually proud to send people to.",
    name: "Sofia Reyes",
    role: "Director, Reyes Estates",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
};

const SocialProof = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>(".stat-number");
      nums.forEach((el) => {
        const target = Number(el.dataset.value);
        const suffix = el.dataset.suffix ?? "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${suffix}`;
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        {/* Stats */}
        <motion.div
          {...fadeUp}
          ref={statsRef}
          className="mb-16 grid grid-cols-1 divide-y divide-stroke md:mb-24 md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 py-8 md:py-0"
            >
              <span
                className="stat-number font-display text-5xl italic tabular-nums text-text-primary md:text-7xl"
                data-value={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-stroke bg-surface p-6"
            >
              <blockquote className="text-sm italic leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="text-sm font-medium text-text-primary">
                  {t.name}
                </div>
                <div className="text-xs text-muted">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
