import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    name: "Web Design",
    description:
      "Premium websites built with obsessive attention to detail. Fast, responsive, and built to convert.",
  },
  {
    number: "02",
    name: "Motion & Animation",
    description:
      "Scroll animations, page transitions, and micro-interactions that make your site feel alive.",
  },
  {
    number: "03",
    name: "Brand Identity",
    description:
      "Logo, color system, and typography that makes you look like the obvious premium choice.",
  },
  {
    number: "04",
    name: "Monthly Retainer",
    description:
      "Ongoing updates, new pages, and priority support. Your site stays fresh without lifting a finger.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
};

const WhatWeBuild = () => {
  return (
    <section id="services" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-12 md:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Services
            </span>
          </div>
          <h2 className="font-display text-4xl leading-tight text-text-primary md:text-6xl">
            What we <span className="italic">build</span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* accent left border on hover */}
              <span className="accent-gradient absolute left-0 top-0 h-full w-[3px] scale-y-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-y-100" />

              <span className="text-xs tracking-widest text-muted">
                {service.number}
              </span>
              <h3 className="mb-3 mt-2 font-display text-xl italic text-text-primary">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
