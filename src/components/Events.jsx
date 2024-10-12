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
                    <EventsCard eventName="Coding Events" serialNum="1" eventNumber= "5" />
                    <EventsCard eventName="Robotics Events" serialNum="2" />
                    <EventsCard eventName="Entrepreneurial Events" serialNum="3" />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard eventName="Engineering & Design Events" serialNum="4"/>
                    <EventsCard eventName="Science & Technology Events" serialNum="5"/>
                    <EventsCard eventName="General Events" serialNum="6"/>
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