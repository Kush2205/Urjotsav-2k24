import React from "react";
import { Meteors } from "./meteors";
import { SignupFormDemo } from "../input/contactform";

export function MeteorsDemo() {
  return (
    <div className="flex justify-center md:justify-start items-center w-[95%] sm:w-[400px]">
      <div className="w-[100%] relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 h-auto rounded-2xl flex flex-col justify-center items-center">
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
}
