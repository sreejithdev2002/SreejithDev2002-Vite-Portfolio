import React, { useEffect, useState, useRef } from "react";

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const navItems = ["Home", "Skills", "Experience", "Education", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsSolid(scroll > 20);

      const headerHeight = headerRef.current ? headerRef.current.clientHeight : 80;
      const scrollPosition = window.scrollY + headerHeight + 50;

      // Find the current section based on scroll position
      let currentSection = "Home";
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i]);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = navItems[i];
          break;
        }
      }

      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (value) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(value);
    if (element) {
      const headerHeight = headerRef.current ? headerRef.current.clientHeight : 80;
      window.scrollTo({
        top: element.offsetTop - headerHeight + 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 px-6 py-4 md:px-12 lg:px-24 flex items-center justify-between ${
        isSolid
          ? "backdrop-blur-md bg-slate-950/75 border-b border-white/10 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <h1 
        className="text-xl sm:text-2xl font-black tracking-wider cursor-pointer font-sans bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        onClick={() => scrollToSection("Home")}
      >
        SreejithDev
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-1 lg:space-x-4">
          {navItems.map((item) => (
            <li
              key={item}
              className={`relative px-4 py-2 text-sm font-medium font-mono cursor-pointer transition-all duration-300 rounded-full hover:text-white ${
                activeSection === item ? "text-blue-400" : "text-slate-400"
              }`}
              onClick={() => scrollToSection(item)}
            >
              <span className="relative z-10">{item}</span>
              {activeSection === item && (
                <span className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-full layout-shared"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
            mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-white rounded-full transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
            mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-[72px] right-0 left-0 glass-panel border-b border-white/10 p-6 flex flex-col space-y-4 transition-all duration-300 ease-in-out shadow-2xl z-40 origin-top ${
          mobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible h-0"
        }`}
      >
        {navItems.map((item) => (
          <div
            key={item}
            className={`py-2 px-4 text-base font-mono cursor-pointer rounded-lg transition-colors ${
              activeSection === item ? "bg-blue-500/20 text-blue-300 font-semibold" : "text-slate-300 hover:bg-white/5"
            }`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
