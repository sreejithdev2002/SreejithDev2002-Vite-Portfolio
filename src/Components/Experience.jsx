import React from "react";
import "../Styles.css";

function Experience() {
  const experienceData = [
    {
      id: 1,
      title: "Web Developer",
      timeline: "Nov 2024 - Present",
      company: "Daxoff Hub Pvt Ltd, North Paravur",
      description:
        "I am a Web Developer at Daxoff Hub Pvt Ltd, North Paravur, where I developed the frontend of the QK Wash Admin Website and contributed to backend integration for the QK Wash User Website.",
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      timeline: "Oct 2023 - Oct 2024",
      company: "Softroniics, Perinthalmanna",
      description:
        "Worked as a MERN Stack Developer Intern at Softroniics, building full-stack web applications using MongoDB, Express.js, React, and Node.js. Collaborated on development, testing, and deployment, enhancing skills in problem-solving and code optimization.",
    },
  ];

  return (
    <main className="text-white text-center px-5 py-20" id="Experience">
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 ExperienceH1">
        Experience
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:h-full w-1 bg-blue-500" />

        <div className="space-y-12">
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 bg-[#0a1331] hover:bg-blue-950 p-6 rounded-xl shadow-md transition duration-500 z-10">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
                    <h3 className="text-lg lg:text-2xl font-semibold text-left">{exp.title}</h3>
                    <p className="text-xs lg:text-sm font-mono text-gray-300 mt-2 md:mt-0">{exp.timeline}</p>
                  </div>
                  <p className="text-sm lg:text-base text-blue-100 text-left mt-1">{exp.company}</p>
                  <p className="text-xs lg:text-sm text-blue-200 text-left mt-3">{exp.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 border-3 border-white absolute left-1/2 transform -translate-x-1/2 z-20" />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Experience;
