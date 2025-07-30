import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const tagColors: Record<string, string> = {
  React: "badge-primary",
  TypeScript: "badge-secondary",
  Tailwind: "badge-accent",
  Fullstack: "badge-info",
  Database: "badge-success",
  Authentication: "badge-error",
  Payment: "badge-warning",
  Responsive: "badge-neutral",
};

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal site built with Vite, TS, and DaisyUI.",
    link: "#",
    icon: "💻",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/images/preview.png",
  },
  {
    title: "HRMS System",
    description: "Human Resource Management System with full features.",
    link: "#",
    icon: "🏢",
    tags: ["Fullstack", "Database", "Authentication"],
    image: "/images/preview.png",
  },
  {
    title: "E-Commerce Store",
    description: "A modern online store with product filtering and checkout.",
    link: "#",
    icon: "🛒",
    tags: ["React", "Payment", "Responsive"],
    image: "/images/preview.png",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-base-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold mb-4 leading-[1.5] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("projects.projects_title")}
          </motion.h2>
          <motion.p
            className="text-xl text-base-content/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("projects.projects_subtitle")}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project ${project.title}`}
              className="h-full"
            >
              <motion.div
                className="card h-full bg-base-200 border border-base-300 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="card-body flex flex-col justify-between">
                  {/* Top */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl bg-base-300 dark:bg-base-200 rounded-lg p-2">
                        {project.icon}
                      </span>
                      <div>
                        <h3 className="card-title text-2xl text-primary group-hover:text-accent transition-transform group-hover:scale-[1.03]">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-base-content/80">{project.description}</p>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`badge badge-sm ${tagColors[tag] || "badge-outline"} opacity-90`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-6 flex items-end justify-between">
                    <span className="btn btn-primary btn-sm group-hover:btn-accent transition-all">
                      {t("projects.view_button")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>

                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-50 h-50 object-cover rounded-md border border-base-300"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
