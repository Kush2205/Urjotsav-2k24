import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventsCard from './EventsCard';
import EventCategory from './EventCategory';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Events(props) {
    const navigate = useNavigate();

    const handleEventClick = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    return (
        <>
           
            {/* <div className='mt-20'>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows={true} >
                <div className="flex justify-around mx-10 gap-x-32 ">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
                <div className="flex justify-around mx-10 gap-x-32">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
                <div className="flex justify-around mx-10 gap-x-32">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
            </Carousel>
        </div>
          
          
         */}
         <EventCategory/>
    </>)
}