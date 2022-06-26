import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
        <footer className='fixed-footer'>
      
        <div className="container p-4">
            <div className="row">
                <div className="col-sm-4 mt-3">
                  <Link to='/' className='logo'>
                      <img src='./logo.png' width='150'/>
                      </Link>
                      <p className="caption">"The ability make yourself<br /> completely unique"</p>
    </div>
    
    <ul className='col-12 col-md-3 list-unstyled'>
      <li className="font-weight-bold text-dark"><h6>AIMPROVE</h6></li>
    <div className='text-footer text-light'>
    <li>
    <Link className="text-decoration-none text-dark" to='/'>HOME</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/IISMA'>IISMA CAMP</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/fyp'>FYP</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/COMPANYcamp'>COMPANY CAMP</Link>
    </li>
    <li>
    <Link  className="text-decoration-none text-dark" to='/aboutus'>ABOUT US</Link>
    </li>
    </div>
    </ul>
    <ul className='col-12 col-md-3 list-unstyled'>
      <li className="font-weight-bol text-dark"><h6>SOCIAL MEDIA</h6> </li>
      <li className='d-flex justify-content-between '>
        <div className='icons-footer btn btn-link btn-floating btn-lg text-dark m-1'>
        <i className='bi bi-linkedin'/>
        <i className='bi bi-instagram p-3'/>
        <i className='bi bi-tiktok'/>
        </div>
    </li>
    </ul>
            
    
    <div className="text-center p-4 p-3 mb-2 bg text-dark block-footer">
    © 2022 Copyright: 
    <a className="text-decoration-none text-dark fw-bold">AIMPROVE</a>
  </div>
</div>
</div>


</footer>
  )
}

export default Footer