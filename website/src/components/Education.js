import Educationcard from "./EducationCard";

function Education() {
    return (
    <div id="education">
        <h1 className="text-zinc-100 text-xl xl:text-5xl font-extrabold pb-5 xl:pb-10">Education :</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center text-center pb-10">
            <Educationcard name="Lycée jean baptiste Schwilgué" date="2018-2021" info="Baccalaureate with honors with specialization in maths and computer science" />
            <Educationcard name="Chulalongkorn Univeristy" date="January 2023 - Mai 2023" info="6-month exchange semester at Chulalongkorn University in Bangkok" />
            <Educationcard name="EPITA" date="2021-2026" info="
Second year student at EPITA, a French computer engineering school" />
        </div>
    </div>
    );
}
  
export default Education;