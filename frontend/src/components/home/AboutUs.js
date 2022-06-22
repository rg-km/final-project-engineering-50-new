import React from 'react'
import "../Styles/AboutUS.css";


const AboutUs = () => {
  return (
    <div className='AboutUs'>
    <div className="container">
    <div className="row justify-content-center mt-10 mb-4">
      <div className="col-lg info-panell">
        <div className="row">
          <div className="col-lg">
          <h2 className="section-tittle fw-bold text-head text-light text-center">What is Aimprove?</h2>
            <p className="section-tittle fw-bold text-head text-light text-center"> <h5>Aimprove is a startup <br/>  that focuses
on self-development, <br/>  especially for students. Aimprove will be a bridge for students to achieve their dreams.</h5>
            </p>
        
            <div className="row3 row justify-content-center">
            <div className="col-lg goals-panel">
            <h2 className="section-tittle fw-bold text-head text-light text-center ourgoals">Our Goals</h2>
          <div className="row">
      <div className="col-lg">
      <div class="card shadow mb-5 scholarship">
      <div className="card-body">
        <h5 className="card-title text-center">SCHOLARSHIP</h5>
        <i class="d-flex justify-content-center bi bi-book icons"></i>
        <p className="card-text text-center ">The Impotance of Scholarship</p> 
      </div>
      </div>
      </div>
      <div className="col-lg">
      <div class="card shadow mb-5 career">
      <div className="card-body">
        <h5 className="card-title text-center">CAREER</h5>
        <i class="d-flex justify-content-center bi bi-briefcase icons"></i>
        <p className="card-text text-center">Path To Career</p>
      </div>
      </div>
      </div>
      <div className="col-lg">
      <div class="card shadow mb-5 skilldevelopment">
      <div className="card-body">
        <h5 className="card-title text-center">SKILL DEVELOPMENT</h5>
        <i class="d-flex justify-content-center bi bi-lightbulb icons"></i>
        <p className="card-text text-center ">Improve Individual Skill</p> 
      </div>
      </div>
      </div>
      </div> 
    </div>
    </div>        
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
 
  )
}

export default AboutUs