import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import BottomHeader from './components/BottomHeader';

const Layout = () => {
  return (
    <div >
      
      <Header />
      <Outlet />
      <BottomHeader/>
      
      
     
    </div>
  );
};

export default Layout;
