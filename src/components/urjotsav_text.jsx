import React from "react";
import { FlipWords } from "../UI/flipwords";
import logo from "../assets/Urja_logo.png"

export default function FlipWordsDemo() {
  const words = ["Annual Techfest of RGIPT","Beyond the Cosmos, Beyond the Code"];

  return (
    <div className="relative font-normal text-neutral-600 dark:text-neutral-400 flex flex-col items-center md:items-start md:mt-[20vh] mt-[30vh] px-4 md:px-8 lg:px-16">
      <div className="font-Space text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 text-center md:text-left">
        WELCOME TO
      </div>
      <div className="font-Space text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 text-center md:text-left">
        URJOTSAV
      </div>
      <div className="h-[100px] md:h-[120px] lg:h-[150px] max-w-full md:max-w-[80%] lg:max-w-[70%] text-base sm:text-xl md:text-4xl lg:text-5xl pt-0 font-Space flex items-center justify-center md:justify-start">
        <FlipWords words={words} />
      </div>
      <div className="w-full mt-8 md:mt-10 lg:mt-12">
        <h3 className="text-white font-Rajdhani text-lg md:text-xl lg:text-2xl py-6 text-center md:text-left md:w-auto w-full">
          Embark on a cosmic journey and unlock the secrets of the universe
        </h3>
      </div>
      <button className="w-full md:w-[200px] lg:w-[250px] rounded-xl bg-blue-800 h-[60px] text-lg md:text-xl lg:text-2xl mt-6 transition-all font-Spaceship text-white hover:bg-white hover:text-blue-800">
        Register Now
      </button>

      {/* <div className="absolute right-0 top-0 mt-4 mr-4">
        <img src={logo} alt="Right Side" className="w-[500px] h-auto" />
      </div> */}
    </div>
  );
}