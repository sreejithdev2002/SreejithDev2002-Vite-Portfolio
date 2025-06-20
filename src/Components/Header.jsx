import React, { useEffect, useState, useRef } from "react";
import "../Styles.css";

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const scrollPosition = window.scrollY + headerRef.current.clientHeight;
      setIsSolid(scroll > 10);

      const sections = [
        { value: "Home", offsetTop: 0 },
        {
          value: "Skills",
          offsetTop: document.getElementById("Skills")?.offsetTop,
        },
        {
          value: "Experience",
          offsetTop: document.getElementById("Experience")?.offsetTop,
        },
        {
          value: "Education",
          offsetTop: document.getElementById("Education")?.offsetTop,
        },
        {
          value: "Projects",
          offsetTop: document.getElementById("Projects")?.offsetTop,
        },
        {
          value: "Contact",
          offsetTop: document.getElementById("Contact")?.offsetTop,
        },
      ];

      // Find the current section based on scroll position
      let currentSection = "Home";
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          currentSection = sections[i].value;
          break;
        }
      }

      // Update active section only if it has changed
      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Depend on activeSection to avoid re-render issues

  const scrollToSection = (value) => {
    const element = document.getElementById(value);
    if (element) {
      const offset = 20; // Adjust this offset as needed
      window.scrollTo({
        top: element.offsetTop - headerRef.current.clientHeight + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className="pb-5 pt-5 flex fixed flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 text-white z-30 w-[100%] lg:flex-row"
      id={isSolid ? "Header" : "TransHeader"}
    >
      <h1 className="text-2xl sm:text-3xl text-center headerBrandName">
        SreejithDev2002
      </h1>

      <nav className="md:flex mt-2 px-4 lg:mt-0">
        <ol className="text-[13px] flex flex-row marker:text-blue-300 headerBrandLinks ">
          <li
            className={`mx-4 mr-2 lg:mx-7 text-[8px] lg:text-base ${
              activeSection === "Home"
                ? "text-blue-50 underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Home")}
          >
            Home
          </li>
          <li
            className={`mx-4 mr-2 lg:mx-7 text-[8px] lg:text-base ${
              activeSection === "Skills"
                ? "text-blue-50 underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Skills")}
          >
            Skills
          </li>
          <li
            className={`mx-4 mr-2 lg:mx-7 text-[8px] lg:text-base ${
              activeSection === "Experience"
                ? "text-blue-50 underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Experience")}
          >
            Experience
          </li>
          <li
            className={`mx-4 mr-2 lg:mx-7 text-[8px] lg:text-base ${
              activeSection === "Education"
                ? "text-blue-50 underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Education")}
          >
            Education
          </li>
          <li
            className={`mx-4 mr-2 lg:mx-7 text-[8px] lg:text-base ${
              activeSection === "Projects"
                ? "text-blue-50 underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Projects")}
          >
            Projects
          </li>
          <li
            className={`mx-4 mr-2 lg:mx-7 text-[8px] lg:text-base ${
              activeSection === "Contact"
                ? "text-blue-50 underline decoration-wavy decoration-auto decoration-blue-300 "
                : ""
            }`}
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
