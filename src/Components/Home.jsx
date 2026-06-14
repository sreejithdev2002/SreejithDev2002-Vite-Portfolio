import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import ProfilePhoto from "../assets/Images/profilePhoto.jpg";

function Home() {
  const roles = ["MERN Stack Developer", "Frontend Engineer", "Full Stack Developer", "React Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState("opacity-100 translate-y-0");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp("opacity-0 -translate-y-2 transition-all duration-500");
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeProp("opacity-100 translate-y-0 transition-all duration-500");
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const fileUrl = "/Sreejith_U_Resume.pdf";
    const fileName = "Sreejith_U_Resume.pdf";
    saveAs(fileUrl, fileName);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sreejithdev2002/",
      hoverBg: "hover:bg-[#0A66C2] hover:shadow-[#0A66C2]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/sreejithdev2002",
      hoverBg: "hover:bg-[#24292e] hover:shadow-[#24292e]/40 hover:border-[#404448]",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sreejithdev2002/",
      hoverBg: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:shadow-[#ee2a7b]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/SreejithDev2002",
      hoverBg: "hover:bg-[#15202b] hover:shadow-[#15202b]/40 hover:border-slate-800",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61551495626567",
      hoverBg: "hover:bg-[#1877F2] hover:shadow-[#1877F2]/30",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
  ];

  return (
    <main
      className="flex flex-col lg:flex-row items-center justify-between text-white px-6 sm:px-12 md:px-24 lg:px-32 xl:px-44 py-32 min-h-screen relative gap-12 lg:gap-8"
      id="Home"
    >
      {/* Background glow behind image */}
      <div className="absolute right-[5%] lg:right-[10%] top-[30%] -z-10 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Content Side */}
      <div className="flex-1 flex flex-col items-start text-left z-10 max-w-xl xl:max-w-2xl order-2 lg:order-1">
        <span className="text-blue-400 font-mono text-sm md:text-base tracking-widest mb-3 font-semibold uppercase">
          Hi, my name is
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2 leading-none font-sans">
          SREEJITH U
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300 min-h-[48px] flex items-center mb-6">
          <span className="mr-3">I am a</span>
          <span className={`${fadeProp} bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent font-mono`}>
            {roles[roleIndex]}
          </span>
        </h2>
        
        <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-light">
          Proactive and dedicated MERN Stack Developer with strong communication
          and organizational skills. Possessing adept problem-solving abilities
          and analytical thinking, with a knack for multitasking and facilitating
          collaborative discussion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full mb-10">
          <button
            onClick={handleDownload}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Download Resume</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
          
          <a
            href="#Contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-semibold rounded-xl transition-all duration-300 hover:text-white hover:-translate-y-0.5 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              target="_blank"
              rel="noreferrer"
              href={social.url}
              className={`relative p-3 bg-white/5 border border-white/10 text-slate-400 hover:text-white ${social.hoverBg} hover:scale-110 rounded-xl transition-all duration-300 group`}
              aria-label={social.name}
            >
              {social.svg}
              <span className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 px-2.5 py-1 bg-slate-900 border border-white/10 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 flex justify-center items-center order-1 lg:order-2 z-10 w-full md:w-auto">
        <div className="relative group">
          {/* Animated pulsing outer rings */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-45 group-hover:opacity-75 group-hover:inset-[-2px] transition duration-500 animate-pulse"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full blur-[20px] opacity-20 group-hover:opacity-35 transition duration-500"></div>

          {/* Profile image container */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[360px] xl:h-[360px] rounded-full overflow-hidden border-2 border-white/20 shadow-2xl transition duration-500 group-hover:scale-[1.02] bg-slate-950">
            <img
              src={ProfilePhoto}
              alt="Sreejith U Profile"
              loading="lazy"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
