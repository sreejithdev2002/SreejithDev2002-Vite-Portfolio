import { useState } from "react";
import projects from "../assets/data/projects";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Full Stack", "Mobile Apps"];

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="text-white px-6 sm:px-12 md:px-24 py-28 relative"
      id="Projects"
    >
      {/* Background radial glow */}
      <div className="absolute right-[10%] top-[30%] -z-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-blue-400 font-mono text-sm tracking-widest mb-3 uppercase">
          My Creations
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 text-center">
          Featured Projects
        </h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-5 rounded-full border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full hover:border-blue-500/35 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/5">
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Hover Links Overlay */}
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 hover:bg-blue-600 text-white hover:scale-110 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center"
                    aria-label="View Live Project"
                  >
                    {/* External Link SVG */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 text-left">
                <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-widest mb-1.5">
                  {project.type}
                </span>
                
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                  {project.name}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6 flex-1 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-emerald-500/5 border border-emerald-500/20 py-1 px-2.5 rounded-lg text-emerald-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
