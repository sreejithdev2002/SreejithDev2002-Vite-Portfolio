import About from './Components/Skills';
import Header from './Components/Header';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GoToTop from './Components/GoToTop';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Home/>
    <About/>
    <Experience/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    <GoToTop/>
    </div>
  );
}

export default App;