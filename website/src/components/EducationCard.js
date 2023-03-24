function EducationCard(props){
    return(
        <div className="bg-zinc-700 px-2 sm:px-3 xl:px-5 w-[75%] sm:w-[25%] m-2 sm:m-3 xl:m-5 h-40 sm:h-50 xl:h-60 justify-center items-center flex flex-col rounded-lg border-4 border-blazingOrange">
            <p className="text-zinc-100 font-bold text-md xl:text-2xl">{props.name}</p>
            <p className="text-zinc-200 font-light text-sm xl:text-md">{props.date}</p>
            <p className="text-zinc-100 font-light text-xs xl:text-xl pt-2">{props.info}</p>
        </div>
    );
}

export default EducationCard