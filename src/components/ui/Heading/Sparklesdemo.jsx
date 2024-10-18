"use client";
import React from "react";
import { SparklesCore } from "./sparkle";

export function SparklesPreview() {
  return (
    (<div
      className="h-15 w-[100%] mt-[14%] flex flex-col items-center justify-center overflow-hidden rounded-md">
     
      <div className="w-[40rem] h-30 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[20px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[20px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <h1
        className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
        About Us!
      </h1>

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>)
  );
}
