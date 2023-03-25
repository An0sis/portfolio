import "../css/navbar.css"

function Navbar() {
    return (
      <div className="hidden fixed sm:flex justify-center left-0 w-full h-[7%] bg-zinc-900 z-10">
        <ul className="flex justify-center items-center text-xs md:text-sm xl:text-md text-zinc-200 w-full px-10">
            <li className="px-[1%]"><a href="#about" className="animation animation-underline">About</a></li>
            <li className="px-[1%]"><a href="#education" className="animation animation-underline">Education</a></li>
            <li className="px-[1%]"><a href="#experience" className="animation animation-underline">Experience</a></li>
            <li className="px-[1%]"><a href="#projects" className="animation animation-underline">Projects</a></li>
            <li className="px-[1%]"><a href="#skills" className="animation animation-underline">Skills</a></li>
        </ul>
      </div>
    );
}
  
export default Navbar;