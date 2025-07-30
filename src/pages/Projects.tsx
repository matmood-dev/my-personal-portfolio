import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Grid3X3, List } from "lucide-react";

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
  const [selectedTag, setSelectedTag] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))];

  const filtered = projects.filter(
    (p) => selectedTag === "All" || p.tags.includes(selectedTag)
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-base-100">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
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

        {/* Tag Filters + View Toggle */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`badge badge-lg cursor-pointer ${
                  selectedTag === tag ? "badge-primary" : "badge-outline"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              className={`btn btn-sm ${view === "grid" ? "btn-primary" : "btn-ghost"}`}
              onClick={() => setView("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              className={`btn btn-sm ${view === "list" ? "btn-primary" : "btn-ghost"}`}
              onClick={() => setView("list")}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className={view === "grid" ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-6"}>
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                className={`card h-full bg-base-200 border border-base-300 overflow-hidden group transition ${
                  view === "list" ? "flex-row items-center" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="card-body flex flex-col justify-between pb-0 w-full">
                  {/* Top Info */}
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

                {/* Image with Hover Overlay */}
                <div className="relative mt-6 w-full">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={`w-full ${
                      view === "grid" ? "h-48" : "h-60"
                    } object-cover transition duration-300`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View project ${project.title}`}
                      className="btn btn-sm btn-primary group-hover:btn-accent transition"
                    >
                      {t("projects.view_button")}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
