import React from 'react'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import royalenfield from "../assets/re.png";
import hp from "../assets/hp.jpg";
import bharat from "../assets/bharat.jpg";
import gail from "../assets/gail.jpg";
import indian from "../assets/indianoil.jpg";
import quillbot from "../assets/quillbot.jpg";
import canara from "../assets/canara.jpg";
import hmel from "../assets/hmel.jpg";
import unstop from "../assets/unstop.jpg";
import gfg from "../assets/glg.jpg";
import amar from "../assets/amarujala.jpg";
import coding from "../assets/coding.jpg";
import oilindia from "../assets/oilinida.jpg";
import fujifilm from "../assets/fujifilm.jpg";
import burger from "../assets/burger.jpg";
import waffle from "../assets/waffle.jpg";
import kwikpic from "../assets/kwikpic.jpg";

export default function Sponsors1(props) {
    return (
        <>
        <div className='flex flex-col '>
            <h3 className="font-Space text-center font-semibold p-4 text-4xl md:mb-[-6%] lg:mb-[3] md:text-6xl lg:text-8xl text-white">
                     OUR SPONSORS
            </h3>
            <div
      className="h-[20rem] mt-6 mb-6 md:mt-44 md:mb-44 relative rounded-md flex flex-col antialiased  items-center justify-center overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
        </div>
        </>
    )
}


const testimonials = [
    {
        quote:
          "Sponsor",
        image: hp,
        name: "HP",
      },{
        quote:
          "Sponsor",
          image: bharat,
        name: "Bharat Petroleum",
      },{
        quote:
          "Sponsor",
          image: gail,
        name: "Gail",
      },{
        quote:
          "Sponsor",
          image: indian,
        name: "Indian Oil",
      },{
        quote:
          "Sponsor",
          image: royalenfield,
        name: "Royal Enfield",
      },
      {
        quote:
          "Sponsor",
        image: quillbot,
        name: "QuillBot",
      },
      {
        quote:
          "Sponsor",
        image: canara,
        name: "Canara Bank",
      },
      {
        quote:
          "Sponsor",
        image: hmel,
        name: "HMEL",
      },
      {
        quote:
          "Sponsor",
        image: unstop,
        name: "Unstop",
      },
      {
        quote:
          "Sponsor",
        image: gfg,
        name: "GFG",
      },
      {
        quote:
          "Sponsor",
        image: amar,
        name: "Amar Ujala",
      },
      {
        quote:
          "Sponsor",
        image: coding,
        name: "Coding Blocks",
      },
      {
        quote:
          "Sponsor",
        image: oilindia,
        name: "Oil India Limited",
      },
      {
        quote:
          "Sponsor",
        image: fujifilm,
        name: "FujiFilm",
      },
      {
        quote:
          "Sponsor",
        image: burger,
        name: "Burger Singh",
      },
      {
        quote:
          "Sponsor",
        image: waffle,
        name: "The Waffle Co.",
      },
      {
        quote:
          "Sponsor",
        image: kwikpic,
        name: "Kwikpic",
      },


];