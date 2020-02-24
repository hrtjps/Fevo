import React from 'react';
import './Header.scss';
import Logo from "../assets/icons/fevo.png"
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/" activeClassName="active-link" exact><img src={Logo} alt="FEVO LOGO" /></NavLink>
            </div>
            <div className="menu">
                <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
                <NavLink to="/brands" activeClassName="active-link" exact>For Brands</NavLink>
                <NavLink to="/fans" activeClassName="active-link" exact>For Fans</NavLink>
                <NavLink to="/case-study" activeClassName="active-link" exact>Case Studies</NavLink>
                <NavLink to="/press" activeClassName="active-link" exact>Press</NavLink>
                <NavLink to="/order-support" activeClassName="active-link" exact>Order Support</NavLink>
            </div>
        </div>
    )
}

export default Header;