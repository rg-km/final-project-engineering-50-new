import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/home/AboutUs';
import IISMA from './components/home/IismaCamp';
import Testimoni from './components/home/Testimoni';

function App() {
  return (
     
    <div className="App">
      <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/IISMA" element={<IISMA />} />
              <Route path="/testimoni" element={<Testimoni />} />
            </Route>
          </Routes>
   
    
    </div>
    
  );
}

export default App;