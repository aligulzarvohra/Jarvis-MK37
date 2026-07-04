import { motion } from "framer-motion";

interface Project {
  name: string;
  category: string;
  span: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    name: "Architecture Firm",
    category: "Website · Brand",
    span: "md:col-span-7",
    gradient:
      "linear-gradient(135deg, hsl(0 0% 14%) 0%, hsl(0 0% 7%) 55%, hsl(30 12% 12%) 100%)",
  },
  {
    name: "Interior Designer",
    category: "Website · Motion",
    span: "md:col-span-5",
    gradient:
      "linear-gradient(135deg, hsl(30 14% 15%) 0%, hsl(0 0% 8%) 60%, hsl(0 0% 5%) 100%)",
  },
  {
    name: "Luxury Real Estate",
    category: "Website · SEO",
    span: "md:col-span-5",
    gradient:
      "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(38 18% 13%) 50%, hsl(0 0% 6%) 100%)",
  },
  {
    name: "Creative Studio",
    category: "Website · Identity",
    span: "md:col-span-7",
    gradient:
      "linear-gradient(135deg, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 50%, hsl(30 10% 11%) 100%)",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={`group relative aspect-[4/3] overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span}`}
  >
    {/* Background image (gradient placeholder) */}
    <div
      className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ background: project.gradient }}
    />

    {/* Halftone overlay */}
    <div className="halftone absolute inset-0 opacity-20 mix-blend-multiply" />

    {/* Category tag */}
    <span className="absolute left-6 top-6 z-10 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-text-primary/70">
      {project.category}
    </span>

    {/* Hover overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
      <span className="gradient-border gradient-border-active inline-flex items-center gap-2 rounded-full bg-bg/60 px-5 py-2.5 text-sm text-text-primary">
        View —{" "}
        <span className="font-display italic">{project.name}</span>
      </span>
    </div>

    {/* Persistent title (bottom) */}
    <div className="absolute bottom-6 left-6 z-10 transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
        {project.name}
      </h3>
    </div>
  </div>
);

const SelectedWork = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          {...fadeUp}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Selected Work
              </span>
            </div>
            <h2 className="mb-4 font-display text-4xl leading-tight text-text-primary md:text-6xl">
              Featured <span className="italic">projects</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              A selection of premium websites built for visual creatives and
              ambitious brands.
            </p>
          </div>

          <a
            href="#work"
            className="gradient-border group hidden shrink-0 items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary md:inline-flex"
          >
            View all work
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
