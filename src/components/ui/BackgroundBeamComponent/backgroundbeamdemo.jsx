"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { MeteorsDemo } from "../meteors/meteorsdemo";
import MoonScene from "../../../components/MoonScene";
import { BackgroundGradientDemo } from "../Box/box";

export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full pt-10 pl-4 sm:pl-20 rounded-md bg-neutral-950 relative flex flex-col items-center sm:items-start justify-start antialiased overflow-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
        {/* Left side: Contact Us and Meteors */}
        <div className="max-w-2xl p-5 flex-1 ">
          <h1 className="relative z-10 ml-5 text-4xl md:text-6xl lg:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans font-bold mb-8">
            Contact Us!
          </h1>
          <p className="text-left">
            {/* Add any additional text here if needed */}
          </p>
          <div className="m-1">
            <MeteorsDemo />
          </div>
        </div>

        {/* Right side: Contact Cards */}
        <div className="order-2 sm:order-3 sm:ml-5">
          <BackgroundGradientDemo />
        </div>
      </div>

      {/* Background Beams at the bottom */}
      <BackgroundBeams />
    </div>
  );
}
