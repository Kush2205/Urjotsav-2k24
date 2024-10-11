import React from 'react';

function Theme() {
  return (
    <>
      <h2 className='text-white text-4xl md:text-5xl lg:text-6xl font-Space text-center mt-[10vh] md:mt-[15vh]  lg:mt-[20vh]'>
        THEME
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center  gap-4 md:gap-[100px]  py-8'>
        <div className='w-full md:w-[45vw] lg:w-[35vw] h-[30vh] md:h-[40vh] lg:h-[50vh]'>
          <iframe
            className='md:w-full md:h-full w-[75%] h-[200px] mx-[10%] border-none'
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='w-full md:w-[50vw]  h-auto md:h-[50vh] lg:h-[70vh] text-wrap text-center text-lg font-semibold  md:text-xl lg:text-2xl font-Rajdhani text-white flex items-center justify-center  px-4 md:px-0'>
       
        The theme "Space and Astronomy" explores the vastness of the universe, celestial bodies, and cosmic phenomena. It delves into the mysteries of planets, stars, galaxies, and black holes, inspiring curiosity about the origins and future of the cosmos. </div>
      </div>
    </>
  );
}

export default Theme;
