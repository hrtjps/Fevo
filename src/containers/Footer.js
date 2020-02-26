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
                <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
                <NavLink to="/company" activeClassName="active-link" exact>Company</NavLink>
                <NavLink to="/case-study" activeClassName="active-link" exact>Case Studies</NavLink>
                <NavLink to="/order-support" activeClassName="active-link" exact>Support</NavLink>
                <NavLink to="/press" activeClassName="active-link" exact>Press</NavLink>
                <NavLink to="/career" activeClassName="active-link" exact>Careers</NavLink>
                <NavLink to="/terms" activeClassName="active-link" exact>Terms</NavLink>
                <NavLink to="/privacy-policy" activeClassName="active-link" exact>Privacy Policy</NavLink>
            </div>
            <div className="socials">
              <NavLink to="#"><img src={Instagram} alt="Instagram" /></NavLink>
              <NavLink to="#"><img src={Linkedin} alt="Linkedin" /></NavLink>
            </div>
        </div>
    )
}

export default Footer;