import html from "../assets/Icons/html.png";
import css from "../assets/Icons/css.png";
import javascript from "../assets/Icons/javascript.png";
import reactjs from "../assets/Icons/reactjs.png";
import nextjs from "../assets/Icons/nextjs.png";
import tailwind from "../assets/Icons/tailwindcss.png";
import nodejs from "../assets/Icons/nodejs.png";
import express from "../assets/Icons/expressjs.png";
import mongodb from "../assets/Icons/mongodb.png";
import mysql from "../assets/Icons/mysql.png";
import docker from "../assets/Icons/docker.png";
import git from "../assets/Icons/git.png";
import github from "../assets/Icons/github.png";
import postman from "../assets/Icons/postman.png";
import vscode from "../assets/Icons/vscode.png";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
        { name: "JavaScript", icon: javascript },
        { name: "React.js", icon: reactjs },
        { name: "Next.js", icon: nextjs },
        { name: "Tailwind CSS", icon: tailwind },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: nodejs },
        { name: "Express.js", icon: express },
        { name: "MongoDB", icon: mongodb },
        { name: "MySQL", icon: mysql },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Docker", icon: docker },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Postman", icon: postman },
        { name: "VS Code", icon: vscode },
      ],
    },
  ];

  return (
    <section
      className="text-white flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 py-28 relative"
      id="Skills"
    >
      {/* Background radial glow */}
      <div className="absolute left-[5%] top-[20%] -z-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <span className="text-blue-400 font-mono text-sm tracking-widest mb-3 uppercase">
          My Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-16 text-center">
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel rounded-2xl p-6 flex flex-col items-start border border-white/5"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-300 border-b border-white/10 pb-2 w-full text-left">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 p-2.5 rounded-xl transition-all duration-300 hover:scale-[1.03] group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white p-1.5 flex justify-center items-center shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors text-left break-words">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
