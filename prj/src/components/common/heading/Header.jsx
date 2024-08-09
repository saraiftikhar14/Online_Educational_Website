import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import "./header.css"


const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <div>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/courses">ALL COURSES</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/team">TEAM</Link></li>
            <li><Link to="/pricing">PRICING</Link></li>
            <li><Link to="/journal">JOURNAL</Link></li>
            <li><Link to="/contact-us">CONTACT US</Link></li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>

        </nav>
      </header>
    </div>
  )
}

export default Header
