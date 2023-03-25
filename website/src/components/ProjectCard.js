import iconGit from "../assets/github.png"


function ProjectCard(props){
    const techlist = props.tech;
    return(
        <div className="bg-zinc-700 h-full rounded-lg border-4 border-blazingOrange relative">
            <img src={props.image} alt={props.title} className="w-full"/>
            <div className="flex flex-row flex-wrap py-1">
                {techlist.map((item)=><p className="rounded-md bg-zinc-800 text-zinc-100 text-xs px-2 m-1">{item}</p>)}
            </div>
            <div className="text-zinc-100 font-bold text-xl xl:text-2xl px-2">
                <p>{props.title}</p>
            </div>
            <div className="text-zinc-100 font-light text-md xl:text-xl px-2 mb-14">
                <p>{props.desc}</p>
            </div>
            <div className="bg-zinc-800 absolute bottom-0 w-full border-t-2 border-black">
                <a href={props.link}><img src={iconGit} className="h-8 p-2  object-contain"/></a>
            </div>
        </div>
    );
}

export default ProjectCard