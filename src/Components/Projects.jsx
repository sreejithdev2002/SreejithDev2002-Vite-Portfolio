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
    <main
      className="text-white flex flex-col items-center px-[10vw] py-20"
      id="Projects"
    >
      <h2 className="text-4xl mb-10 font-mono underline decoration-wavy decoration-blue-300">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`py-2 px-4 rounded-full border font-semibold transition duration-300 cursor-pointer ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-blue-400 border-blue-400 hover:bg-blue-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 w-full">
        {filtered.map((project) => (
          <li
            key={project.id}
            className="flex flex-col bg-[#0a1331] rounded-xl p-5 hover:scale-105 transition duration-300 shadow-md hover:shadow-gray-800"
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.img}
                alt={project.name}
                loading="lazy"
                className="rounded-lg h-[20vh] sm:h-[30vh] md:h-[20vh] lg:[30vh] w-full object-cover mb-4"
              />
            </a>
            <div className="text-left">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-blue-100 mb-2">{project.type}</p>
              <p className="text-[13px] text-blue-200 mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 bg-opacity-20 border border-green-400 py-1 px-2 rounded-xl text-green-300 text-xs hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Projects;
