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
            <h1 className="text-zinc-100 text-xl xl:text-5xl font-extrabold pb-5 xl:pb-10">Projects :</h1>
            <div className="grid grid-rows-auto grid-col-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[3%] gap-y-[3%] justify-items-middle pb-10">
                <ProjectCard title="OCR" desc="desc" image={ocr} tech={projectOcr} />
                <ProjectCard title="Licocrypto" desc="This project was made in collaboration with SharkyFlou. Its a program to encrypt and decrypt message with a key or hide message in image using the steganographie. Require : PySimpleGUI, pyperclip, PIL, webbrowser" image={licocrypto} tech={projectLicocrypto} />
                <ProjectCard title="Portfolio" desc="A portfolio website created using React and Tailwind to learn this to technologies" image={website} tech={projectPortfolio} />
                <ProjectCard title="Eldorado" desc="The legendary world: Eldorado is a MMORPG created during the second semester of the first year at EPITA in a group of four students." image={eldorado} tech={projectEldorado} />
            </div>
        </div>
    );
}

export default Project; 