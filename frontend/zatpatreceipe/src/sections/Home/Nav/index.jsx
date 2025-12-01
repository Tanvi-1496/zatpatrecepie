import React from 'react'
import logo from '../../../assets/Home/Nav/logo.png'
import "../../../styles/Home/Nav/index.css"

const Nav = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Zatpat Recipe Logo" className="navbar_logo" />
         <ul className="navbar_links">
            <li><a className="links" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>

       </nav>
  )
}

export default Nav