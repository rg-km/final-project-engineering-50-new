import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/home/AboutUs';
import Product from './components/home/Product';
import Testimoni from './components/home/Testimoni';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPas';
import ResetPassword from './components/ResetPassword/ResetPas';

function App() {
  return (
     
    <div className="App">
      <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/product" element={<Product />} />
              <Route path="/testimoni" element={<Testimoni />} />
              <Route path="/signin" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/forgotPassword" element={<ForgotPassword/>} />
              <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
            </Route>
          </Routes>
   
    
    </div>
    
  );
}

export default App;