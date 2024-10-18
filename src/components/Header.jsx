import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Earth from "../assets/Urja_logo.png";
import rglogo from "../assets/RGIPT.png";
import snt from "../assets/st.png";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <div className='relative z-[1000] font-Space'>
                <div className='hidden lg:flex justify-between w-full fixed top-0 left-0 z-[1000] bg-transparent'>
                    {/* Desktop navigation */}
                    <div className='flex rounded-r-full px-5 items-center text-white justify-evenly w-full h-16 bg-white bg-opacity-10 backdrop-blur-3xl'>
                        <Link to='/'>
                            <div className='relative group hover:scale-[1.2] transition-all'>
                                Home
                                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                            </div>
                        </Link>
                        <Link to='contact'>
                            <div className='relative group hover:scale-[1.2] transition-all'>
                                Contact Us
                                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                            </div>
                        </Link>
                        <Link to="Gallery">
                            <div className='relative group hover:scale-[1.2] transition-all'>
                                Gallery
                                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                            </div>
                        </Link>
                    </div>

                    <div className='items-center lg:block hidden'>
                        <img src={Earth} alt='earth' className='w-[15rem]' />
                    </div>

                    <div className='flex rounded-l-full px-5 items-center text-white justify-evenly w-full h-16 bg-white bg-opacity-10 backdrop-blur-3xl'>
                        <Link to='Events'>
                            <div className='relative group hover:scale-[1.2] transition-all'>
                                Events
                                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                            </div>
                        </Link>
                        <Link to="About">
                            <div className='relative group hover:scale-[1.2] transition-all'>
                                About Us
                                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                            </div>
                        </Link>
                        <Link to="team">

                            <div className='relative group hover:scale-[1.2] transition-all'>
                                Team
                                <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                            </div>

                        </Link>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div className='lg:hidden fixed top-0 left-0 w-full h-[4.5rem] p-4 z-[10] flex justify-between items-center'>
                    <button onClick={toggleMobileMenu} className='text-white'>
                    <FaBars size={24}/>
                          
                    </button>

                    <div >
                       
                            <img src={Earth} alt="RGIPT Logo" className='w-[60px] h-auto' />
                     
                        
                    </div>

                </div>

                <div className={`lg:hidden fixed top-0 left-0 z-20 w-full h-auto bg-black text-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className='flex flex-col items-center py-4 '>
                        <button onClick={toggleMobileMenu} className='self-start p-4'>
                        <FaTimes size={24} />
                        </button>  
                        <Link to='' className='py-2' onClick={toggleMobileMenu}>
                            Home
                        </Link>
                        <Link to='contact' className='py-2' onClick={toggleMobileMenu}>
                            Contact Us
                        </Link>
                        <Link to="Gallery" className='py-2' onClick={toggleMobileMenu}>
                            Gallery
                        </Link>
                        <Link to='Events' className='py-2' onClick={toggleMobileMenu}>
                            Events
                        </Link>
                        <Link to="About" className='py-2' onClick={toggleMobileMenu}>
                            About Us
                        </Link>
                        <Link to="team" className='py-2' onClick={toggleMobileMenu}>
                            Team
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
