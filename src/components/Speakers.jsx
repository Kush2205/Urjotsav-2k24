import React from 'react'
import EventsCard from './EventsCard';
import sandeep from "../assets/sandeep.jpg"
import sudhir from "../assets/sudhir.jpg"
import vnarayan from "../assets/vnarayan.jpg"




function Speakers() {
  return (
    <>
    <div>
    <h3 className="font-Space text-center font-semibold text-4xl mb-20 md:text-6xl lg:text-8xl text-white ">Past Speakers</h3>
    </div>
    <div className=' md:flex md:flex-row flex flex-col'>
        <EventsCard image={sandeep} text={`Sandeep Jain is founder and ceo of GEEK FOR GEEKS`} sname={`Sandeep Jain`}/>
        <EventsCard image={sudhir} text={`Sudhir Aggarwal is... idk who he is`} sname={`sudhir ...`}/>
        <EventsCard image={vnarayan} text={`V Narayan is some ISRO director`} sname={`V Narayan`}/>

    </div>
    </>
  )
}

export default Speakers