import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    // Remove loader after fade animation completes
    const removeTimer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#020215] z-[9999] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative blobs behind text */}
      <div className="absolute w-[300px] h-[300px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none translate-x-20 translate-y-10 animate-pulse"></div>

      <h1
        className="relative text-4xl md:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 tracking-widest font-sans animate-pulse"
      >
        SreejithDev
      </h1>
      <div className="mt-6 flex gap-1.5">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
        <span className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
      </div>
    </div>
  );
}
