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
import EventCategory from './components/EventCategory';

function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="event" element={<Events />} />
            <Route path="/event/:eventId" element={<EventCategory />} />
            <Route path="About" element={<About />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Ambassadors" element={<Ambassador/>} />
            <Route path='Sponsors' element={<Sponsors/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;