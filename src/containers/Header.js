import React from "react";
import "./Header.scss";
import Logo from "../assets/icons/fevo.png";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/" activeClassName="active-link" exact>
          <img src={Logo} alt="FEVO LOGO" />
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to="/" activeClassName="active-link" exact>
          Home
        </NavLink>
        <Dropdown>
          <DropdownToggle variant="link">
            <NavLink to="/brands" activeClassName="active-link">
              For Brands
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <NavLink
              to="/brands/about-fevo"
              activeClassName="active-link"
              exact
            >
              About Fevo - Brands
            </NavLink>
            <NavLink
              to="/brands/about-fevo"
              activeClassName="active-link"
              exact
            >
              other
            </NavLink>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle variant="link">
            <NavLink to="/fans" activeClassName="active-link">
              For Fans
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <NavLink
              to="/fans/about-fevo"
              activeClassName="active-link"
              exact
            >
              About Fevo - Fans
            </NavLink>
            <NavLink to="/fans/brand" activeClassName="active-link" exact>
              Brands
            </NavLink>
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

export default Header;