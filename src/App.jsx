import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Contact from './components/Contact';
import Home from './components/Home';
import Events from './components/Events'
import About from './components/About';
import Gallery from './components/Gallery';



function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="Events" element={<Events />} />
            <Route path="About" element={<About />} />
            <Route path="Gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;