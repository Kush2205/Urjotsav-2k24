import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventsCard from './EventsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import EventCategory from './EventCategory';
export default function Events(props) {
    const navigate = useNavigate();

    const handleEventClick = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    return (
        <>
           
            <div className='mt-20 pt-10 mb-32'>
            <h1 className='text-white font-bold text-5xl text-center pb-8'>Events</h1>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows={true} className='px-4' >
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center md:mx-10 lg:gap-x-20 py-8">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
            </Carousel>
        </div>
          {/* <EventCategory/> */}
        </>
    )
}