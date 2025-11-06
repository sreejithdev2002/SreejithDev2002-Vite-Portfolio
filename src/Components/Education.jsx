import "../Styles.css";
import educationData from "../assets/data/education";

function Education() {
  return (
    <main className="text-white text-center px-5 py-20" id="Education">
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 ExperienceH1">
        Education
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:h-full w-1 bg-blue-500" />

        <div className="space-y-6 md:space-y-12">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            const rotateClass = isLeft ? "md:hover:rotate-2" : "md:hover:-rotate-2";

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Box */}
                <div className={`w-full md:w-5/12 bg-[#0a1331] hover:bg-blue-950 p-6 rounded-xl shadow-md transition duration-500 hover:scale-105 ${rotateClass}`}>
                  <h3 className="text-lg lg:text-2xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-sm lg:text-base text-blue-100 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-300 mt-2 font-mono">
                    {edu.period}
                  </p>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 border-3 border-white absolute left-1/2 transform -translate-x-1/2 z-20" />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Education;
