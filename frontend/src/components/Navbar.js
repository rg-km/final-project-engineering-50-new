import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component { 
    constructor() {
        super();
        this.state = {
            show: true, 
        };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg headerbg">
            <div className="container">
              <Link to='/'>
              <img src='./logo.png' width='90'/>
              </Link>
              <button className="navbar-toggler border border-info text-info"
              onClick={ () =>{ this.setState({show: !this.state.show}) } }>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className={ this.state.show ? "collapse navbar-collapse" : "collapse navbar-collapse active" }>
                <div className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light " to='/' >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/product' >Product</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light " to='/testimoni' >Testimoni</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light" to='/aboutus' >AboutUs</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light" to='/signin' >Sign in</Link>
                  </li>
                </div>
              </div>
            </div>
         
          </nav>
        );
    }
}
    