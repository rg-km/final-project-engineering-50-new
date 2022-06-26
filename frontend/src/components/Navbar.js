import React, {Component, useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import cart from './Assets/cart.png';
import useStore from "../useStore";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const user = useStore((state) => state.user);
        return (
            <nav className="navbar navbar-expand-lg headerbg">
            <div className="container">
              <Link to='/'>
              <img src='./logo.png' width='90'/>
              </Link>
              <button className="navbar-toggler border border-info text-info"
              onClick={ () => setShow(prevState => !prevState)}>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className={ show ? "collapse navbar-collapse" : "collapse navbar-collapse active" }>
                <div className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light " to='/' >HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/IISMA' >IISMA CAMP</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light " to='/fyp' >#FYP</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light " to='/COMPANYcamp' >COMPANY CAMP</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light" to='/aboutus' >ABOUT US</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light" to='/cart' ><img src={cart} width='20'/></Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-light" to='/signin' >{user.name ? 'SIGN OUT' : 'SIGN IN'}</Link>
                  </li>

                </div>
              </div>
            </div>

          </nav>
        );
    }

    export default Navbar;
