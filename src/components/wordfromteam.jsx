import React from 'react';

function WordFromTeam() {
  return (
    <>
      <h2 className='text-white text-4xl md:text-5xl lg:text-6xl font-Space text-center mt-[10vh] md:mt-[15vh]  lg:mt-[20vh]'>
        Word from our team
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center  gap-4 md:gap-[100px]  py-8'>
        <div className='w-full md:w-[45vw] lg:w-[35vw] h-[30vh] md:h-[40vh] lg:h-[50vh]'>
          <iframe
            className='md:w-full md:h-full w-[75%] h-[200px] mx-[10%] border-none'
            src="https://www.youtube.com/embed/Vo8huF43CB4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='w-full md:w-[50vw]  h-auto md:h-[50vh] lg:h-[70vh] text-wrap text-center text-lg font-semibold  md:text-xl lg:text-2xl font-Rajdhani text-white flex items-center justify-center  px-4 md:px-0'>
       
        Hello and thank you for visiting the official website of RGIPT's annual techfest, URJOTSAV, now in its [EDITION] year! The students here have been working tirelessly over the last several months to ensure that URJOTSAV 2024–25 is an experience you will never forget. With so many exciting things happening during this year's edition, it's sure to be one for the record books. Right here on this page is where your experience starts! Make sure you don't miss a second of the innovation and excitement that URJOTSAV'24 has to offer by exploring all the accessible possibilities        </div>
      </div>
    </>
  );
}

export default WordFromTeam;
