import "../css/navbar.css"

function Navbar() {
    return (
      <div className="hidden fixed sm:flex justify-center px-[8%] left-0 w-full h-[7%] bg-zinc-900 z-10">
        <ul className="flex justify-evenly items-center text-lg md:text-xl xl:text-2xl text-zinc-200 w-full">
            <li><a href="#about" className="animation animation-underline">About</a></li>
            <li><a href="#education" className="animation animation-underline">Education</a></li>
            <li><a href="#experience" className="animation animation-underline">Experience</a></li>
            <li><a href="#projects" className="animation animation-underline">Projects</a></li>
            <li><a href="#skills" className="animation animation-underline">Skills</a></li>
        </ul>
      </div>
    );
}
  
export default Navbar;