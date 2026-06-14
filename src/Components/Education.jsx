import educationData from "../assets/data/education";

function Education() {
  return (
    <section className="text-white px-6 sm:px-12 md:px-24 py-28 relative" id="Education">
      {/* Background radial glow */}
      <div className="absolute left-[5%] bottom-[10%] -z-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-blue-400 font-mono text-sm tracking-widest mb-3 uppercase">
          My Studies
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-20 text-center">
          Education History
        </h2>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical line - hidden on very small screens, displayed left-aligned on md, centered on lg */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-[3px] bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]" />

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative w-full ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left / Right Spacing panel on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Dot/Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-[7px] md:-translate-x-1/2 top-8 z-20 flex items-center justify-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-purple-500 to-blue-500 border border-white/30 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    </span>
                  </div>

                  {/* Card Panel */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 md:px-4">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative border border-white/5 group">
                      {/* Timeline Card Content */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs rounded-full self-start">
                          {edu.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors text-left">
                        {edu.degree}
                      </h3>

                      <p className="text-sm font-semibold text-slate-300 hover:text-white mt-2 text-left">
                        {edu.institution}
                      </p>
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

export default Education;
