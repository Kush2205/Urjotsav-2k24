import React from 'react'
import EventsCard from './EventsCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import EventCategory from './EventCategory';

function hover_card() {
  return (
    <div>
         <Carousel showThumbs={false} infiniteLoop useKeyboardArrows={true} >
                <div className="flex justify-around mx-10 gap-x-32 ">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
            </Carousel>
    </div>
  )
}

export default hover_card