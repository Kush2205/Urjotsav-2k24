import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Earth from "../assets/Urja_logo.png";
import rglogo from "../assets/RGIPT.png";
import snt from "../assets/st.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


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
                <div className='hidden lg:flex justify-between w-full fixed bottom-0 left-0 right-0 z-[1000] bg-transparent'>
                    {/* bottom navigation */}
                    <div className='flex rounded-tr-full px-5 items-center text-white justify-evenly w-full h-16 bg-white bg-opacity-10 backdrop-blur-3xl'>

                        {/* <div className='relative group hover:scale-[1.2] transition-all'>
                            <a href="#sponsors">Sponsors</a>

                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div> */}


                        <div className='relative group hover:scale-[1.2] transition-all'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScNiLb_xBZYVC7N4XNFOPCUj8wcz_NCYujyHkTsr1qRYpNJaQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                                Fest passes</a>

                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>

                        <div className='relative group hover:scale-[1.2] transition-all'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScCjuBvZowgqhql8poRIZlHqwqHE2pYLIC5ln6sZ9LfedH8Vg/viewform" target="_blank" rel="noopener noreferrer">Campus Ambassador
                            </a>

                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>


                    </div>

                    <div className='items-center w-[60vw] lg:block hidden'>

                    </div>

                    <div className='flex rounded-tl-full px-5 items-center text-white justify-evenly w-full h-16 bg-white bg-opacity-10 backdrop-blur-3xl'>
                        <div className='relative group hover:scale-[1.2] transition-all '>
                            <a href="https://www.instagram.com/urjotsav_rgipt/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                        </div>
                        <div className='relative group hover:scale-[1.2] transition-all '>
                            <a href="https://www.youtube.com/@ScienceTechnicalCouncil_RGIPT" target="_blank" rel="noopener noreferrer">  <FaYoutube size={30} /></a>
                        </div>
                        <div className='relative group hover:scale-[1.2] transition-all '>
                            <a href="https://in.linkedin.com/in/urjotsav" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} /></a>
                        </div>
                    </div>

                </div>



                {/* Mobile navigation */}
                <div className='lg:hidden fixed top-0 left-0 w-full h-[55px] p-4 z-[10] flex justify-between items-center bg-black bg-opacity-40'>
                    <button onClick={toggleMobileMenu} className='text-white'>
                        <FaBars size={24} />

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
                        {/* <a href="#sponsors" className='py-2' onClick={toggleMobileMenu}>
                            Sponsors
                        </a> */}
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNiLb_xBZYVC7N4XNFOPCUj8wcz_NCYujyHkTsr1qRYpNJaQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className='py-2' onClick={toggleMobileMenu}>
                            Fest passes</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCjuBvZowgqhql8poRIZlHqwqHE2pYLIC5ln6sZ9LfedH8Vg/viewform" target="_blank" rel="noopener noreferrer" className='py-2' onClick={toggleMobileMenu}>Campus Ambassador
                        </a>

                    </div>
                </div>
                {/* Social Media Icons at Bottom */}
                <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-[1000] bg-white bg-opacity-10 backdrop-blur-3xl text-white py-2 flex justify-around`}>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://youtube.com/yourprofile" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </>
    );
}
