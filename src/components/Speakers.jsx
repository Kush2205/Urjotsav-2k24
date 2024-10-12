import React from 'react';
import EventsCard from './EventsCard';
import sandeep from "../assets/sandeep.jpg";
import sudhir from "../assets/sudhir.jpg";
import vnarayan from "../assets/vnarayan.jpg";
import ankush from "../assets/ankush.jpg";
import pankaj from "../assets/pankaj.jpg";

function Speakers() {
    return (
        <>
            <div>
                <h3 className="font-Space text-center font-semibold text-4xl mb-20 md:text-6xl lg:text-8xl text-white ">
                    Past Speakers
                </h3>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pb-20 md:pb-8'>
                <EventsCard 
                    serialNum={1} 
                    eventNumber={1} 
                    eventName={`Mr Sandeep Jain`} 
                    Desc={`Founder and CEO of Geeks for Geeks`}
                    imgURL={sandeep} 
                />
                <EventsCard 
                    serialNum={2} 
                    eventNumber={2} 
                    eventName={`Mr Sudhir Aggarwal`}  
                    Desc={`Director and Faculty - Digital Transformation - Wadhwani Foundation , ex Deloitte`}
                    imgURL={sudhir} 
                />
                <EventsCard 
                    serialNum={3} 
                    eventNumber={3} 
                    eventName={`Dr Ankush Sabharwal`} 
                    Desc={`Founder, Corover & BharatGPT`}
                    imgURL={ankush}
                />
                <EventsCard 
                    serialNum={4} 
                    eventNumber={4} 
                    eventName={`Dr V Narayananan`} 
                    Desc={`Director of the Liquid Propulsion Systems Centre (LPSC) of ISRO`}
                    imgURL={vnarayan}
                />
                <EventsCard 
                    serialNum={5} 
                    eventNumber={5} 
                    eventName={`Mr Pankaj Sharma`} 
                    Desc={`Nasscom Business`}
                    imgURL={pankaj}
                />
            </div>
        </>
    );
}

export default Speakers;
