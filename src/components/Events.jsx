import React from 'react';
import EventsCard from './EventsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import EventCategory from './EventCategory';

export default function Events(props) {
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
          
          <EventCategory/>
         */}
    </>)
}