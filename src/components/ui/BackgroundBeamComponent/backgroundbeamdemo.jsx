"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { MeteorsDemo } from "../meteors/meteorsdemo";
import MoonScene from "../../../components/MoonScene";
import { BackgroundGradientDemo } from "../Box/box";

export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-screen pt-20 sm:pl-4 rounded-md bg-neutral-950 relative flex flex-col items-center sm:items-start justify-start antialiased overflow-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
        {/* Left side: Contact Us and Meteors */}
        <div className="w-full md:w-[500px] px-3 sm:p-5 flex-1 ">
          <h1 className="relative z-10 sm:ml-5 text-4xl md:text-6xl lg:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans font-bold mb-12">
            Contact Us!
          </h1>
          <div className="sm:m-1">
            <MeteorsDemo />
          </div>
        </div>

        {/* Right side: Contact Cards */}
        <div className="order-2 sm:order-3 sm:ml-5 mt-8 mb-20">
          <BackgroundGradientDemo />
        </div>
      </div>

      {/* Background Beams at the bottom */}
      <BackgroundBeams />
    </div>
  );
}
