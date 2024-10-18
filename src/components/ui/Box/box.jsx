"use client";
import React from "react";
import { BackgroundGradient } from "../Box/backgroungrad";
import MoonScene from "../../MoonScene";
import ankurImg from "../../../assets/ankur.jpg"
import atulImg from "../../../assets/atul.jpg";
import anish from "../../../assets/anish.jpeg";
import ayushImg from "../../../assets/ayush.jpg"

// Card component to display individual cards
const Card = ({ src, alt, title, price, designation }) => (
  <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-2 backdrop-blur-md bg-white/40 m-2.5">
    <div className="flex items-center">
      <img
        src={src}
        alt={alt}
        height="50"
        width="50"
        className="object-cover rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
      />
      <div className="ml-4">
        <p className="text-base sm:text-xl text-black dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm text-neutral-300 dark:text-neutral-200">
          {designation}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
          <span className="bg-slate-600 text-white px-1 py-1 rounded">
            {price}
          </span>
        </p>
      </div>
    </div>
  </BackgroundGradient>
);

// Main component for layout
export function BackgroundGradientDemo() {
  return (
    <div className="flex xl:-translate-x-[10%] 2xl:-translate-x-[15%] flex-col items-center sm:flex-row sm:justify-between sm:items-center sm:min-h-[90vh] 2xl:min-h-[80vh]">
      {/* Left-side contact cards */}
      <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-col sm:gap-6 sm:mr-10 order-1 sm:order-1">
        <Card
          src={ankurImg}
          alt="ankur"
          title="Ankur Kumar"
          designation="Fest Coordinator"
          price="+91-7991902068"
        />
        <Card
          src={atulImg}
          alt="atul"
          title="Atul Panwar"
          designation="Fest Coordinator"
          price="+91-8306579717"
        />
      </div>

      {/* Moon Scene in the center */}
      <div className="order-2 sm:order-2 sm:w-[250px] 2xl:w-[340px] 2xl:h-[340px] sm:h-[250px] mt-3 sm:mt-0 mb-8 sm:mb-0 mr-12">
        <MoonScene />
      </div>

      {/* Right-side contact cards */}
      <div className="grid grid-cols-1 gap-6 sm:flex sm:flex-col sm:gap-6 sm:ml-10 order-3 sm:order-3">
        <Card
          src={anish}
          alt="Anish Kumar"
          title="Anish Kumar"
          designation="Event Head"
          price="+91-6206868057"
        />
        <Card
          src={ayushImg}
          alt="Ayush Tripathi"
          title="Ayush Tripathi"
          designation="Technical Team Head"
          price="+91-8400270616"
        />
      </div>
    </div>
  );
}
