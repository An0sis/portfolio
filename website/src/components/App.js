import Navbar from "./Navbar"
import About from "./About"
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";

function App() {
  return (
    <div className="px-[10%] bg-zinc-800">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
