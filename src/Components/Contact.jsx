import "../Styles.css";

function Contact() {
  const recipientEmail = "sreejithdev2002@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const baseLinkClasses =
    "text-2xl sm:text-3xl font-bold my-1 cursor-pointer transition-all duration-500 hover:translate-x-2 text-white";

  return (
    <main
      className="text-white flex justify-center flex-col text-center px-6 sm:px-20 py-20 min-h-[60vh] bg-gray-950"
      id="Contact"
    >
      <h2 className="text-4xl mb-10 font-mono underline decoration-wavy decoration-blue-300 ContactH1">
        Contact
      </h2>

      <span
        className={`${baseLinkClasses} 
        hover:text-transparent hover:bg-clip-text 
        hover:bg-gradient-to-r hover:from-blue-400 hover:to-sky-300`}
        onClick={handleEmailClick}
      >
        EMAIL
      </span>

      <span
        className={`${baseLinkClasses}
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#0077B5]`}
        onClick={() =>
          handleExternalLinkClick("https://www.linkedin.com/in/sreejithdev2002")
        }
      >
        LINKEDIN
      </span>

      <span
        className={`${baseLinkClasses}
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-gray-300 hover:to-purple-500`}
        onClick={() =>
          handleExternalLinkClick("https://github.com/sreejithdev2002")
        }
      >
        GITHUB
      </span>

      <span
        className={`${baseLinkClasses}
        hover:text-transparent hover:bg-clip-text
        hover:bg-[linear-gradient(90deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)]`}
        onClick={() =>
          handleExternalLinkClick("https://www.instagram.com/sreejithdev2002")
        }
      >
        INSTAGRAM
      </span>

      <span
        className={`${baseLinkClasses}
        hover:text-transparent hover:bg-clip-text
        hover:bg-gradient-to-r hover:from-[#1877F2] hover:to-[#4C8BF5]`}
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
