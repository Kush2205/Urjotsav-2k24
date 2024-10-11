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
                    <EventsCard eventName="Event 1" serialNum="1" eventNumber= "5" />
                    <EventsCard eventName="Event 2" serialNum="2" />
                    <EventsCard eventName="Event 3" serialNum="3" />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard eventName="Event 4" serialNum="4"/>
                    <EventsCard eventName="Event 5" serialNum="5"/>
                    <EventsCard eventName="Event 6" serialNum="6"/>
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