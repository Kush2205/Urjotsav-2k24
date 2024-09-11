import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Bg from './assets/spacebg.mp4';

const Layout = () => {
  return (
    <div className='relative w-full  overflow-hidden'>
      <video 
        src={Bg} 
        autoPlay 
        loop 
        muted 
        className='fixed inset-0 object-cover w-full h-full z-0' 
      ></video>

      <div className='relative z-10'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
