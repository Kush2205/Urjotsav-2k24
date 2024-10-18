import React from 'react';
import rgipt from '../assets/Images/rgiptp.jpg';
import { BackgroundBeams } from "./ui/BackgroundBeamComponent/bgforabt";
import urjotsav from '../assets/logo.jpg';

const GlassCard = () => {
  return (
    <>
      <div className='fixed inset-0 z-[-1]'>
        <BackgroundBeams />
      </div>

      <p className='text-center font-Space text-white underline mt-[15vh] text-5xl'>About RGIPT</p>

      <div className="flex justify-center items-center">
        <div className="glass-card w-[90vw] md:w-[70vw] min-h-[50vh] p-6 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex flex-col items-center mt-6">
          {/* Image Section */}
          <div className="w-[90%] h-auto flex justify-center items-center mb-4">
            <img
              src={rgipt}
              alt="College Campus"
              className="w-full h-full object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Text Section */}
          <div className="w-[95%] text-white text-center">
            <p className="text-lg font-Rajdhani mt-4">
              Rajiv Gandhi Institute of Petroleum Technology (RGIPT) is an Institute of National Importance established under the Rajiv Gandhi Institute of Petroleum Technology Act passed by Parliament in December 2007. RGIPT is an initiative of MoPNG (Ministry of Petroleum & Natural Gas) to cater to the technical & managerial talent needs of the petroleum and energy sector. RGIPT is co-promoted as an energy domain special institute by six leading oil public sector units (ONGC, OIL, GAIL, BPCL, HPCL, IOCL) in association with the oil industry development board (OIDB). It is a leading and prominent engineering institute of the government of India, located at Jais, Amethi. The institute is associated with leading International Universities/Institutions specializing in the domain of Petroleum and Chemical Technology.
            </p>
            <p className="text-lg font-Rajdhani mt-4">
              The prime objective of the institute is to provide world class education training and Research to roll out efficient human resource to meet the growing requirement of the petroleum and energy sector the aspiration is to develop India as a global manpower hub for the entire petroleum and energy sector. Armed with excellence faculty members the institute hardness emerging ideas that culminate in tomorrow's technology that have a flair for evolving technologies.
            </p>
          </div>
        </div>
      </div>

      <p className='text-center font-Space text-white underline mt-[10vh] text-5xl'>About Urjotsav</p>

      <div className="flex justify-center items-center mt-5 mb-12">
        <div className="glass-card w-[90vw] md:w-[70vw] min-h-[50vh] p-6 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex flex-col md:flex-row items-center">
          {/* Image Section (will be on top in small screens) */}
          <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
            <img
              src={urjotsav}
              alt="Example"
              className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 p-4 text-white">
            <p className="text-lg font-Rajdhani">
              Urjotsav, a prestigious national - level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined.
            </p>
            <p className="text-lg font-Rajdhani mt-4">
              The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants.
            </p>
            <p className="text-lg font-Rajdhani mt-4">
              The fest is scheduled to be meticulously organized from the 9th to the 10th of November 2024. It embodies exemplary preparation that undoubtedly equips each participant with the tools needed to effectively shape their career aspirations. Crafted with a keen understanding of the contemporary technical demands of the industry, Urjotsav is poised to make an enduring impact on its esteemed attendees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassCard;
