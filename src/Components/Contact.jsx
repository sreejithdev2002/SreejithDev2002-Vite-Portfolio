import { useState } from "react";

function Contact() {
  const recipientEmail = "sreejithdev2002@gmail.com";
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({});

  const copyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocused((prev) => ({ ...prev, [field]: false }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "@sreejithdev2002",
      url: "https://www.linkedin.com/in/sreejithdev2002",
      hoverBorder: "hover:border-[#0A66C2]/40 hover:shadow-[#0A66C2]/10",
      hoverText: "hover:text-[#0A66C2]",
      bgHover: "group-hover:bg-[#0A66C2]/10",
      svg: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      handle: "@sreejithdev2002",
      url: "https://github.com/sreejithdev2002",
      hoverBorder: "hover:border-white/30 hover:shadow-white/5",
      hoverText: "hover:text-white",
      bgHover: "group-hover:bg-white/10",
      svg: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      handle: "@sreejithdev2002",
      url: "https://www.instagram.com/sreejithdev2002",
      hoverBorder: "hover:border-[#ee2a7b]/40 hover:shadow-[#ee2a7b]/10",
      hoverText: "hover:text-[#ee2a7b]",
      bgHover: "group-hover:bg-[#ee2a7b]/10",
      svg: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "Sreejith U",
      url: "https://www.facebook.com/profile.php?id=61551495626567",
      hoverBorder: "hover:border-[#1877F2]/40 hover:shadow-[#1877F2]/10",
      hoverText: "hover:text-[#1877F2]",
      bgHover: "group-hover:bg-[#1877F2]/10",
      svg: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
  ];

  const inputClass = (field) =>
    `w-full bg-white/5 border ${
      focused[field] ? "border-blue-500/60 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]" : "border-white/10"
    } text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm font-sans outline-none transition-all duration-300 focus:ring-0`;

  return (
    <section
      className="text-white px-6 sm:px-12 md:px-24 py-28 relative"
      id="Contact"
    >
      {/* Background radial glow */}
      <div className="absolute left-[10%] top-[10%] -z-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute right-[5%] bottom-[10%] -z-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-blue-400 font-mono text-sm tracking-widest mb-3 uppercase">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-slate-400 text-center text-base mb-16 max-w-lg">
          Have a project in mind or just want to say hello? My inbox is always open!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Column — Info & Social */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 flex items-center justify-between gap-4 group hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-400 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-slate-200">{recipientEmail}</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 hover:text-blue-300 text-xs font-mono rounded-lg transition-all duration-300 shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.637c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 flex items-center gap-4 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-purple-400 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono mb-0.5">Location</p>
                <p className="text-sm font-semibold text-slate-200">Malappuram, Kerala, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`glass-panel rounded-2xl p-4 border border-white/5 flex items-center gap-3 group transition-all duration-300 hover:shadow-xl ${s.hoverBorder} cursor-pointer`}
                >
                  <div className={`w-10 h-10 rounded-xl ${s.bgHover} border border-white/5 flex items-center justify-center shrink-0 transition-colors duration-300 text-slate-400 ${s.hoverText}`}>
                    {s.svg}
                  </div>
                  <div>
                    <p className={`text-sm font-bold text-slate-300 ${s.hoverText} transition-colors duration-300`}>{s.name}</p>
                    <p className="text-xs text-slate-500 font-mono">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 border border-white/5 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

            <div className="relative">
              <label className={`block text-xs font-mono mb-1.5 transition-colors ${focused.name ? "text-blue-400" : "text-slate-400"}`}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                placeholder="Sreejith U"
                required
                className={inputClass("name")}
              />
            </div>

            <div className="relative">
              <label className={`block text-xs font-mono mb-1.5 transition-colors ${focused.email ? "text-blue-400" : "text-slate-400"}`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                placeholder="hello@example.com"
                required
                className={inputClass("email")}
              />
            </div>

            <div className="relative">
              <label className={`block text-xs font-mono mb-1.5 transition-colors ${focused.message ? "text-blue-400" : "text-slate-400"}`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
                placeholder="Tell me about your project or just say hi!"
                required
                rows={5}
                className={`${inputClass("message")} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-2 w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Send Message</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
