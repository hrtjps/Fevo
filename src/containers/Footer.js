import React from 'react';
import './Footer.scss';
import Logo from "../assets/icons/fevo.png"
import Instagram from "../assets/icons/instagram.png"
import Linkedin from "../assets/icons/linkedin.png"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src={Logo} alt="FEVO LOGO" />
            </div>
            <div className="fevo">
              © 2019 Fevo. All rights reserved.
            </div>
            <div className="menu">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/brands" >Company</NavLink>
                <NavLink to="/fans" >Case Studies</NavLink>
                <NavLink to="/case-studies" >Support</NavLink>
                <NavLink to="/press" >Press</NavLink>
                <NavLink to="/career" >Careers</NavLink>
                <NavLink to="/terms" >Terms</NavLink>
                <NavLink to="/privacy-policy" >Privacy Policy</NavLink>
            </div>
            <div className="socials">
              <NavLink to="#"><img src={Instagram} alt="Instagram" /></NavLink>
              <NavLink to="#"><img src={Linkedin} alt="Linkedin" /></NavLink>
            </div>
        </div>
    )
}

export default Footer;