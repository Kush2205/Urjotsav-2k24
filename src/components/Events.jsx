import React from "react";
import EventsCard from "./EventsCard";
import background from "../assets/Images/Mainbg.jpg";

export default function Events(props) {
  return (
    <>
      <div className="mt-20 pt-10 mb-32 p-5">
        <h1 className="text-white font-bold text-5xl text-center pb-8">
          Events
        </h1>

        {/* Grid layout for the Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-20 py-8 justify-items-center">
          <EventsCard
            eventName="Coding Events"
            serialNum="1"
            eventNumber="5"
            imgURL="https://image.benq.com/is/image/benqco/rd-m?$ResponsivePreset$"
          />
          <EventsCard
            eventName="Robotics Events"
            serialNum="2"
            imgURL="https://analyticsindiamag.com/wp-content/uploads/2019/05/first-nevada-robotics-robots_MEDIUM.jpg"
          />
          <EventsCard
            eventName="Entrepreneurial Events"
            serialNum="3"
            imgURL="https://www.wtcmanila.com.ph/wp-content/uploads/2020/06/Business-Events-For-Post-COVID-Economic-Recovery.jpg"
          />
          <EventsCard
            eventName="Quiz and Debate Events"
            serialNum="4"
            imgURL="https://img.freepik.com/free-vector/intelligent-young-people-playing-television-quiz-with-host_74855-7560.jpg"
          />
          <EventsCard
            eventName="Fun & General Events"
            serialNum="5"
            imgURL="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg"
          />
        </div>
      </div>
    </>
  );
}
