import React from "react";
import { SparklesPreview } from "../Heading/Sparklesdemo"; // Ensure this import path is correct
import TextRevealByWord from "../textreveal/textreveal"; // Import TextRevealByWord directly for individual content
import { ScrollBasedVelocityDemo } from "../ScrollVelocity.jsx/scrollvelocitydemo";

export function GridBackgroundDemo() {
  return (
    <div className="min-h-screen w-full absolute inset-0 bg-transparent backdrop-blur-md backdrop-opacity-30 relative flex flex-col items-center justify-start">
      {/* Sparkles and Video */}
      <div className="w-full flex flex-col items-center">
        <div className="mt-4">
          <SparklesPreview />
        </div>
        <video
          className="w-[80%] max-w-lg mt-8 "
          src="RgiptGlobe - Made with Clipchamp.mp4" // Verify the video file path
          autoPlay
          muted
          loop
        />
      </div>

      {/* About RGIPT and URJOTSAV section for Desktop */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start px-4 lg:px-16 mt-5 lg:mt-8">
        {/* About RGIPT */}
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start">
          <div className="flex flex-row items-center mt-7 lg:ml-20"> {/* Reduced mb to 1 */}
            <img
              className="w-16"
              src="/Rajiv_Gandhi_Institute_of_Petroleum_Technology-removebg-preview.png" // Replace with correct image path
              alt="RGIPT"
            />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-bold text-4xl lg:text-4xl ml-2"> {/* Reduced ml to 2 */}
              About RGIPT!
            </h1>
          </div>
          <div className="mt-[-55%] lg:mt-[-55%]"> {/* Adjusted mt value to reduce gap */}
            <TextRevealByWord
              text="Rajiv Gandhi Institute of Petroleum Technology (RGIPT) is an Institute of National Importance established under the Rajiv Gandhi Institute of Petroleum Technology Act passed by Parliament in December 2007. RGIPT is an initiative of MoPNG (Ministry of Petroleum & Natural Gas) to cater to the technical & managerial talent needs of the petroleum and energy sector. RGIPT is co-promoted as an energy domain special institute by six leading oil public sector units (ONGC, OIL, GAIL, BPCL, HPCL, IOCL) in association with the oil industry development board (OIDB). It is a leading and prominent engineering institute of the government of India, located at Jais, Amethi. The institute is associated with leading International Universities/Institutions specializing in the domain of Petroleum and Chemical Technology.
The prime objective of the institute is to provide world class education training and Research to roll out efficient human resource to meet the growing requirement of the petroleum and energy sector the aspiration is to develop India as a global manpower hub for the entire petroleum and energy sector. Armed with excellence faculty members the institute hardness emerging ideas that culminate in tomorrow's technology that have a flair for evolving technologies."
            />
          </div>
        </div>

        {/* About URJOTSAV */}
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start mt-[-50%] lg:mt-5"> {/* Changed mt to 5 for better spacing */}
          <div className="flex flex-row items-center ml-5 lg:ml-[20%]"> {/* Reduced mb to 1 */}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold text-4xl lg:text-4xl mr-5 "> {/* Reduced mr to 2 */}
              About URJOTSAV!
            </h1>
            <img
              className="w-16"
              src="/uploadedManual-6540102a82d53_urjotsav_logo-removebg-preview.png" // Replace with correct image path
              alt="URJOTSAV"
            />
          </div>
          <div className="mt-[-55%] lg:mt-[-50%]"> {/* Adjusted mt value to reduce gap */}
            <TextRevealByWord
              text="Urjotsav, a prestigious national - level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined.
The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants.
The fest is scheduled to be meticulously organized from the 9th to the 10th of November 2024. It embodies exemplary preparation that undoubtedly equips each participant with the tools needed to effectively shape their career aspirations. Crafted with a keen understanding of the contemporary technical demands of the industry, Urjotsav is poised to make an enduring impact on its esteemed attendees."
            />
          </div>
         
        </div>
      </div>
      <div className="relative w-full mb-[20%] lg:mb-[10%]"> {/* Added mt for spacing */}
           <ScrollBasedVelocityDemo />
          </div>
    </div>
  );
}
