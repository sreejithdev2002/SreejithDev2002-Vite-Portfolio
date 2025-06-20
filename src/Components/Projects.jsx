import React, { useState } from "react";
import Shoooz from "../assets/Images/Shoooz.png";
import DentalClinic from "../assets/Images/DentalClinic.png";
import ExpenseTracker from "../assets/Images/ExpenseTracker.png";
import TaskZen from "../assets/Images/TaskZen.png";
import ProductManagement from "../assets/Images/Product Management.png";

function Projects() {
  const ProjectsData = [
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
      name: "Smile Essentials Dental Clinic",
      category: "Frontend",
      type: "Landing Page",
      desc: "A modern and visually appealing frontend landing page designed for a dental clinic...",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: DentalClinic,
      link: "https://dental-clinic-sand.vercel.app",
    },
    {
      id: 3,
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
      id: 4,
      name: "Expense Tracker",
      category: "Frontend",
      type: "Finance Management Website",
      desc: "A user-friendly expense tracker for efficient financial management. Generate PDF reports...",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
      img: ExpenseTracker,
      link: "https://expense-pdf-maker.vercel.app",
    },
    {
      id: 5,
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
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Full Stack", "Mobile Apps"];

  const filteredProjects =
    selectedCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((p) => p.category === selectedCategory);

  return (
    <main
      className="text-white flex justify-center flex-col text-center px-[10vw] py-20"
      id="Projects"
    >
      <h2 className="text-4xl mb-10 font-mono underline decoration-wavy decoration-blue-300">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded-full border ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-500"
                : "bg-transparent text-blue-300 border-blue-300"
            } hover:bg-blue-700 transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <article>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col justify-between hover:bg-blue-950 mx-auto max-w-5xl rounded-xl py-4 px-6 bg-[#0a1331] transition duration-500 hover:scale-105"
            >
              <div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-[20vh] w-full rounded-lg lg:h-[30vh] object-fit"
                  />
                </a>
              </div>
              <div className="text-left">
                <h3 className="text-lg lg:text-2xl font-medium">
                  {project.name}
                </h3>
                <h4 className="text-sm lg:text-base text-blue-50 mt-1 mb-3">
                  {project.type}
                </h4>
                <p className="text-[12px] lg:text-sm text-blue-200">
                  {project.desc}
                </p>
                <ul className="flex flex-wrap mt-2">
                  {project.tech.map((tech, index) => (
                    <li
                      key={index}
                      className="mr-2 mt-2 bg-gray-800 bg-opacity-20 border border-green-400 py-1 px-2 rounded-xl text-green-300 text-xs hover:bg-green-400 hover:bg-opacity-50 hover:text-green-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Projects;
