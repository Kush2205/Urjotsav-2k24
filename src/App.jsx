import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import Contact from './components/Contact';
import Home from './components/Home';
import Events from './components/Events'



function App() {

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="Events" element={<Events />} />
           
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;