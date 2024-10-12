import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventsCard from './EventsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import EventCategory from './EventCategory1';

export default function Events(props) {


    return (
        <>
           
            <div className='mt-20 pt-10 mb-32'>
            <h1 className='text-white font-bold text-5xl text-center pb-8'>Events</h1>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows={true} className='px-4' >
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard eventName="Coding Events" serialNum="1" eventNumber= "5" imgURL="https://image.benq.com/is/image/benqco/rd-m?$ResponsivePreset$" />
                    <EventsCard eventName="Robotics Events" serialNum="2" imgURL="https://analyticsindiamag.com/wp-content/uploads/2019/05/first-nevada-robotics-robots_MEDIUM.jpg" />
                    <EventsCard eventName="Entrepreneurial Events" serialNum="3" imgURL="https://www.wtcmanila.com.ph/wp-content/uploads/2020/06/Business-Events-For-Post-COVID-Economic-Recovery.jpg" />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard eventName="Quiz and Debate Events" serialNum="4" imgURL="https://img.freepik.com/free-vector/intelligent-young-people-playing-television-quiz-with-host_74855-7560.jpg" />
                    <EventsCard eventName="Fun & General Events" serialNum="5" imgURL="https://teambuilding.com/wp-content/uploads/2022/06/team-building-events-and-activities-.jpg" />
                </div>
                {/* <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div> */}
            </Carousel>
        </div>
          
        </>
    )
}