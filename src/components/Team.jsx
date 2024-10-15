import React from 'react';
// Replace with your images


const teamMembers = [
  { id: 1,name:'Anish Kumar', role: 'Event Management Team', position:'Head',mail:'22ce3008@rgipt.ac.in', imgSrc:'/heads/Event&Competition/anish.jpeg' },
  // { id: 2,name:'name', role: 'Event Management Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 3,name:'name', role: 'Event Management Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 4,name:'name', role: 'Event Management Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 5,name:'', role: 'Event Management Team',position:'',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  { id: 6,name:'Ayush Tripathi', role: 'Technical Team',position:'Head',mail:'22cs3021@rgipt.ac.in', imgSrc: 'heads/Technical/Ayush.jpg' },
  { id: 7,name:'Kushagra Kumar', role: 'Technical Team',position:'Coordinator',mail:'23cs3037@rgipt.ac.in', imgSrc: 'heads/Technical/Kushagra.jpg' },
  { id: 8,name:'Anshumaan Tanwar', role: 'Technical Team',position:'Coordinator',mail:'23mc3009@rgipt.ac.in', imgSrc: 'heads/Technical/Anshumaan.png' },
  { id: 9,name:'Aditya Narayan', role: 'Technical Team',position:'Coordinator',mail:'23cs2007@rgipt.ac.in', imgSrc: 'heads/Technical/Aditya.jpg' },
  { id: 10,name:'Mayank Kumar', role: 'Technical Team',position:'Coordinator',mail:'23cs3038@rgipt.ac.in', imgSrc: 'heads/Technical/Mayank.png' },
  { id: 11,name:'Sayan Mukhopadhyay', role: 'Hospitality Team',position:'Head',mail:'22cs2021@rgipt.ac.in', imgSrc: 'heads/Hospitality/sayan.jpeg' },
  // { id: 12,name:'name', role: 'Hospitality Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 13,name:'name', role: 'Hospitality Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 14,name:'name', role: 'Hospitality Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 15,name:'name', role: 'Hospitality Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  { id: 16,name:'Arnav Sao', role: 'Designing Team',position:'Head',mail:'22it3009@rgipt.ac.in', imgSrc: 'heads/Designing/ArnavSao_DesigningHead_22it3009@rgipt.ac.in.png' },
  { id: 17,name:'Rishabh Kumar', role: 'Designing Team',position:'Head',mail:'22cs3047@rgipt.ac.in', imgSrc: 'heads/Designing/Rishabh_Kumar_Designing _22cs3047.jpg' },
  { id: 21,name:'Anubhuti Shriyas', role: 'Editorial Team',position:'Head',mail:'22ce3011@rgipt.ac.in', imgSrc: 'heads/Editorial/anubhuti.jpeg' },
  // { id: 22,name:'name', role: 'Editorial Team',position:'Head',mail:'mail',  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 23,name:'name', role: 'Editorial Team',position:'Head',mail:'mail',  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 24,name:'name', role: 'Editorial Team',position:'Head',mail:'mail',  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 25,name:'name', role: 'Editorial Team',position:'Head',mail:'mail',  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  // { id: 26,name:'name', role: 'Editorial Team',position:'Head',mail:'mail', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLb3TY72rHh4VSJUR8UGa83p3ABg3FRBNrw&s' },
  { id: 27,name:'Maana Ajmera', role: 'Technical Team',position:'Coordinator',mail:'23cs2028@rgipt.ac.in', imgSrc: 'heads/Technical/Maana1.jpg' },
  
  { id: 27,name:'Shubh Raheja', role: 'Sponsorship Team',position:'Head',mail:'22cs2031@rgipt.ac.in', imgSrc: 'heads/Sponsorship/shubh.jpg' },
  { id: 27,name:'Vijit Singh', role: 'Sponsorship Team',position:'Head',mail:'22ec3064@rgipt.ac.in', imgSrc: 'heads/Sponsorship/vijit.jpeg' },
  { id: 27,name:'Nishant Nischal', role: 'Sponsorship Team',position:'Head',mail:'22cs3042@rgipt.ac.in', imgSrc: 'heads/Sponsorship/Nishant Nischal_Sponsership Head_22CS3042.jpg' },
  { id: 27,name:'Anmol Shrivastava', role: 'Sponsorship Team',position:'Head',mail:'22ce3010@rgipt.ac.in', imgSrc: 'heads/Sponsorship/Anmol_Shrivastava.jpg' },
  { id: 27,name:'Himanshu Jayant', role: 'Creativity Team',position:'Head',mail:'22it3015@rgipt.ac.in', imgSrc: 'heads/Creativity/HIMANSHU_JAYANT.jpeg' },
  { id: 27,name:'Yash Verma', role: 'Creativity Team',position:'Head',mail:'22it3059@rgipt.ac.in', imgSrc: 'heads/Creativity/IMG_20240610_211657.jpg' },
  { id: 27,name:'Prince Kumar', role: 'Logistics Team',position:'Head',mail:'22ce3054@rgipt.ac.in', imgSrc: 'heads/Logistics/Prince.jpg' },
  { id: 27,name:'Ritik Raushan', role: 'Logistics Team',position:'Head',mail:'22ce3044@rgipt.ac.in', imgSrc: 'heads/Logistics/Ritik.jpg' },
  { id: 27,name:'Anshu Priya', role: 'Outreach Team',position:'Head',mail:'22cs2020@rgipt.ac.in', imgSrc: 'heads/Outreach/Anshu.jpg' },
  { id: 27,name:'Aditya Kashyap', role: 'Outreach Team',position:'Head',mail:'22ce3005@rgipt.ac.in', imgSrc: 'heads/Outreach/arham.jpg' },
  // { id: 27,name:'Aditya Kumar', role: 'Photos and Videography Team',position:'Head',mail:'abc@rgipt.ac.in', imgSrc: 'heads/Photo&Videography/Aditya_Kumar.jpg' },
  { id: 27,name:'Ujjwal Kumar', role: 'Photos and Videography Team',position:'Head',mail:'22cs3064@rgipt.ac.in', imgSrc: 'heads/Photo&Videography/image.png' },
  
  { id: 27,name:'Ankur Kumar', role: 'Fest Coordinators',position:'Head',mail:'22cs3073@rgipt.ac.in', imgSrc: 'heads/fest-coordinator/ankur.jpg' },
  { id: 27,name:'Atul Panwar', role: 'Fest Coordinators',position:'Head',mail:'22it3012@rgipt.ac.in', imgSrc: 'heads/fest-coordinator/atul.jpg' },

  { id: 27,name:'Khushi Kalra', role: 'Event Organizers',position:'Head',mail:'22cs3035@rgipt.ac.in', imgSrc: 'heads/eventorganizers/khushi.jpg' },
  { id: 27,name:'Rishika Srivastava', role: 'Event Organizers',position:'Head',mail:'22it3039@rgipt.ac.in', imgSrc: 'heads/eventorganizers/rishika.jpg' },
  { id: 27,name:'Aditya Kumar', role: 'Event Organizers',position:'Head',mail:'22it3002@rgipt.ac.in', imgSrc: 'heads/eventorganizers/aditya.jpg' },
  { id: 27,name:'Arnav Sao', role: 'Event Organizers',position:'Head',mail:'22it3009@rgipt.ac.in', imgSrc: 'heads/eventorganizers/arnav.jpg' },

  { id: 27,name:'Aryan Kumar Singh', role: 'Social Media Team',position:'Head',mail:'22it3010@rgipt.ac.in', imgSrc: 'heads/socialmedia/aryan.jpg' },

];
const Team = () => {
  return (
    <div className=" text-white z-[0] bg-black bg-opacity-60 min-h-screen flex flex-col justify-center items-center">
<div className="w-[90%] mx-auto mt-4 mb-8">
  <h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
    Fest Coordinators
  </h1>
  {/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[40px] tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
    HEADS
  </h1> */}

  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
    {teamMembers
      .filter((member) => member.role === "Fest Coordinators")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>

          <div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Event Organizers
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[40px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20 ">
  HEADS
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Event Organizers")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
      <div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Sponsorship Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20 ">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Sponsorship Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold  break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Event Management and Logistics Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Event Management Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Technical Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-20 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Technical Team" && member.position === "Head")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
  {/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  COORDINATORS
</h1> */}

  {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
    .filter((member) => member.role === "Technical Team" && member.position === "Coordinator")
    .map((member, index, array) => {
      // Check for the last row where items are fewer than 4
      const lastRowIndex = array.length % 4;
      const isLastRow = index >= array.length - lastRowIndex && lastRowIndex !== 0;

      return (
        <div
          key={member.id}
          className={`relative flex flex-col items-center group transition-all duration-500 ease-in-out 
            ${isLastRow ? 'col-span-full flex justify-center' : ''}`}
        >
          <div
            className={`relative flex items-center transition-all duration-500 ease-in-out group-hover:-translate-x-[4rem] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}
          >
            <div className="z-10">
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            <div
              className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform -translate-x-[4rem] sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 opacity-0 scale-0 
              group-hover:translate-x-[3rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}
            >
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform -translate-x-8 sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className="ml-[3rem]">{member.name}</div>
                  <div className="ml-[3rem] text-[1rem]">{member.position}</div>
                  <div className="ml-[3rem] text-[1rem]">{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    })}
</div> 
*/}

</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Hospitality Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Hospitality Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>

<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Designing Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Designing Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>


      
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Editorial Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Editorial Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Creativity Team
</h1>
<h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1>


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Creativity Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
Social Media Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Social Media Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              scale-100 opacity-100
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Outreach Team
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
  {teamMembers
      .filter((member) => member.role === "Outreach Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>
<div className="w-[90%] mx-auto mt-4 mb-8">
<h1 className="text-center text-white text-[42px] sm:text-[58px] lg:text-[78px] font-[Jost] font-semibold tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[220px] flex-col justify-center shrink-0 mt-8 mb-0">
  Photos and Videography 
</h1>
{/* <h1 className="font-Megrim text-center text-white text-[35px] sm:text-[30px] lg:text-[50px]  tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] break-words flex h-[140px] sm:h-[180px] lg:h-[10px] flex-col justify-center shrink-0 mt-0 mb-20">
  HEAD
</h1> */}


  {/* Grid layout for team members */}
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 sm:gap-y-12 gap-8 sm:gap-6 justify-evenly mt-10 mb-12 transition-all duration-500 ease-in-out">
      {teamMembers
      .filter((member) => member.role === "Photos and Videography Team")
      .map((member, index, array) => (
        <div
          key={member.id}
          className="relative flex flex-col items-center justify-center group transition-all duration-500 ease-in-out"
        >
          {/* Image container with circle transition */}
          <div className={`relative flex items-center transition-all duration-500 ease-in-out -translate-x-[6rem] sm:translate-x-[0] sm:group-hover:-translate-x-[4rem] lg:group-hover:-translate-x-[8rem]`}>
            <div className="z-10">
              {/* Image with hover effect */}
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full transform transition-transform duration-[500ms] ease-in-out scale-[1.2] sm:scale-[1] sm:group-hover:scale-[1.2]"
                src={member.imgSrc}
                alt={`Member ${member.id}`}
              />
            </div>

            {/* Hover div with background image */}
            <div className={`min-w-[200px] absolute z-0 top-1/2 left-0 transform  sm:-translate-x-[5rem] lg:-translate-x-[5rem] -translate-y-1/2 
              ${/* Default visible on mobile screens */ 'scale-100 opacity-100'} 
              sm:opacity-0 sm:scale-0 
              translate-x-[4rem] sm:group-hover:translate-x-[7rem] lg:group-hover:translate-x-[5rem] 
              group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-[500ms] ease-in-out ml-[-1.3rem]`}>
              <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211113/pngtree-purple-pink-dark-cloud-night-sky-full-with-stars-galaxy-design-image_915937.png')] sm:pt-0 sm:pr-[2.7rem] bg-cover bg-center text-white shadow-lg flex items-center justify-center min-h-[3rem] sm:min-h-[4rem] min-w-[230px] pr-[2rem] sm:min-w-[100px] group-hover:min-h-[3rem] sm:group-hover:min-h-[4rem] group-hover:h-auto group-hover:w-auto rounded-br-full rounded-tr-full group-hover:rounded-tl-none group-hover:rounded-bl-none transition-all duration-[500ms] ease-in-out">
                <h3 className="text-[1rem] sm:text-[1.5rem] pt-2 pb-2 font-semibold text-white whitespace-nowrap opacity-100 group-hover:opacity-100 transition-opacity duration-[500ms] delay-[500ms] ml-[1rem] sm:ml-[2rem] transform sm:translate-x-0 group-hover:translate-x-0 group-hover:delay-[200ms] ease-in-out">
                  <div className='ml-[3rem]'>{member.name}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.position}</div>
                  <div className='ml-[3rem] text-[1rem]'>{member.mail}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>

    </div>
  );
}

export default Team;