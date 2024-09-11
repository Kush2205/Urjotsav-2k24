import React from 'react';
import bgv from '../assets/bgvid.mp4';
import Sponsors from '../components/sponsors';
import Team from '../components/wordfromteam';

export default function Home(props) {
    return (
        <>
        <div className='relative w-full h-screen overflow-hidden'>
            <video
                src={bgv}
                autoPlay
                loop
                muted
                className='absolute inset-0 object-cover w-full h-full z-10'
            ></video>

            <div className='absolute inset-0 flex flex-col items-center justify-center gap-y-8  pl-[2%] z-20'>
                <h1 className='font-Megrim text-8xl mb-3 text-zinc-500  font-bold'>Urjotsav</h1>
                <h3 className='font-Jost text-white text-3xl'>Embark on a cosmic journey and unlock the secrets of the universe</h3>
                <button className='rounded-xl bg-blue-800 p-3 mt-4 transition-all text-white hover:bg-white hover:text-black'> Register Now</button>
            </div>

          
        </div>
        <div className='absolute  w-full h-[70px] bg-black blur-md shadow-2xl z-20 translate-y-[-20px]'></div>
        
            <Team/>
        
        <div className='h-[100vh] w-full'>
            <Sponsors/>
        </div>
        </>
    );
}
