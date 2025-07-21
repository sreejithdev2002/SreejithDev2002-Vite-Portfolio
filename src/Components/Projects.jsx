import React, { useState } from "react";
import Shoooz from "../assets/Images/Shoooz.png";
import DentalClinic from "../assets/Images/DentalClinic.png";
import ExpenseTracker from "../assets/Images/ExpenseTracker.png";
import TaskZen from "../assets/Images/TaskZen.png";
import ProductManagement from "../assets/Images/Product Management.png";
import CliniCare from "../assets/Images/CliniCare.png";
import Tseep from "../assets/Images/Tseep.png";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Full Stack", "Mobile Apps"];

  const projects = [
    {
      id: 1,
      name: "Shoooz",
      category: "Full Stack",
      type: "E-Commerce Website",
      desc: "Shoooz is a premier online platform designed to deliver an exceptional shoe shopping experience...",
      tech: [
        "React.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      img: Shoooz,
      link: "https://shoooz.vercel.app",
    },
    {
      id: 2,
      name: "CliniCare Management System",
      category: "Frontend",
      type: "Management Website",
      desc: "A modern and visually appealing frontend Appointment Management website designed for a clinic...",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: CliniCare,
      link: "https://clini-care-management.vercel.app/",
    },
    {
      id: 3,
      name: "Smile Essentials Dental Clinic",
      category: "Frontend",
      type: "Landing Page",
      desc: "A modern and visually appealing frontend landing page designed for a dental clinic...",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: DentalClinic,
      link: "https://dental-clinic-sand.vercel.app",
    },
    {
      id: 4,
      name: "Product Management Website",
      category: "Full Stack",
      type: "E-Commerce Website",
      desc: "A simple and efficient Product Management Website for managing electronic items...",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      img: ProductManagement,
      link: "https://product-management-frontend-ruby.vercel.app/",
    },
    {
      id: 5,
      name: "Expense Tracker",
      category: "Frontend",
      type: "Finance Management Website",
      desc: "A user-friendly expense tracker for efficient financial management. Generate PDF reports...",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: ExpenseTracker,
      link: "https://expense-pdf-maker.vercel.app",
    },
    {
      id: 6,
      name: "TaskZen",
      category: "Frontend",
      type: "Task Management Website",
      desc: "A minimalist task manager built with React and Redux Toolkit...",
      tech: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Redux",
      ],
      img: TaskZen,
      link: "https://task-zen-kappa.vercel.app/",
    },
    {
      id: 7,
      name: "TSEEP Quiz Website",
      category: "Frontend",
      type: "Quiz Website",
      desc: "An interactive quiz platform featuring 10 multiple-choice questions, real-time scoring, answer locking, and smooth navigation — perfect for testing knowledge with instant results.",
      tech: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
      ],
      img: Tseep,
      link: "https://tseep-quiz-website.vercel.app/",
    },
  ];

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

      {/* Filter Buttons */}
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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
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
                className="rounded-lg h-[20vh] lg:h-[30vh] w-full object-cover mb-4"
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
