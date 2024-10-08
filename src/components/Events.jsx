import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventsCard from './EventsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

export default function Events(props) {
    const navigate = useNavigate();

    const handleEventClick = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    return (
        <>
        <h1 className='font-Orbitron w-full text-center text-7xl text-white mt-24 italic underline'>EVENTS</h1>
            <div className=' h-[100vh] mt-16'>
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows={true}>
                    <div className="flex justify-around mx-10 gap-x-32">
                        <EventsCard onClick={() => handleEventClick(1)} />
                        <EventsCard onClick={() => handleEventClick(2)} />
                        <EventsCard onClick={() => handleEventClick(3)} />
                    </div>
                    <div className="flex justify-around mx-10 gap-x-32">
                        <EventsCard onClick={() => handleEventClick(4)} />
                        <EventsCard onClick={() => handleEventClick(5)} />
                        <EventsCard onClick={() => handleEventClick(6)} />
                    </div>
                    <div className="flex justify-around mx-10 gap-x-32">
                        <EventsCard onClick={() => handleEventClick(7)} />
                        <EventsCard onClick={() => handleEventClick(8)} />
                        <EventsCard onClick={() => handleEventClick(9)} />
                    </div>
                </Carousel>
            </div>
        </>
    );
}