import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../assets/icons/fevo.png";
import { NavLink, withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";
const NewHeader = ({history}) => {
  const [show, setShow]=useState(false);
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
      <div className="menu-toggle-btn" onClick={()=>setShow(true)}>
        <FontAwesomeIcon icon={faBars} size="2x"/>
      </div>
      <Modal show={show} onHide={()=>setShow(false)} size="sm" id="menuModal" backdrop>
        <div className="" onClick={()=>setShow(false)}>
          
          <div className="menu-toggle-btn" onClick={()=>setShow(false)}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
          </div>
          <div className="menu-logo">
            FEVO
          </div>
          <DropdownItem as="div">
            <NavLink to="/" activeClassName="active-link" exact>
              Home
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div">
            <NavLink to="/purpose" activeClassName="active-link" exact>
              Purpose
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div">
            <NavLink to="/product" activeClassName="active-link" exact>
              Product
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div">
            <NavLink to="/partners" activeClassName="active-link" exact>
              Partners
            </NavLink>  
          </DropdownItem>
          <DropdownItem as="div">
            <NavLink to="/team" activeClassName="active-link" exact>
              Team
            </NavLink>
          </DropdownItem>
          <DropdownItem as="div">
            <NavLink to="/order-support" activeClassName="active-link" exact>
              Support
            </NavLink>
          </DropdownItem>
          <Button variant="light" block onClick={()=>setShow(false)} className="close-btn">Close</Button>
        </div>
      </Modal>
      
      <div className="menu">
        <NavLink to="/" activeClassName="active-link" exact>
          Home
        </NavLink>
        <NavLink to="/purpose" activeClassName="active-link" exact>
          Purpose
        </NavLink>
        <NavLink to="/product" activeClassName="active-link" exact>
          Product
        </NavLink>
        <NavLink to="/partners" activeClassName="active-link" exact>
          Partners
        </NavLink>
        <NavLink to="/team" activeClassName="active-link" exact>
          Team
        </NavLink>
        {/* <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/purpose" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              Purpose
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/purpose/live-events" activeClassName="active-link" exact>
                Live Events
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/purpose/consumer-goods" activeClassName="active-link" exact>
                Consumer Goods
              </NavLink>  
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/purpose/content" activeClassName="active-link" exact>
                Content
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        {/* <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/product" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              Product
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/product/coco" activeClassName="active-link" exact >
                Coco
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/product/wefevo" activeClassName="active-link" exact>
                WeFevo
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/partners" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              Partners
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/partners/clients" activeClassName="active-link" exact >
                Clients
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/partners/integrations" activeClassName="active-link" exact>
                Integrations
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/partners/case-study" activeClassName="active-link" exact>
                Case Studies
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle as="div">
            <NavLink to="/about" activeClassName="active-link" onClick={(e)=>{e.preventDefault()}}>
              About
            </NavLink>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem as="div">
              <NavLink to="/about/team" activeClassName="active-link" exact >
                Team
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/about/press" activeClassName="active-link" exact>
                Press
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/about/brands" activeClassName="active-link" exact>
                Blog
              </NavLink>
            </DropdownItem>
            <DropdownItem as="div">
              <NavLink to="/about/content" activeClassName="active-link" exact>
                Contact Us
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <NavLink to="/order-support" activeClassName="active-link" exact>
          Support
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(NewHeader);
