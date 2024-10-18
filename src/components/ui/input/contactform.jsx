"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../../lib/util";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name" className="text-white hover:text-gray-300">Name</Label>
            <Input
              id="name"
              placeholder="Enter your Name"
              type="text"
              className="relative z-10 hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-200"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone" className="text-white hover:text-gray-300">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your Phone Number"
              type="text"
              className="relative z-10 hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-200"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="m-1">
          <Label htmlFor="email" className="text-white hover:text-gray-300">Email Address</Label>
          <Input
            id="email"
            placeholder="Enter your E-mail Address"
            type="email"
            className="relative z-10 hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-200"
          />
        </LabelInputContainer>

        <LabelInputContainer className="m-1">
          <Label htmlFor="message" className="text-white hover:text-gray-300">Message</Label>
          <textarea
            id="message"
            placeholder="Type your message"
            className="w-full h-20 p-2 border rounded-lg bg-gray-50 dark:bg-zinc-800 text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 relative z-10 hover:bg-gray-100 dark:hover:bg-zinc-700 transition duration-200"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 my-2 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] relative z-10"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
        <div className="text-white p-1 flex">
          Mail us at:
          <a href="mailto:urjotsav@rgipt.ac.in" className="text-red-500 ml-2">
            urjotsav@rgipt.ac.in
          </a>
        </div>
        <div className="flex flex-row space-x-4 relative z-10 mt-2">
          <div className="text-white">Social Handles:</div>

          <a
            className="relative group/btn flex space-x-2 items-center justify-start px-1 w-12 rounded-md h-10 shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            href="https://in.linkedin.com/in/urjotsav"
            target="_blank" rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="h-8 w-8 text-white dark:text-white" />
            <BottomGradient />
          </a>

          <a
            className="relative group/btn flex space-x-2 items-center justify-start px-2 w-13 rounded-md h-10 shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            href="https://www.instagram.com/urjotsav_rgipt/"
            target="_blank" rel="noopener noreferrer"
          >
            <IconBrandInstagram className="h-10 w-8 text-white dark:text-white" />
            <BottomGradient />
          </a>

          <a
            className="relative group/btn flex space-x-2 items-center justify-start px-2 w-13 text-black rounded-md h-10 shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            href="https://www.youtube.com/channel/UCBxwxhcJ1bIBRVgJovD5wAQ?app=desktop"
            target="_blank" rel="noopener noreferrer"
          >
            <IconBrandYoutube className="h-8 w-8 text-white dark:text-white" />
            <BottomGradient />
          </a>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
