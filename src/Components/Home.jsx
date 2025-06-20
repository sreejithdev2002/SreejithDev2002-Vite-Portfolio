import React from "react";
import "../Styles.css";
import instagram from "../assets/Icons/instagram.png";
import facebook from "../assets/Icons/facebook.png";
import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
import x from "../assets/Icons/twitter.png";
import { saveAs } from "file-saver";

import laptopImage from "../assets/Images/Laptop.png";

function Home() {
  const handleDownload = () => {
    const fileUrl = "/Sreejith_U_Resume.pdf";
    const fileName = "Sreejith_U_Resume.pdf";
    saveAs(fileUrl, fileName);
  };

  return (
    <main
      className="flex flex-col text-white justify-center text-start px-[10vw] lg:px-[20vw] relative top-[50px] h-[100vh] lg:top-0"
      id="Home"
    >
      <img
        src={laptopImage}
        alt=""
        className="absolute top-10 hidden lg:block -z-[1]"
      />
      <h4 className="text-blue-300 font-mono">Hi, my name is</h4>
      <h1 className="typing-animation text-5xl py-1 z-20 NameH1">SREEJITH U</h1>
      <h1 className="text-5xl text-gray-300 py-1 z-20 NameH1">
        I build things for the web.
      </h1>
      <p className="max-w-[500px] py-1 text-left text-blue-200 z-20">
        Proactive and dedicated MERN Stack Developer with strong communication
        and organizational skills. Possessing adept problem-solving abilities
        and analytical thinking, with a knack for multitasking and facilitating
        group discussions.
      </p>
      <button
        onClick={handleDownload}
        className="bg-transparent border-2 text-blue-300 border-blue-300 py-2 my-10 hover:bg-blue-300 hover:text-blue-950 rounded transition-colors duration-500 shadow-lg lg:w-[15vw]"
      >
        Download my resume
      </button>

      <div className="flex justify-center lg:justify-start">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/sreejithdev2002/"
          className="p-2 group border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mx-[10px] lg:mx-[5px] rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={instagram} alt="" />
          <span class="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-950 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Instagram
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sreejithdev2002/"
          className="p-2 group border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mx-[10px] lg:mx-[5px] rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={linkedin} alt="" />
          <span class="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-950 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Linkedin
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sreejithdev2002"
          className="p-2 group border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mx-[10px] lg:mx-[5px] rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={github} alt="" />
          <span class="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-950 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Github
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/SreejithDev2002"
          className="p-2 group border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mx-[10px] lg:mx-[5px] rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={x} alt="" />
          <span class="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-950 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            X
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=61551495626567"
          className="p-2 group border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-950 mx-[10px] lg:mx-[5px] rounded-3xl  min-w-[50px] w-[50px] transition duration-500 hover:-translate-y-2"
        >
          <img src={facebook} alt="" />
          <span class="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-full mt-2 px-2 py-1 bg-blue-950 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Facebook
          </span>
        </a>
      </div>
    </main>
  );
}

export default Home;
