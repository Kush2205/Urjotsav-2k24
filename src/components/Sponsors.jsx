import React from "react";
import sbi from "../assets/curr sponsors/sbi.png";
import union from "../assets/curr sponsors/union.png";
import icici from "../assets/curr sponsors/icici.png";
import hpcl1 from "../assets/curr sponsors/hpcl1.png";
import bpcl from "../assets/curr sponsors/bpcl.png";
import bob from "../assets/curr sponsors/bob.png";
import hp from "../assets/hp.jpg";
import unstop from "../assets/unstop.jpg";
import academy from "../assets/curr sponsors/academy.png";
import bajpai from "../assets/curr sponsors/bajpai.png";
import baskin from "../assets/curr sponsors/baskin.png";
import cake from "../assets/curr sponsors/cake.png";
import no_scars from "../assets/curr sponsors/no scars.png";
import ocafe from "../assets/curr sponsors/o cafe.png";
import oxineer from "../assets/curr sponsors/oxineer.png";
import subway from "../assets/curr sponsors/subway2.png";
import vr from "../assets/curr sponsors/vr.png";
import zaika from "../assets/curr sponsors/zaika.png";
import burger from "../assets/burger.jpg";
import aie from "../assets/curr sponsors/aie.png";
import cust from "../assets/curr sponsors/cust.png";
import du from "../assets/curr sponsors/du.png";
import enhance from "../assets/curr sponsors/enhance.png";
import jaiswal from "../assets/curr sponsors/jaiswal.png";
import laxmi from "../assets/curr sponsors/laxmi.png";
import punjab from "../assets/curr sponsors/punjab.png";

export default function Sponsors(props) {
  return (
    <>
      <div className="flex flex-col mt-14 items-center">
        <div>
          <h3 className="font-Space text-center font-semibold text-4xl md:text-6xl lg:text-8xl text-white">
            OUR SPONSORS
          </h3>
        </div>
        <div className="w-full mt-6 relative rounded-md flex flex-col antialiased items-center justify-center overflow-hidden">
          <div>
            <h4 className="font-Space mt-6 text-center font-semibold p-4 text-3xl md:text-5xl lg:text-6xl text-white">
              Powered By
            </h4>
          </div>
          <div>
            <h5 className="font-Space text-center font-semibold p-4 text-2xl md:text-4xl lg:text-5xl text-white">
              Our Gold Sponsor
            </h5>
          </div>
          <div className="w-full flex justify-center mb-6 rounded-xl">
            <img
              src={sbi}
              alt="SBI"
              className="h-64 w-64 md:h-80 md:w-80 lg:h-[300px] lg:w-full object-contain "
            />
          </div>
          <div>
            <h5 className="font-Space text-center font-semibold p-4 text-2xl md:text-4xl lg:text-5xl text-white">
              Our Silver Sponsors
            </h5>
          </div>
          <div className="w-full flex flex-wrap justify-around">
            <img
              src={union}
              alt="Union Bank"
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain m-2"
            />
            <img
              src={icici}
              alt="ICICI"
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain m-2"
            />
            <img
              src={hpcl1}
              alt="HPCL"
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-contain m-2"
            />
          </div>
          <div>
            <h5 className="font-Space mt-4 mb-4 text-center font-semibold p-4 text-2xl md:text-4xl lg:text-5xl text-white">
              Our Bronze Sponsors
            </h5>
          </div>
          <div className="w-full flex flex-wrap justify-around">
            <img
              src={bpcl}
              alt="BPCL"
              className="h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 object-contain m-2"
            />
            <img
              src={bob}
              alt="BOB"
              className="h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 object-contain m-2"
            />
          </div>
          <div>
            <h5 className="font-Space mt-4 mb-4 text-center font-semibold p-4 text-2xl md:text-4xl lg:text-5xl text-white">
              Our Associate Sponsors
            </h5>
          </div>
          <div className="w-full flex flex-wrap justify-around">
            <img
              src={academy}
              alt="Academy"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={bajpai}
              alt="Bajpai"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={baskin}
              alt="Baskin"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={cake}
              alt="Cake"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={no_scars}
              alt="No Scars"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={ocafe}
              alt="O Cafe"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={oxineer}
              alt="Oxineer"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={subway}
              alt="Subway"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={vr}
              alt="VR"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={zaika}
              alt="Zaika"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={burger}
              alt="Burger"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={aie}
              alt="AIE"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={cust}
              alt="Cust"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={du}
              alt="DU"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={enhance}
              alt="Enhance"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
            <img
              src={jaiswal}
              alt="Jaiswal"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"
            />
          </div>
          <div className="flex">
          <img
              src={laxmi}
              alt="Jaiswal"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"/>
                <img
              src={punjab}
              alt="Jaiswal"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"/>
                <img
              src={unstop}
              alt="Jaiswal"
              className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain m-2"/>
          
          </div>
        </div>
      </div>
    </>
  );
}
