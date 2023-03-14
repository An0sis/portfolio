import Navbar from "./Navbar"
import About from "./About"
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <div className="px-[7%] bg-zinc-800">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <ProjectCard />
      <Skills />
    </div>
  );
}

export default App;
