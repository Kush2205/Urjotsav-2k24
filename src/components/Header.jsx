import React from 'react';
import { Link } from 'react-router-dom';
import Earth from "../assets/Images/NavbarEarth.png";
import background from "../assets/Images/newbg.jpg";

export default function Header(props) {
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex rounded-r-full px-5 items-center text-white justify-between w-full h-16' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <Link to=''>
                        <div className='relative group hover:scale-[1.5] transition-all'>
                            Home
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                    </Link>  
                    <Link to='contact'>
                        <div className='relative group hover:scale-[1.5] transition-all'>
                            Contact Us
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                    </Link> 
                    <Link to="Gallery">
                        <div className='relative group hover:scale-[1.5] transition-all'>
                            Gallery
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                    </Link>
                </div>
                <div>
                    <img src={Earth} alt='earth' className='animate-spin-slow w-40' />
                </div>
                <div className='flex rounded-l-full h-16 px-5 items-center text-white w-full justify-between gap-20' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <Link to='Events'>
                        <div className='relative group hover:scale-[1.5] transition-all'>
                            Events
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                    </Link>  
                    <Link to="About">
                        <div className='relative group hover:scale-[1.5] transition-all'>
                            About Us
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                    </Link>  
                    <div className='relative group hover:scale-[1.5] transition-all'>
                        Speakers
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </div>
                </div>
            </div>
        </>
    );
}
