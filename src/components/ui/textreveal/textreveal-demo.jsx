import React from "react";
import TextRevealByWord from "./textreveal"; 

const TextRevealDemo = () => {
  return (
    <div className="z-10 flex flex-col md:flex-row ml-[5%] md:h-auto w-[90%] md:w-[80%] items-center justify-center rounded-lg mt-[5%]">
      {/* First text reveal block for RGIPT */}
      <div className="w-full md:w-[70%] ml-0 md:ml-[10%] mb-6 md:mb-0">
        <p>
          <TextRevealByWord text="Rajiv Gandhi Institute of Petroleum Technology (RGIPT) is an Institute of National Importance established under the Rajiv Gandhi Institute of Petroleum Technology Act passed by Parliament in December 2007. RGIPT is an initiative of MoPNG (Ministry of Petroleum & Natural Gas) to cater to the technical & managerial talent needs of the petroleum and energy sector. RGIPT is co-promoted as an energy domain special institute by six leading oil public sector units (ONGC, OIL, GAIL, BPCL, HPCL, IOCL) in association with the oil industry development board (OIDB). It is a leading and prominent engineering institute of the government of India, located at Jais, Amethi. The institute is associated with leading International Universities/Institutions specializing in the domain of Petroleum and Chemical Technology. The prime objective of the institute is to provide world-class education, training, and research to roll out efficient human resources to meet the growing requirements of the petroleum and energy sector. The aspiration is to develop India as a global manpower hub for the entire petroleum and energy sector. Armed with excellent faculty members, the institute harnesses emerging ideas that culminate in tomorrow's technology, which has a flair for evolving technologies." />
        </p>
      </div>

      {/* Second text reveal block for Urjotsav */}
      <div className="w-full md:w-[70%] ml-0 md:ml-[10%]">
        <p>
          <TextRevealByWord text="Urjotsav, a prestigious national-level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined. The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants. The fest is scheduled to be meticulously organized from the 9th to the 10th of November 2024. It embodies exemplary preparation that undoubtedly equips each participant with the tools needed to effectively shape their career aspirations. Crafted with a keen understanding of the contemporary technical demands of the industry, Urjotsav is poised to make an enduring impact on its esteemed attendees." />
        </p>
      </div>
    </div>
  );
};

export default TextRevealDemo;
