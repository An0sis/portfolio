import "../styles/Navbar.css"

function Navbar(){
    return(
        <div className="nv-bar">
            <div>
            <ul class="nv-gr-buttons">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;

