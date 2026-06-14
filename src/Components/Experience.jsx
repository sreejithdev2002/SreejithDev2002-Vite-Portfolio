import experienceData from "../assets/data/experience";

function Experience() {
  const getTechChips = (id) => {
    switch (id) {
      case 1:
        return ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Git"];
      case 2:
        return ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "HTML5/CSS3"];
      case 3:
        return ["MongoDB", "Express.js", "React.js", "Node.js", "Git", "REST APIs"];
      default:
        return ["JavaScript", "React.js"];
    }
  };

  return (
    <section className="text-white px-6 sm:px-12 md:px-24 py-28 relative" id="Experience">
      {/* Background radial glow */}
      <div className="absolute right-[5%] bottom-[10%] -z-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-blue-400 font-mono text-sm tracking-widest mb-3 uppercase">
          My Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-20 text-center">
          Work Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical line - hidden on very small screens, displayed left-aligned on md, centered on lg */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const techChips = getTechChips(exp.id);

              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row items-stretch relative w-full ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left / Right Spacing panel on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Dot/Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-[7px] md:-translate-x-1/2 top-8 z-20 flex items-center justify-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500 border border-white/30 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    </span>
                  </div>

                  {/* Card Panel */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 md:px-4">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative border border-white/5 group">
                      {/* Timeline Card Content */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs rounded-full self-start">
                          {exp.timeline}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{exp.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors text-left">
                        {exp.title}
                      </h3>

                      <p className="text-sm font-semibold text-slate-300 hover:text-white mt-1 mb-4 text-left">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline hover:text-blue-300 transition duration-300"
                        >
                          {exp.company}
                        </a>
                      </p>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6 text-left font-light">
                        {exp.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {techChips.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-blue-500/5 text-slate-300 hover:text-blue-300 text-xs font-mono rounded-lg transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
