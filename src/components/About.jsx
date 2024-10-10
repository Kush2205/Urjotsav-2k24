import React from 'react'
import background from "../assets/Images/newbg.jpg";
import rgipt from "../assets/Images/rgiptp.jpg"

export default function About() {


    return (
        <div>

            <div className=' h-full border-[1px] border-[black] mt-20  bg-white bg-opacity-5  '>

                {/* for the heading of About RGIPT */}
                <div className='border-[2px] border-double border-[#36A6BF] '>
                    <h1 className='text-4xl sm:text-8xl text-center text-[#36A6BF]  font-serif ' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>ABOUT RGIPT</h1>
                </div>

                {/* for the rgipt frame */}
                <div>
                    <img src={rgipt} className='w-full h-100px'></img>

                </div>
                {/* content of the rgipt  */}
                <div className='w-[90%] sm:w-[80%] py-4 sm:p-5 mx-auto bg-opacity-10  h-full'>
                    <h1 className= 'w-[90%] sm:w-[85%] px-4 mx-auto text-[15px] text-center font-thin font-serif tracking-tight leading-loose text-[#5CE3F2] mb-5 backdrop-brightness-75' >
                        Rajiv Gandhi Institute of Petroleum Technology (RGIPT) is an Institute of National Importance established under the Rajiv Gandhi Institute of Petroleum Technology Act passed by Parliament in December 2007. RGIPT is an initiative of MoPNG (Ministry of Petroleum & Natural Gas) to cater to the technical & managerial talent needs of the petroleum and energy sector. RGIPT is co-promoted as an energy domain special institute by six leading oil public sector units (ONGC, OIL, GAIL, BPCL, HPCL, IOCL) in association with the oil industry development board (OIDB). It is a leading and prominent engineering institute of the government of India, located at Jais, Amethi. The institute is associated with leading International Universities/Institutions specializing in the domain of Petroleum and Chemical Technology.

                    </h1>

                    <h1 className='w-[90%] sm:w-[85%] px-4 mx-auto text-[15px] text-center font-thin font-serif tracking-tight leading-loose text-[#5CE3F2] mb-5 backdrop-brightness-75' >

                        The prime objective of the institute is to provide world class education training and Research to roll out efficient human resource to meet the growing requirement of the petroleum and energy sector the aspiration is to develop India as a global manpower hub for the entire petroleum and energy sector. Armed with excellence faculty members the institute hardness emerging ideas that culminate in tomorrow's technology that have a flair for evolving technologies.

                    </h1>
                </div>

               

            </div>


            {/* this is for the urjotsav information */}

            <div className='mt-20'>
                <div className='w-[90%] mx-auto rounded-lg border-[2px] border-double shadow-xl border-[#36A6BF]'>
                    <h1 className='text-3xl sm:text-8xl text-center text-[#36A6BF]  font-serif ' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}> ABOUT URJOTSAV</h1>
                </div>

                <div className='px-2 pt-4 sm:p-5 bg-opacity-10 h-full'>
                    <h1 className= 'w-[90%] sm:w-[85%] px-4 mx-auto  text-[15px] mb-5 text-[#5CE3F2] text-center font-thin font-serif tracking-tight leading-loose backdrop-brightness-75 rounded-lg '>
                        Urjotsav, a prestigious national - level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined.
                    </h1>

                    <h1 className='w-[90%] sm:w-[85%] px-4 mx-auto text-[17px] text-center font-thin font-serif tracking-tight leading-loose text-[#5CE3F2] mb-5 backdrop-brightness-75'>

                        The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants.
                    </h1>

                    <h1 className='w-[85%] px-4 mx-auto text-[15px] text-center font-thin font-serif tracking-tight leading-loose text-[#5CE3F2] mb-5 backdrop-brightness-75'>

                        The fest is scheduled to be meticulously organized from the 9th to the 10th of November 2024. It embodies exemplary preparation that undoubtedly equips each participant with the tools needed to effectively shape their career aspirations. Crafted with a keen understanding of the contemporary technical demands of the industry, Urjotsav is poised to make an enduring impact on its esteemed attendees.
                    </h1>

                </div>

                {/* urjotsav content */}
                
            </div>
        </div>
    )
}
