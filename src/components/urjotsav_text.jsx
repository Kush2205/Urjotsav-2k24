import React from "react";
import { FlipWords } from "../UI/flipwords";
import logo from "../assets/Urja_logo.png";

export default function FlipWordsDemo() {
  const words = ["Annual Techfest of RGIPT","Beyond the Cosmos, Beyond the Code"];

  // Calculate the days left before 9th November 2024
  const today = new Date();
  const eventDate = new Date("2024-11-09");
  const timeDiff = eventDate - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className="relative font-normal text-neutral-600 dark:text-neutral-400 flex flex-col items-center md:items-start md:mt-[20vh] mt-[18vh] px-4 md:px-8 lg:px-16 sm:mt-[18vh]">
      <div className="text-white font-Space text-4xl md:text-6xl lg:text-4xl leading-tight mb-0 text-center md:text-left">
        WELCOME TO
      </div>
      <div className="text-white font-Space text-4xl md:text-6xl lg:text-8xl leading-tight mb-4 text-center md:text-left">
        URJOTSAV
      </div>
      <div className="h-[100px] md:h-[120px] lg:h-[150px] max-w-full md:max-w-[80%] lg:max-w-[70%] text-base sm:text-xl md:text-4xl lg:text-5xl pt-0 font-Space flex items-center justify-center md:justify-start text-white">
        <FlipWords words={words} />
      </div>
      
      
      <div className="w-full mt-8 md:mt-10 lg:mt-4">
        <h3 className="text-white font-Rajdhani text-lg md:text-xl lg:text-2xl py-6 text-center md:text-left md:w-auto w-full">
          Embark on a cosmic journey and unlock the secrets of the universe
        </h3>
      </div>
      <button className="w-full md:w-[200px] lg:w-[250px] rounded-xl bg-blue-800 h-[60px] text-lg md:text-xl lg:text-2xl mt-6 transition-all font-Spaceship text-white hover:bg-white hover:text-blue-800">
        Register Now
      </button>

      {/* Add the days left information towards the right side */}
      <div className="absolute lg:right-10 lg:top-0 mt-[3rem] mr-[1rem] lg:mt-[5rem] lg:mr-[5rem] text-center right-[35vw] top-[16vh]">
  <h3 className="text-white font-Megrim text-2xl md:text-lg md:text-xl lg:text-8xl xs:text-xl ">
    9-10 NOV
  </h3>
  <div className="text-white text-lg md:text-2xl lg:text-4xl mt-1">
    {daysLeft} Days Left
  </div>
</div>



      {/* <div className="absolute right-0 top-0 mt-4 mr-4">
        <img src={logo} alt="Right Side" className="w-[500px] h-auto" />
      </div> */}
    </div>
  );
}
