import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-logo'>
            <h1 className='nav-h1'>Portfolio</h1>
        </div>
        <div className='nav-links'>
            <ul className='links'>
                <li><a href='./Home'>Home</a></li>
                <li><a href='./Skills'>Skills</a></li>
                <li><a href='./Contact'>Contact Me</a></li>
                <li><a href='./hire'><button>Hire Me</button></a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
