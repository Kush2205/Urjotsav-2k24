import React, { useState } from 'react';
import { gsap } from 'gsap';
import image from '../assets/Images/Mainbg.jpg';
import border from '../assets/Images/Group 22.svg'; // Ensure the correct path to your SVG file
import background from '../assets/Images/Rectangle 115.svg'
export default function EventCategory(props) {
    const [bgGradient, setBgGradient] = useState(false);

    const change = () => {
        setBgGradient(!bgGradient);
        gsap.to(".background", {
            background: bgGradient ? 'linear-gradient(to right, blue, green)' : 'linear-gradient(to right, red, yellow)',
            duration: 1.5,
            ease: "power2.inOut"
        });
    }

    return (
        <>
            <div className='flex w-full h-[100vh] bg-blue-950 background'>
                <div className='h-full w-[45%] flex items-center justify-center'>
                    <div className='relative w-[400px] h-[400px]'>
                        <div className='absolute scale-[1.2] inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${border})` }}></div>
                        <img className='w-full h-full object-cover rounded-2xl' src={image} alt="" />
                    </div>
                </div>

                <div className='flex flex-col w-[10%] space-y-4 gap-y-20 items-center justify-center bg-gradient-to-t' style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center"}
                    
                }>
                    <div 
                        onClick={change} 
                        className={`w-[50px] h-[50px] rounded-full hover:border-white hover:border-[2px] transition-all duration-500`}
                    >
                        <img className='object-cover w-full h-full rounded-full' src={image} alt="" />
                    </div>
                    <div 
                        onClick={change} 
                        className={`w-[50px] h-[50px] rounded-full hover:border-white hover:border-[2px] transition-all duration-500`}
                    >
                        <img className='object-cover w-full h-full rounded-full' src={image} alt="" />
                    </div>
                    <div 
                        onClick={change} 
                        className={`w-[50px] h-[50px] rounded-full hover:border-white hover:border-[2px] transition-all duration-500`}
                    >
                        <img className='object-cover w-full h-full rounded-full' src={image} alt="" />
                    </div>
                </div>

                <div className='text-white flex flex-col justify-center items-center w-[45%] h-full p-10'>
                    <h1 className='text-2xl font-bold mb-4'>TITLE</h1>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat itaque eius placeat praesentium vero expedita adipisci, omnis dicta soluta iure nobis, fugit ad autem eveniet dignissimos porro corrupti laborum.</div>
                </div>
            </div>
        </>
    );
}