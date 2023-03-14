function Education() {
    return (
    <div id="education">
        <h1 className="text-zinc-100 text-xl xl:text-5xl font-extrabold pb-5 xl:pb-10">Education</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center text-center pb-10">
            <div className="bg-zinc-700 w-[75%] sm:w-[25%] m-2 sm:m-3 xl:m-5 h-40 sm:h-50 xl:h-60 justify-center items-center flex flex-col rounded-lg border-4 border-blazingOrange">
                <p className="text-zinc-100 font-bold text-sm xl:text-2xl">Lycée jean baptiste Schwilgué</p>
                <p className="text-zinc-100 font-light text-sm xl:text-2xl">2018-2021</p>
                <p className="text-zinc-200 text-xs xl:text-xl pt-5">Bac mention bien spe info maths</p>
            </div>
            <div className="bg-zinc-700 w-[75%] sm:w-[25%] m-2 sm:m-3 xl:m-5 h-40 sm:h-50 xl:h-60 justify-center items-center flex flex-col rounded-lg border-4 border-blazingOrange">
                <p className="text-zinc-100 font-bold text-sm xl:text-2xl">Chulalongkorn Univeristy</p>
                <p className="text-zinc-100 font-light text-sm xl:text-2xl">January 2023 - Mai 2023</p>
                <p className="text-zinc-200 text-xs xl:text-xl pt-5">Exchange semester cool</p>
            </div>
            <div className="bg-zinc-700 w-[75%] sm:w-[25%] m-2 sm:m-3 xl:m-5 h-40 sm:h-50 xl:h-60 justify-center items-center flex flex-col rounded-lg border-4 border-blazingOrange">
                <p className="text-zinc-100 font-bold text-sm xl:text-2xl">EPITA</p>
                <p className="text-zinc-100 font-light text-sm xl:text-2xl">2021-2026</p>
                <p className="text-zinc-200 text-xs xl:text-xl pt-5">epita ecole d'ing voila tu connais cool</p>
            </div>
        </div>
    </div>
    );
}
  
export default Education;