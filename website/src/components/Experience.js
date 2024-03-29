import ExperienceCard from "./ExperienceCard";

function Experience(){
    return(
    <div id="experience">
        <h1 className="text-zinc-100 text-xl xl:text-3xl font-extrabold pb-5 xl:pb-10">Professional background :</h1>
        <div className="m-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 grid-auto-rows gap-x-[3%] gap-y-[4%] justify-items-middle pb-20">
            <ExperienceCard job="Bartender" location="EuropaPark" date="June-August 2022/2023" info="During the summers of 2022 and 2023, I worked as bartender in one of the hotels of the Europa-Park theme park." />       
        </div>
    </div>
    );
}

export default Experience
