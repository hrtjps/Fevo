import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../assets/icons/fevo.png";
import { NavLink, withRouter } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";
const NewHeader = ({history}) => {
  const [show, setShow]=useState(false);
  const dark=(history.location.pathname === "/case-study")?true:false;
  const [top, setTop]=useState(true);
  
  const scrollEvent = () => {
    const isTop = window.scrollY < 100;
    if( isTop !== top) {
      setTop(isTop);
    }
  }
  useEffect(()=>{
    document.addEventListener('scroll', scrollEvent)
    return () => {
      document.removeEventListener('scroll', scrollEvent)
    }
  })
  return (
    <div className={top?"header":"header top"}>
      <div className="logo">
        <NavLink to="/" activeClassName="active-link" exact>
          <img src={Logo} alt="FEVO LOGO" />
        </NavLink>
      </div>
      <div className={(!dark || !top)?"menu-toggle-btn":"menu-toggle-btn dark"} onClick={()=>setShow(true)}>
        <FontAwesomeIcon icon={faBars} size="2x"/>
      </div>
      <Modal show={show} onHide={()=>setShow(false)} size="sm" id="menuModal" backdrop>
        <div className="">
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/" activeClassName="active-link" exact>
              Home
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/brands/about-fevo" activeClassName="active-link" exact>
              About Fevo
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/case-study" activeClassName="active-link" exact>
              Case Studies
            </NavLink>  
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/brands/video-testimonials" activeClassName="active-link" exact>
              Testimonials
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/brands" activeClassName="active-link" exact>
              Blog
            </NavLink>  
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/brands" activeClassName="active-link" exact>
              Work With Fevo
            </NavLink>  
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/fans/about-fevo" activeClassName="active-link" exact >
              About Fevo - Fans
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/fans" activeClassName="active-link" exact>
              Blog
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="#" activeClassName="active-link" exact >
              Order Support
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/case-study" activeClassName="active-link" exact>
              Case Studies
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/press" activeClassName="active-link" exact>
              Press
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div" onClick={()=>setShow(false)}>
            <NavLink to="/order-support" activeClassName="active-link" exact>
              Order Support
            </NavLink>
          </DropdownItem>
        </div>
      </Modal>
      
      <div className={(!dark || !top)?"menu":"menu dark"} >
        <NavLink to="/" activeClassName="active-link" exact>
          Home
        </NavLink>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/brands" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              Purpose
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/brands/about-fevo" activeClassName="active-link" exact>
                Live Events
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/case-study" activeClassName="active-link" exact>
                Consumer Goods
              </NavLink>  
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/brands/video-testimonials" activeClassName="active-link" exact>
                Content
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/fans" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              Product
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/fans/about-fevo" activeClassName="active-link" exact >
                Coco
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                WeFevo
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/fans" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              Partners
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/fans/about-fevo" activeClassName="active-link" exact >
                Clients
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                Integrations
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                Case Studies
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/fans" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              About
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/fans/about-fevo" activeClassName="active-link" exact >
                Team
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                Press
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                Blog
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/fans" activeClassName="active-link" exact>
                Connect
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavLink to="/order-support" activeClassName="active-link" exact>
          Support
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(NewHeader);
