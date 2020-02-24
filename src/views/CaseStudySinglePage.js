import React from "react";

import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CaseStudySinglePage.scss';
import heroBgImg from '../assets/bg-images/case-study-single/hero.png';
import fevoCloth from '../assets/bg-images/home/fevo-black-cloth.png'
import npTicketIcon from '../assets/icons/np-ticket.png';
import npUsersIcon from '../assets/icons/np-users.png';
import npRevenueIcon from '../assets/icons/np-revenue.png';
import cartImg from '../assets/bg-images/case-study-single/product-shot-bucks-1.png';
import pacersImg from '../assets/bg-images/case-study-single/img-3.png';
import pacersLogo from '../assets/icons/pngkey-com-pacers-logo.png';
import img1 from '../assets/bg-images/case-study-single/img-1.png';
import img2 from '../assets/bg-images/case-study-single/img-2.png';
import bucksIcon from '../assets/icons/milwaukee-bucks-green.png'
import {dataSelector} from "../modules/app";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const CaseStudySinglePage = () => {

  return (
    <>
      <section className="case-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="case-hero-container" >
          <h1>Milwaukee Bucks</h1>
          <div className="overview-link">
            <NavLink to="#">
              <FontAwesomeIcon icon={faArrowDown}/>
              Overview & Results
            </NavLink>
          </div>
        </div>
      </section>
      <section className="results-section" style={{backgroundImage: `url(${fevoCloth})`}}>
        <div className="title">
          Teh Results
        </div>
        <div className="row">
          <div className="col-4 result-item">
            <div className="value">
              938
            </div>
            <div className="name">
              <img src={npTicketIcon} alt="" />
              Tickets Sold
            </div>
          </div>
          <div className="col-4 result-item">
            <div className="value">
              $38K+
            </div>
            <div className="name">
              <img src={npRevenueIcon} alt="" />
              Revenue
            </div>
          </div>
          <div className="col-4 result-item">
            <div className="value">
              46%
            </div>
            <div className="name">
              <img src={npUsersIcon} alt="" />
              New TM Users
            </div>
          </div>
        </div>
      </section>
      <section className="bucks-content-section">
        <div className="bucks-content">
          <div className="bucks-content-header">
            <img src={bucksIcon} alt="" />
            <div>
              2018-2019 Season <br />
              Bucks Family Night<br />
              Milwaukee, WI <br />
            </div>
          </div>
          <div>
            <p>
              One of their special initiatives for the 2018-19 season was Family Nights. 
              Fans could get 4 tickets, 4 brats, and 4 sodas for as little as $90. 
              Keeping fans on their site using collective commerce made the 
              purchase process super easy when looking for a fun family night out.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

        </div>
        <div className="cart">
          <img src={cartImg} alt="" />
        </div>
      </section>
      <section className="imgs-section">
        <img src={img1} alt="" className="img-1"/>
        <img src={img2} alt="" className="img-2"/>
      </section>
      <section className="paccers-section" style={{backgroundImage: `url(${pacersImg})`}}>
        <div className="row">
          <div className="col-6">
            <div className="view-next-link">
              View Next: 
              <NavLink to="#">Case Study 04/05 </NavLink>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className="indiana-pacers">
              Indiana Pacers
            </div>

          </div>
          <div className="col-6 pacers-logo">
            <img src={pacersLogo} alt=""/>
          </div>
        </div>

      </section>
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(CaseStudySinglePage);
