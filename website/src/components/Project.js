import ProjectCard from "./ProjectCard";
import website from "../assets/website_img.png"
import eldorado from "../assets/eldorado_img.png"
import licocrypto from "../assets/licocrypto_img.png"
import ocr from "../assets/ocr_img.png"

function Project(){
    const projectPortfolio=["React","Tailwind","Javascript","HTML","CSS"];
    const projectEldorado=["C#","Unity","Photon","Playfab"];
    const projectLicocrypto=["Python","PIL","PySimpleGUI"];
    const projectOcr=["C","SDL2","GTK"];
    return(
        <div id="projects">
            <h1 className="text-zinc-100 text-xl xl:text-3xl font-extrabold pb-5 xl:pb-10">Projects :</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-x-6 gap-y-4 pb-20">
                <ProjectCard title="OCR" desc="
OCR is a 2nd year project at EPITA carried out in groups of 4. The goal is to create a software that allows you to solve a sudoku from an image." image={ocr} tech={projectOcr} link="https://github.com/An0sis/OCR-Epita"/>
                <ProjectCard title="Licocrypto" desc="This project was made in collaboration with SharkyFlou. Its a program to encrypt and decrypt message with a key or hide message in image using the steganographie. Require : PySimpleGUI, pyperclip, PIL, webbrowser" image={licocrypto} tech={projectLicocrypto} link="https://github.com/An0sis/Projet-LicoCrypto"/>
                <ProjectCard title="Portfolio" desc="A portfolio website created using React and Tailwind to learn this two technologies" image={website} tech={projectPortfolio} link="https://github.com/An0sis/portfolio"/>
                <ProjectCard title="Eldorado" desc="The legendary world: Eldorado is a MMORPG created during the second semester of the first year at EPITA in a group of four students." image={eldorado} tech={projectEldorado} link="https://github.com/An0sis/Eldorado"/>
            </div>
        </div>
    );
}

export default Project; 