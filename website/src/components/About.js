import me from "../assets/me.jpg"
import iconGit from "../assets/github.png"
import iconLink from "../assets/linkedin.png"
import CV from "../static/CV_Joric_Hantzberg.pdf"


function About() {
  return (
    <div id="about" className="flex flex-col sm:flex-row items-center w-full h-screen">
        <div className="w-2/3 sm:w-1/3 h-1/3 sm:h-[50%] p-[4%] flex justify-center items-center flex-col">
          <img src={me} alt="Me" className="rounded-full border-4 border-blazingOrange object-scale-down max-w-[90%] max-h-[90%]"/>
          <div className="flex flex-row items-center pt-[4%] lg:pt-[6%] h-15">
            <a href="https://github.com/An0sis"><img src={iconGit} className="h-5 lg:h-10 px-1 lg:px-2.5 object-contain"/></a>
            <div className="px-1 lg:px-2.5">
              <a href={CV} download=""><button class="bg-blazingOrange hover:bg-blazingOrangeClick text-white text-xs lg:text-base font-bold h-5 lg:h-10 rounded-full px-1 lg:px-2.5 "> Resume </button></a>
            </div>
            <a href="https://www.linkedin.com/in/joric-hantzberg-8623481b9/"><img src={iconLink} className="h-5 lg:h-10 px-1 lg:px-2.5 object-contain"/></a>
          </div>
        </div>
        <div className="flex flex-col justify-center  w-2/3 h-2/3 sm:h-[50%] p-[4%]"> 
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-zinc-100">Joric Hantzberg</h1>
          <p className="text-md md:text-xl xl:text-2xl text-zinc-200">Epita student</p>
          <p className="text-sm md:text-md xl:text-xl text-zinc-300 font-light pt-[5%]">
            I have been passionate about science since I was very young. I love solve problem and build software. This is the reason
            why I hope to become a competent and efficient computer engineer. For any request, you can contact me on linkedin or with the following email address : hantzberg.joric@gmail.com
          </p>
        </div>
    </div>
  );
}

export default About;
