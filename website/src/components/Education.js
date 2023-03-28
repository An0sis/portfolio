import Educationcard from "./EducationCard";

function Education() {
    return (
    <div id="education">
        <h1 className="text-zinc-100 text-xl xl:text-3xl font-extrabold pb-5 xl:pb-10">Education :</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch text-center pb-20">
            <Educationcard name="Lycée Jean Baptiste Schwilgué" date="2018-2021" info="Baccalaureate with honors with specialization in maths and computer science" />
            <Educationcard name="EPITA" date="2021-2026" info="Second year student at EPITA, a French computer engineering school" />
            <Educationcard name="Chulalongkorn Univeristy" date="January 2023 - Mai 2023" info="6-months exchange semester at Chulalongkorn University in Bangkok" />
        </div>
    </div>
    );
}
  
export default Education;