import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Earth from "../assets/Images/NavbarEarth.png";
import background from "../assets/Images/newbg.jpg";
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <div className='relative z-[1000]'>
                {/* Navbar Links for Larger Screens */}
                <div className='hidden lg:flex justify-between w-full fixed top-0 left-0 z-[1000] bg-transparent'>
                    {/* Left Section */}
                    <div className='flex rounded-r-full px-5 items-center text-white justify-evenly w-full h-16' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
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

                    {/* Logo */}
                    <div className=' items-center p-4 lg:block hidden'>
                        <img src={Earth} alt='earth' className='animate-slowspin w-[8rem]' />
                    </div>

                    {/* Right Section */}
                    <div className='hidden lg:flex rounded-l-full h-16 px-5 items-center text-white w-full justify-evenly gap-20' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
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

                {/* Hamburger Menu Icon */}
                <div className='lg:hidden fixed top-0 left-0 p-4 z-[1000]'>
                    <button onClick={toggleMobileMenu} className='text-white'>
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 left-0 w-full h-auto bg-black text-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className='flex flex-col items-center py-4'>
                        <button onClick={toggleMobileMenu} className='self-end p-4'>
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
                        <div className='py-2'>
                            Speakers
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}