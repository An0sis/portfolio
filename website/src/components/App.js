import Navbar from "./Navbar"
import About from "./About"
import Skills from "./Skills";
import Education from "./Education";

function App() {
  return (
    <div className="px-[7%] bg-zinc-800">
      <Navbar />
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
