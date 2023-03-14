function SkillCard(props) {
    return (
        <div className="flex justify-center">
            <div className="bg-zinc-700 w-11/12 h-48 justify-center items-center flex flex-col rounded-lg border-4 border-blazingOrange">
                <img src={props.image} alt={props.name} className="w-20 max-h-20"/>
                <p className="text-zinc-100 font-bold text-sm xl:text-2xl pt-3">{props.name}</p>
                <p className="text-zinc-200 text-xs xl:text-xl">{props.experience}</p>
            </div>
        </div>
    );
}

export default SkillCard;