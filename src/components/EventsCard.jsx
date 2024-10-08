import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function EventsCard(props) {
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
        <>
            <div className='flex justify-center w-full'>
                <div ref={outerDivRef} className='relative p-2 rounded-xl'>
                    <img ref={imgRef} src={background} alt='background' className='w-[300px] h-[535px] rounded-2xl opacity-[0.9] border-0 border-transparent' />
                    <div ref={textRef} className='absolute bottom-0 left-0 right-0 text-center w-full text-white opacity-0'>
                        Hover Text
                    </div>
                </div>
            </div>
        </>
    );
}
