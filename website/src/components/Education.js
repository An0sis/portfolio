import Educationcard from "./EducationCard";

function Education() {
    return (
    <div id="education">
        <h1 className="text-zinc-100 text-xl xl:text-5xl font-extrabold pb-5 xl:pb-10">Education :</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center text-center pb-10">
            <Educationcard name="Lycée jean baptiste Schwilgué" date="2018-2021" info="Bac mention bien spe info maths" />
            <Educationcard name="Chulalongkorn Univeristy" date="January 2023 - Mai 2023" info="Exchange semester cool" />
            <Educationcard name="EPITA" date="2021-2026" info="epita ecole d'ing voila tu connais cool" />
        </div>
    </div>
    );
}
  
export default Education;