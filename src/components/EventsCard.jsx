import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function EventsCard({ serialNum, eventNumber, eventName, imgURL }) {
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

        const applyHoverEffects = () => {
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

        const removeHoverEffects = () => {
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

        const handleMouseEnter = () => {
            const mediaQuery = window.matchMedia('(max-width: 640px)');
            if (!mediaQuery.matches) {  // Only apply hover effects on larger screens
                applyHoverEffects();
            }
        };

        const handleMouseLeave = () => {
            const mediaQuery = window.matchMedia('(max-width: 640px)');
            if (!mediaQuery.matches) {  // Only remove hover effects on larger screens
                removeHoverEffects();
            }
        };

        const handleImageLoad = () => {
            imgElement.addEventListener('mouseenter', handleMouseEnter);
            imgElement.addEventListener('mouseleave', handleMouseLeave);
            outerDivElement.addEventListener('mouseenter', handleMouseEnter);
            outerDivElement.addEventListener('mouseleave', handleMouseLeave);
        };

        const handleSmallScreen = (e) => {
            if (e.matches) {
                applyHoverEffects(); // Default hover effects for small screens
            } else {
                removeHoverEffects(); // Reset for larger screens
            }
        };

        // Listen to window resize for media query matching
        const mediaQuery = window.matchMedia('(max-width: 640px)');
        handleSmallScreen(mediaQuery); // Call it once to apply hover effect on load if it's small screen
        mediaQuery.addEventListener('change', handleSmallScreen);

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
            mediaQuery.removeEventListener('change', handleSmallScreen);
        };
    }, []);

    const handleClick = () => {
        window.location.href = `/events-category-${serialNum}`;
    };

    return (
        <div className='flex justify-center w-[85%] sm:w-[430px] md:w-[90%] lg:w-[340px]'>
            <div onClick={handleClick} ref={outerDivRef} className='relative p-2 rounded-xl'>
                <img
                    ref={imgRef}
                    src={imgURL}
                    alt='background'
                    className='w-[300px] h-[350px] sm:h-[400px] lg:h-[440px] rounded-2xl opacity-[0.9] border-0 border-transparent'
                />
                <div
                    ref={textRef}
                    className='absolute bottom-0 left-0 right-0 text-center w-full text-white opacity-0 text-[20px] sm:text-[23px] md:text-[27px]'
                >
                    {eventName}
                </div>
            </div>
        </div>
    );
}
