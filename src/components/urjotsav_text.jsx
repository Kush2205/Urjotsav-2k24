import React from "react";
import { FlipWords } from "../UI/flipwords";
import logo from "../assets/Urja_logo.png";
import rglogo from "../assets/RGIPT.png"
import snt from "../assets/st.png"


export default function FlipWordsDemo() {
  const words = ["Annual Techfest of RGIPT", "Beyond the Cosmos, Beyond the Code"];

  // Calculate the days left before 9th November 2024
  const today = new Date();
  const eventDate = new Date("2024-11-09");
  const timeDiff = eventDate - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className="relative font-normal text-neutral-600 dark:text-neutral-400 flex flex-col items-center md:items-start md:mt-[20vh] mt-[18vh] px-4 md:px-8 lg:px-16 sm:mt-[18vh]">
      <div className="text-white font-Space text-2xl md:text-6xl lg:text-4xl leading-tight mb-0 text-center md:text-left ml-[-7.5rem] sm:ml-0 ">
        WELCOME TO
      </div>
      <div className="text-white font-Space text-5xl md:text-6xl lg:text-8xl leading-tight text-center md:text-left">
        URJOTSAV
      </div>
      <div className="h-[100px] md:h-[120px] lg:h-[150px] max-w-full md:max-w-[80%] lg:max-w-[70%] text-xl md:text-4xl lg:text-5xl pt-0 font-Space flex items-center justify-center md:justify-start text-white">
        <FlipWords words={words} />
      </div>


      <div className="">
        <h3 className="text-white font-Megrim text-2xl md:text-4xl lg:text-6xl xs:text-xl px-4 md:-ml-4 py-2 bg-[#00000058] rounded-xl">
          9-10 NOV
        </h3>
        <div className="text-white text-xl md:text-2xl lg:text-4xl mt-1 text-center md:text-left">
          {daysLeft} Days Left
        </div>
      </div>

      <div className="w-full mt-8 md:mt-10 lg:mt-2">
        <h3 className="text-white font-Rajdhani text-lg md:text-xl lg:text-2xl py-2 text-center md:text-left md:w-auto w-full">
          Embark on a cosmic journey and unlock the secrets of the universe
        </h3>
      </div>
      <a href="https://unstop.com/college-fests/urjotsav-2k24-the-annual-technical-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-pradesh-267858" target="blank" className="w-full flex items-center justify-center md:w-[200px] lg:w-[250px] rounded-xl bg-blue-800 h-[60px] text-lg md:text-xl lg:text-2xl mt-6 transition-all font-Spaceship text-white hover:bg-white hover:text-blue-800">
        Register Now
      </a>


      <div className="absolute right-0 top-0 mt-4 mr-4 hidden lg:flex lg:space-x-20">
        <a href="https://www.rgipt.ac.in/" target="_blank" rel="noopener noreferrer">
          <img
            src={rglogo}
            alt="RGIPT Logo"
            className="w-[130px] h-auto"
          />
        </a>
        <a href="https://www.rgipt.ac.in/en/post/science-tec-committee" target="_blank" rel="noopener noreferrer">
          <img
            src={snt}
            alt="SNT Logo"
            className="w-[150px] h-auto"
          />
        </a>
      </div>


    </div>
  );
}
