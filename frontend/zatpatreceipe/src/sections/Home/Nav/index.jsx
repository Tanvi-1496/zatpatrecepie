import React from 'react'
import logo from '../../../assets/Home/Nav/logo.png'
import "../../../styles/Home/Nav/index.css"

const Nav = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Zatpat Recipe Logo" className="navbar_logo" />
        <div className='navbar_linksContainer'>
            <a className='navbar_links' href="#home">Home</a><a className='navbar_links' href="#about">About</a><a className='navbar_links' href="#contact">Contact</a><button>cart</button>
        </div>

       </nav>
  )
}

export default Nav