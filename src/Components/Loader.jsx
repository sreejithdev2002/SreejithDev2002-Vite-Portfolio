import { useEffect, useState } from "react";
import "../App.css";

export default function Loader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 2600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-portfolio z-[9999] animate-fade-out">
      <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-white tracking-widest animate-fade-in headerBrandName">
        SreejithDev2002
      </h1>
    </div>
  );
}
