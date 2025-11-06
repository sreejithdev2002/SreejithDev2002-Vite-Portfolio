import Shoooz from "../Images/Shoooz.png";
import DentalClinic from "../Images/DentalClinic.png";
import ExpenseTracker from "../Images/ExpenseTracker.png";
import TaskZen from "../Images/TaskZen.png";
import ProductManagement from "../Images/Product Management.png";
import CliniCare from "../Images/CliniCare.png";
import Tseep from "../Images/Tseep.png";

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
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "Redux"],
    img: TaskZen,
    link: "https://task-zen-kappa.vercel.app/",
  },
  {
    id: 7,
    name: "TSEEP Quiz Website",
    category: "Frontend",
    type: "Quiz Website",
    desc: "An interactive quiz platform featuring 10 multiple-choice questions, real-time scoring, answer locking, and smooth navigation — perfect for testing knowledge with instant results.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
    img: Tseep,
    link: "https://tseep-quiz-website.vercel.app/",
  },
];

export default projects;
