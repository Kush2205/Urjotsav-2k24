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
                <h3 className="font-Space text-center font-semibold text-4xl mb-20 md:text-6xl lg:text-8xl text-white">
                    Past Speakers
                </h3>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center md:px-4 pb-20 md:pb-8'>
                <div className="flex justify-center">
                    <EventsCard 
                        eventName={`Mr Sandeep Jain`} 
                        Desc={`Founder and CEO of Geeks for Geeks`}
                        imgURL={sandeep} 
                    />
                </div>
                <div className="flex justify-center">
                    <EventsCard 
                        eventName={`Mr Sudhir Aggarwal`}  
                        Desc={`Director and Faculty - Digital Transformation - Wadhwani Foundation, ex Deloitte`}
                        imgURL={sudhir} 
                    />
                </div>
                <div className="flex justify-center">
                    <EventsCard 
                        eventName={`Dr Ankush Sabharwal`} 
                        Desc={`Founder, Corover & BharatGPT`}
                        imgURL={ankush}
                    />
                </div>
                <div className='lg:flex lg:flex-row md:ml-[20%] lg:ml-[70%] lg:gap-[100%]'>
                    <div className="flex justify-center">
                    <EventsCard 
                        eventName={`Dr V Narayananan`} 
                        Desc={`Director of the Liquid Propulsion Systems Centre (LPSC) of ISRO`}
                        imgURL={vnarayan}
                    />
                </div>
                <div className="flex justify-center">
                    <EventsCard 
                        eventName={`Mr Pankaj Sharma`} 
                        Desc={`Nasscom Business`}
                        imgURL={pankaj}
                    />
                </div></div>
                
            </div>
        </>
    );
}

export default Speakers;
