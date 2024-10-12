import React from 'react';
import EventsCard from './EventsCard';
import sandeep from "../assets/sandeep.jpg";
import sudhir from "../assets/sudhir.jpg";
import vnarayan from "../assets/vnarayan.jpg";

function Speakers() {
    return (
        <>
            <div>
                <h3 className="font-Space text-center font-semibold text-4xl mb-20 md:text-6xl lg:text-8xl text-white ">Past Speakers</h3>
            </div>
            <div className='md:flex md:flex-row gap-8 md:gap-2 justify-evenly items-center flex flex-col pb-20 md:pb-8'>
                <EventsCard 
                    serialNum={1} 
                    eventNumber={1} 
                    eventDesc={<>Mr Sandeep Jain<br /> Founder and CEO of GEEK FOR GEEKS</>} 
                    image={sandeep} 
                />
                <EventsCard 
                    serialNum={2} 
                    eventNumber={2} 
                    eventDesc={<>Mr Sudhir Aggarwal<br />  Director and Faculty at Wadhwani Foundation and ex Deloitte</>}  
                    image={sudhir} 
                />
                <EventsCard 
                    serialNum={3} 
                    eventNumber={3} 
                    eventDesc={`V Narayan is  ISRO director`} 
                    image={vnarayan}
                />
            </div>
        </>
    );
}

export default Speakers;
