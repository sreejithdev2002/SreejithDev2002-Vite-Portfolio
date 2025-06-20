import React from "react";
import "../Styles.css";

function Contact() {
  const recipientEmail = "sreejithdev2002@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <main
      className="text-white flex justify-center flex-col text-center px-[20v] py-20 h-[60vh] bg-gray-950"
      id="Contact"
    >
      <h2 className="text-4xl mb-10 font-mono underline decoration-wavy decoration-blue-300 decoration-auto ContactH1">
        Contact
      </h2>
      <span
        className="text-3xl font-bold my-1 transition duration-500 hover:translate-x-2 cursor-pointer"
        onClick={handleEmailClick}
      >
        EMAIL
      </span>
      <span
        className="text-3xl font-bold my-1 transition duration-500 hover:translate-x-2 cursor-pointer"
        onClick={() =>
          handleExternalLinkClick("https://www.linkedin.com/in/sreejithdev2002")
        }
      >
        LINKEDIN
      </span>
      <span
        className="text-3xl font-bold my-1 transition duration-500 hover:translate-x-2 cursor-pointer"
        onClick={() =>
          handleExternalLinkClick("https://github.com/sreejithdev2002")
        }
      >
        GITHUB
      </span>
      <span
        className="text-3xl font-bold my-1 transition duration-500 hover:translate-x-2 cursor-pointer"
        onClick={() =>
          handleExternalLinkClick("https://www.instagram.com/sreejithdev2002")
        }
      >
        INSTAGRAM
      </span>
      <span
        className="text-3xl font-bold my-1 transition duration-500 hover:translate-x-2 cursor-pointer"
        onClick={() =>
          handleExternalLinkClick(
            "https://www.facebook.com/profile.php?id=61551495626567"
          )
        }
      >
        FACEBOOK
      </span>
    </main>
  );
}

export default Contact;
