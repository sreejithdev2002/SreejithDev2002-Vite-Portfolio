import About from "./Components/Skills";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GoToTop from "./Components/GoToTop";
import { useState } from "react";
import Loader from "./Components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="App relative min-h-screen overflow-hidden text-slate-100 font-sans">
          {/* Glowing Animated Blobs */}
          <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#020215]">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[130px] animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[130px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[30%] right-[10%] w-[45%] h-[45%] rounded-full bg-emerald-600/5 blur-[120px] animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/5 blur-[110px] animate-blob"></div>
          </div>

          <Header />
          <Home />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
          <GoToTop />
        </div>
      )}
    </>
  );
}

export default App;
