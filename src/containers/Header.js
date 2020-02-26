import React from "react";
import "./Header.scss";
import Logo from "../assets/icons/fevo.png";
import { NavLink, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
const Header = ({history}) => {
  console.log(history.location.pathname);
  const dark=(history.location.pathname === "/case-study")?true:false;
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/" activeClassName="active-link" exact>
          <img src={Logo} alt="FEVO LOGO" />
        </NavLink>
      </div>
      <div className={dark?"menu dark":"menu"} >
        <NavLink to="/" activeClassName="active-link" exact>
          Home
        </NavLink>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/brands" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              For Brands
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/brands/about-fevo" activeClassName="active-link" exact>
                About Fevo
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/case-study" activeClassName="active-link" exact>
                Case Studies
              </NavLink>  
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/brands/video-testimonials" activeClassName="active-link" exact>
                Testimonials
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/brands" activeClassName="active-link" exact>
                Blog
              </NavLink>  
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/brands" activeClassName="active-link" exact>
                Work With Fevo
              </NavLink>  
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/fans" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              For Fans
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/fans/about-fevo" activeClassName="active-link" exact >
                About Fevo - Fans
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                Blog
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="#" activeClassName="active-link" exact >
                Order Support
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavLink to="/case-study" activeClassName="active-link" exact>
          Case Studies
        </NavLink>
        <NavLink to="/press" activeClassName="active-link" exact>
          Press
        </NavLink>
        <NavLink to="/order-support" activeClassName="active-link" exact>
          Order Support
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Header);
