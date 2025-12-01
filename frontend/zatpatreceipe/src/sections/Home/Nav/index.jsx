import React,{useState} from 'react'
import logo from '../../../assets/Home/Nav/logo.png'
import "../../../styles/Home/Nav/index.css"
import { BsCartDash } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Nav = () => {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  return (
    <nav className="navbar">
        <img src={logo} alt="Zatpat Recipe Logo" className="navbar_logo" />
        <div className='navbar_linksContainer'>
            <a className='navbar_links' href="#home">Home</a>
            <a className='navbar_links' href="#about">About</a>
            <a className='navbar_links' href="#contact">Contact</a>
            <button className='navbar_button'><BsCartDash /></button>
            <button className='navbar_hamburger' onClick={()=>setMobileMenuOpen(true)}><GiHamburgerMenu /></button>
        </div>
        
       <div className={`navbar_mobile ${mobileMenuOpen ? 'showMobileMenu' : ''}`}>
           <button className='navbar_mobile_close' onClick={()=>setMobileMenuOpen(false)}><RxCross1 /></button>
           <a className='navbar_links' href="#home">Home</a>
            <a className='navbar_links' href="#about">About</a>
            <a className='navbar_links' href="#contact">Contact</a>

        </div>

       </nav>
  )
}

export default Nav