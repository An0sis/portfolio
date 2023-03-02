import me from "../assets/me.jpeg"
import iconGit from "../assets/github.png"
import iconLink from "../assets/linkedin.png"
import CV from "../static/CV_Joric_Hantzberg.pdf"


function About() {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-blue-500 w-full h-screen">
        <div className="bg-purple-600 w-2/3 sm:w-1/3 h-1/3 sm:h-[50%] p-[4%] flex justify-center items-center flex-col">
            <img src={me} alt="Me" className="rounded-full border-4 border-blazingOrange object-scale-down max-w-[90%] max-h-[90%]"/>
          <div className="flex flex-row items-center pt-[4%] lg:pt-[6%] h-15">
            <a href="https://github.com/An0sis"><img src={iconGit} className="h-5 lg:h-10 px-1 lg:px-2.5 object-contain"/></a>
            <div className="px-1 lg:px-2.5">
              <a href={CV} download=""><button class="bg-blazingOrange hover:bg-blue-700 text-white text-xs lg:text-base font-bold h-5 lg:h-10 rounded-full px-1 lg:px-2.5 "> Resume </button></a>
            </div>
            <a href="https://www.linkedin.com/in/joric-hantzberg-8623481b9/"><img src={iconLink} className="h-5 lg:h-10 px-1 lg:px-2.5 object-contain"/></a>
          </div>
        </div>
        <div className="bg-blazingOrange w-2/3 h-2/3 sm:h-[50%] p-[4%] flex justify-center items-center"> 
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>
    </div>
  );
}

export default About;
