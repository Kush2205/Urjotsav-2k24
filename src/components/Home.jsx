import React from 'react';
import bgv from '../assets/bgvid.mp4';
import Sponsors from '../components/sponsors';
import Team from '../components/wordfromteam';
import Text from '../components/urjotsav_text';
import Speakers from '../components/Speakers';
import Theme from '../components/theme';


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

                <div className='absolute inset-0  items-start pl-[2%] z-20'>
                    {/* <h1 className='font-Megrim text-8xl mb-3 text-zinc-500  font-bold'>Urjotsav</h1>
                 */}
                    <Text />
                </div>


            </div>
            <div className=' absolute  w-full h-[40px] bg-black blur-lg shadow-2xl z-20 translate-y-[-20px]'></div>

            <Team />
            <Theme/>

            <div className='md:h-[110vh] md:pt-0 pt-[200px] h-auto z-20 w-full'>
                <Sponsors />
            </div>

            <div className='h-auto md:pt-0 pt-[100px] md:h-[130vh] z-20 w-full'>

                <Speakers />
            </div>

        </>
    );
}
