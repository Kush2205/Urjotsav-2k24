import React from "react";
import EventsCard from "./EventsCard";
import sudheer from "../assets/sudheer.png";
import ashish from "../assets/ashish.jpeg";

import rajkumar from "../assets/rajkumar.jpeg";
import suman from "../assets/suman.jpeg";
import suraj from "../assets/suraj.jpg";
import nikhil from "../assets/nikhil.jpeg";

function Speakers() {
  return (
    <>
      <div>
        <h3 className="font-Space text-center font-semibold text-4xl mb-20 md:text-6xl lg:text-8xl text-white">
          Our Speakers
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center md:px-4 pb-20 md:pb-8">
        <div className="flex justify-center">
          <EventsCard
            eventName={`Dr. Sudheer Kumar`}
            Desc={`ex-Director, Capacity Building & Public Outreach, ISRO HQ`}
            imgURL={sudheer}
          />
        </div>
        <div className="flex justify-center">
          <EventsCard
            eventName={`Mr Ashish Tripathi`}
            Desc={`Senior Director , Global Engineering Service , Infosys`}
            imgURL={ashish}
          />
        </div>
        <div className="flex justify-center">
          <EventsCard
            eventName={`Prof. Rajkumar Pant`}
            Desc={`Department of Aerospace Engg, IIT Bombay . More than three decades of teaching and research in his field.`}
            imgURL={rajkumar}
          />
        </div>
        {/* <div className="lg:flex lg:flex-row md:ml-[20%] lg:ml-[70%] lg:gap-[100%]"> */}

        <div className="flex justify-center">
          <EventsCard
            eventName={`Dr. Suman Jana`}
            Desc={`University of Columbia , Dept. of CSE`}
            imgURL={suman}
          />
        </div>
        <div className="flex justify-center">
          <EventsCard
            eventName={`IAS Suraj Patel`}
            Desc={`CDO Amethi , ex-IPS , ex-IRS`}
            imgURL={suraj}
          />
        </div>
        <div className="flex justify-center">
          <EventsCard
            eventName={`Mr. Nikhil Bhatnagar`}
            Desc={`CEO and Founder , SparkVR`}
            imgURL={nikhil}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Speakers;
