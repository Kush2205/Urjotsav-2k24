import React from 'react'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

import hp from "../assets/hp.jpg";

import unstop from "../assets/unstop.jpg";
import academy from "../assets/curr sponsors/academy.png"
import bajpai from "../assets/curr sponsors/bajpai.png"
import baskin from "../assets/curr sponsors/baskin.png"
import cake from "../assets/curr sponsors/cake.png"
import no_scars from "../assets/curr sponsors/no scars.png"
import ocafe from "../assets/curr sponsors/o cafe.png"
import oxineer from "../assets/curr sponsors/oxineer.png"
import subway from "../assets/curr sponsors/subway2.png"
import vr from "../assets/curr sponsors/vr.png"
import zaika from "../assets/curr sponsors/zaika.png"
import burger from "../assets/burger.jpg";
import aie from "../assets/curr sponsors/aie.png"
import cust from "../assets/curr sponsors/cust.png"
import du from "../assets/curr sponsors/du.png"
import enhance from "../assets/curr sponsors/enhance.png"
import jaiswal from "../assets/curr sponsors/jaiswal.png"
import laxmi from "../assets/curr sponsors/laxmi.png"
import punjab from "../assets/curr sponsors/punjab.png"

export default function Sponsors1(props) {
    return (
        <>
        <div className='flex flex-col '>
            <h3 className="font-Space text-center font-semibold p-4 text-xl md:mb-[-6%] lg:mb-[3] md:text-4xl lg:text-5xl text-white">
                   Our Sponsors
            </h3>
            <div
      className="h-[20rem] mt-20 mb-6  relative rounded-md flex flex-col antialiased  items-center justify-center overflow-hidden">
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
          image: academy,
        name: "LWT Academy",
      },{
        quote:
          "Sponsor",
          image: bajpai,
        name: "Bajpai Sons",
      },{
        quote:
          "Sponsor",
          image: baskin,
        name: "Baskin Robins",
      },{
        quote:
          "Sponsor",
          image: cake,
        name: "Cakey Bakey",
      },
      {
        quote:
          "Sponsor",
        image: no_scars,
        name: "No Scars",
      },
      {
        quote:
          "Sponsor",
        image: ocafe,
        name: "O Cafe",
      },
      {
        quote:
          "Sponsor",
        image: oxineer,
        name: "Oxineer",
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
        image: subway,
        name: "Subway",
      },
      {
        quote:
          "Sponsor",
        image: vr,
        name: "Spark VR",
      },
      {
        quote:
          "Sponsor",
        image: zaika,
        name: "Zaika Express",
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
        image: aie,
        name: "AIE",
      },
      {
        quote:
          "Sponsor",
        image: cust,
        name: "Cust",
      },
      {
        quote:
          "Sponsor",
        image: du,
        name: "DU",
      },
      {
        quote:
          "Sponsor",
        image: enhance,
        name: "Enhance",
      },
      {
        quote:
          "Sponsor",
        image: jaiswal,
        name: "Jaiswal",
      },
      {
        quote:
          "Sponsor",
        image: laxmi,
        name: "Laxmi",
      },
      {
        quote:
          "Sponsor",
        image: punjab,
        name
      }
      // {
      //   quote:
      //     "Sponsor",
      //   image: waffle,
      //   name: "The Waffle Co.",
      // },
      // {
      //   quote:
      //     "Sponsor",
      //   image: burger,
      //   name: "Burger Singh",
      // },
      // {
      //   quote:
      //     "Sponsor",
      //   image: waffle,
      //   name: "The Waffle Co.",
      // },
      // {
      //   quote:
      //     "Sponsor",
      //   image: kwikpic,
      //   name: "Kwikpic",
      // },


];
