import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Contact from './components/Contact';
import Home from './components/Home';
import Events from './components/Events'
import About from './components/About';
import Gallery from './components/Gallery';
import Ambassador from './components/Ambassador';
import Sponsors from './components/Sponsors';
import Team from './components/Team';


import EventCategory1 from './components/EventCategory1';
import EventCategory2 from './components/EventCategory2';
import EventCategory3 from './components/EventCategory3';
import EventCategory4 from './components/EventCategory4';
import EventCategory5 from './components/EventCategory5';
import EventCategory6 from './components/EventCategory6';
function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="Events" element={<Events />} />
            <Route path="/events-category-1" element={<EventCategory1 />} />
            <Route path='/events-category-2' element={<EventCategory2/>} />
            <Route path = '/events-category-3' element={<EventCategory3/>} />
            <Route path = '/events-category-4' element={<EventCategory4/>} />
            <Route path = '/events-category-5' element={<EventCategory5/>} />
            <Route path = '/events-category-6' element={<EventCategory6/>} />
            <Route path="About" element={<About />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Ambassadors" element={<Ambassador/>} />
            <Route path='Sponsors' element={<Sponsors/>} />
            <Route path='team' element={<Team/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;