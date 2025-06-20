import React from "react";
import html from "../assets/Icons/html.png";
import css from "../assets/Icons/css.png";
import javascript from "../assets/Icons/javascript.png";
import reactjs from "../assets/Icons/reactjs.png";
import tailwind from "../assets/Icons/tailwindcss.png";
import nodejs from "../assets/Icons/nodejs.png";
import express from "../assets/Icons/expressjs.png";
import mongodb from "../assets/Icons/mongodb.png";
import mysql from "../assets/Icons/mysql.png";
import git from "../assets/Icons/git.png";
import github from "../assets/Icons/github.png";
import postman from "../assets/Icons/postman.png";
import vscode from "../assets/Icons/vscode.png";
import "../Styles.css";

function Skills() {
  return (
    <main
      className="text-white flex justify-center flex-col text-center px-[20vw] py-20"
      id="Skills"
    >
      <h2 className="text-4xl mb-20 font-mono underline decoration-wavy decoration-blue-300 decoration-auto SkillsH1">
        Skills
      </h2>
      <h1 className="lg:text-start text-2xl font-semibold mb-2">Tech Skills</h1>
      <div className="flex flex-col bg-[#0a1331] hover:bg-blue-950 hover:scale-105 transition duration-500 mt-2 rounded-md p-2 w-[100%]">
        <h1 className="text-lg lg:text-start">Frontend</h1>
        <div className="flex my-2 justify-center lg:justify-start">
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={html} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={css} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={javascript} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={reactjs} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={tailwind} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#0a1331] hover:bg-blue-950 hover:scale-105 transition duration-500 mt-2 rounded-md p-2 w-[100%]">
        <h1 className="text-lg lg:text-start">Backend</h1>
        <div className="flex my-2 justify-center lg:justify-start">
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={nodejs} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={express} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={mongodb} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={mysql} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#0a1331] hover:bg-blue-950 hover:scale-105 transition duration-500 mt-2 rounded-md p-2 w-[100%]">
        <h1 className="text-lg lg:text-start">Others</h1>
        <div className="flex my-2 justify-center lg:justify-start">
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={git} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={github} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={postman} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
          <span className="bg-white p-2 rounded mx-1 flex justify-center">
            <img src={vscode} alt="" className="lg:h-12 mx-2 h-8" />
          </span>
        </div>
      </div>
      <article className="flex flex-col text-start px-[20vw]"></article>
    </main>
  );
}

export default Skills;
