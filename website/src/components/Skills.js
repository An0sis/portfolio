import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import c from "../assets/c_logo.png"
import cpp from "../assets/cpp_logo.png"
import csharp from "../assets/csharp_logo.png"
import python from "../assets/python_logo.png"
import ocaml from "../assets/ocaml_logo.png"
import javascript from "../assets/js_logo.png"
import htmlcss from "../assets/htmlcss_logo.png"
import react from "../assets/react_logo.png"
import tailwind from "../assets/tailwind_logo.png"
import windows from "../assets/windows_logo.png"
import linux from "../assets/linux_logo.png"
import git from "../assets/git_logo.png"
import unity from "../assets/unity_logo.png"
import postgres from "../assets/postgres_logo.png"
import asm from "../assets/x86-64_logo.png"
import java from "../assets/java_logo.png"
import Slider from "react-slick";
import Skillcard from "./SkillCard";

function Skills(){
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autopllaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              }
            }]
      };
    return(
        <div id="skills">
            <h1 className="text-zinc-100 text-xl xl:text-3xl font-extrabold pb-5 xl:pb-10">Skills :</h1>
            <Slider {...settings} className="pb-20">
            <Skillcard image={c} experience="Expert" name="C" />
            <Skillcard image={cpp} experience="Advanced +" name="C++" />
            <Skillcard image={csharp} experience="Intermediate" name="C#" />
            <Skillcard image={python} experience="Advanced" name="Python" />
            <Skillcard image={java} experience="Advanced" name="Java" />
            <Skillcard image={postgres} experience="Intermediate" name="PostgreSQL" />
            <Skillcard image={javascript} experience="Beginner" name="JavaScript" />
            <Skillcard image={htmlcss} experience="Intermediate" name="HTML/CSS" />
            <Skillcard image={asm} experience="Beginner +" name="ASM x86-64" />
            <Skillcard image={react} experience="Beginner +" name="React" />
            <Skillcard image={tailwind} experience="Intermediate" name="Tailwind" />
            <Skillcard image={unity} experience="Intermediate +" name="Unity" />
            <Skillcard image={ocaml} experience="Intermediate" name="OCaml" />
            <Skillcard image={windows} experience="Intermediate +" name="Windows" />
            <Skillcard image={linux} experience="Advanced +" name="Linux" />
            <Skillcard image={git} experience="Advanced" name="Git" />
            </Slider>
        </div>
    );
}

export default Skills;
