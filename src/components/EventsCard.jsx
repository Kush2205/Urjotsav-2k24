import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function EventsCard({ image, text, sname }) {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const outerDivRef = useRef(null);

    useEffect(() => {
        const imgElement = imgRef.current;
        const textElement = textRef.current;
        const outerDivElement = outerDivRef.current;

        const neonGlowStyle = {
            boxShadow: '0 0 30px rgba(45,143,184, 0.8), 0 0 30px rgba(45,143,184, 0.6), 0 0 30px rgba(45,143,184, 0.4)',
            backdropFilter: 'blur(10px)' 
        };

        const handleMouseEnter = () => {
            const tl = gsap.timeline();
            tl.to(imgElement, {
                scale: 0.6,
                y: -imgElement.offsetHeight / 5,
                duration: 0.5,
            })
            .to(textElement, { y: -40, opacity: 1, duration: 0.5 }, 0)
            .to(outerDivElement, { 
                borderColor: 'transparent',
                borderWidth: '3px',
                duration: 0.2,
                boxShadow: neonGlowStyle.boxShadow,
                backdropFilter: neonGlowStyle.backdropFilter
            }, 0);
        };

        const handleMouseLeave = () => {
            const tl = gsap.timeline();
            tl.to(imgElement, {
                scale: 1,
                y: 0,
                duration: 0.5,
            })
            .to(textElement, { y: '100%', opacity: 0, duration: 0.5 }, 0)
            .to(outerDivElement, {
                borderWidth: 0,
                duration: 0.2,
                boxShadow: 'none',
                backdropFilter: 'none'
            }, 0);
        };

        const handleImageLoad = () => {
            imgElement.addEventListener('mouseenter', handleMouseEnter);
            imgElement.addEventListener('mouseleave', handleMouseLeave);
            outerDivElement.addEventListener('mouseenter', handleMouseEnter);
            outerDivElement.addEventListener('mouseleave', handleMouseLeave);
        };

        if (imgElement.complete) {
            handleImageLoad();
        } else {
            imgElement.addEventListener('load', handleImageLoad);
        }

        return () => {
            imgElement.removeEventListener('load', handleImageLoad);
            imgElement.removeEventListener('mouseenter', handleMouseEnter);
            imgElement.removeEventListener('mouseleave', handleMouseLeave);
            outerDivElement.removeEventListener('mouseenter', handleMouseEnter);
            outerDivElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='flex flex-col items-center w-full px-4 py-6'>
            <div 
                ref={outerDivRef} 
                className='relative rounded-xl overflow-hidden border-0'
                style={{ width: '300px', height: '250px' }} // Fixed width and height for consistency
            >
                <img 
                    ref={imgRef} 
                    src={image} 
                    alt='background' 
                    className='w-full h-full object-cover' 
                />
                <div 
                    ref={textRef} 
                    className='absolute bottom-0 left-5 right-0 text-wrap w-[250px] text-center text-white opacity-0'
                    style={{ transform: 'translateY(100%)' }} // Start below the image
                >
                    {text}
                </div>
            </div>
            <div className='mt-4 text-center text-white opacity-[100%]'>
                {sname}
            </div>
        </div>
    );
}
