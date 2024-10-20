import React from 'react';
import bgv from '../assets/bgvid.mp4';
import Team from '../components/wordfromteam';
import AboutU from '../components/About_urjotsav';
import Text from '../components/urjotsav_text';
import Speakers from '../components/Speakers';
import Theme from '../components/theme';
import Sponsors1 from './Sponsers1';

export default function Home(props) {
    return (
        <>
            <div className='relative w-full h-[130vh] overflow-hidden'>
                <video
                    src={bgv}
                    autoPlay
                    loop
                    muted
                    className='absolute inset-0 object-cover w-full h-full z-10'
                    style={{ playbackRate: 0.4 }}
                ></video>
                
                <div id='home' className='absolute inset-0  items-start pl-[2%] z-20'>
                    {/* <h1 className='font-Megrim text-8xl mb-3 text-zinc-500  font-bold'>Urjotsav</h1>
                 */}
                    <Text />
                </div>


            </div>
            <div className=' absolute  w-full h-[40px] bg-black blur-lg shadow-2xl z-20 translate-y-[-20px]'></div>
            <AboutU/>
            <Team />
            <Theme/>
            <div>

                <Speakers />

            </div>
            <div id='sponsors'>
                <Sponsors1 />
            </div>
           
        </>
    );
}
