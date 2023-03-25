function EducationCard(props){
    return(
        <div className="bg-zinc-700 p-2 sm:p-3 xl:p-5 sm:w-[30%] my-2 sm:mx-3 xl:mx-5 justify-start items-center flex flex-col rounded-lg border-4 border-blazingOrange">
            <p className="text-zinc-100 font-bold text-md xl:text-2xl">{props.name}</p>
            <p className="text-zinc-200 font-light text-sm xl:text-md">{props.date}</p>
            <p className="text-zinc-100 font-light text-xs xl:text-xl pt-2">{props.info}</p>
        </div>
    );
}

export default EducationCard