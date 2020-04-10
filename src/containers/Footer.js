import React from "react";
import "./Footer.scss";
import Logo from "../assets/icons/fevo.png";
import Instagram from "../assets/icons/instagram_white.png";
import Linkedin from "../assets/icons/linkedin_white.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer-section">
      {/* <div className="signup-form">
        <div className="sign-up">Sign Up for the FEVO Email Newsletter</div>
        <FormControl as="input" placeholder="Your email address" />
        <button className="form-control custom-button">SUBSCRIBE NOW</button>
      </div> */}
      <div className="footer">
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="FEVO LOGO" />
          </div>
          <div className="fevo">© 2020 Fevo. All rights reserved.</div>
        </div>
        <div className="menu">
          <div className="sub-menu">
            <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
            <NavLink to="/purpose" activeClassName="active-link" exact>Purpose</NavLink>
            <NavLink to="/product" activeClassName="active-link" exact>Product</NavLink>
            <NavLink to="/partners" activeClassName="active-link" exact>Partners</NavLink>
          </div>
          <div className="sub-menu">
            <NavLink to="/team" activeClassName="active-link" exact>Team</NavLink>
            <NavLink to="/order-support" activeClassName="active-link" exact>Support</NavLink>
            <NavLink to="/terms" activeClassName="active-link" exact>Terms</NavLink>
            <NavLink to="/privacy-policy" activeClassName="active-link" exact>Privacy Policy</NavLink>
          </div>
        </div>
        <div className="socials">
          <NavLink to="#">
            <img src={Instagram} alt="Instagram" />
          </NavLink>
          <NavLink to="#">
            <img src={Linkedin} alt="Linkedin" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Footer;
