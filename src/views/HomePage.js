import React from "react";

import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

import './HomePage.scss';
import halfComputer from '../assets/bg-images/home/group-4.png';
import fevoBlackCloth from '../assets/bg-images/home/fevo-black-cloth.png';
import fevoWayBgImg from '../assets/bg-images/home/group-2.png';
import learfieldImg from '../assets/icons/learfield.png';

import SliderNavDot from "../components/SliderNavDot";
import { NavLink } from "react-router-dom";

const HomePage = () => {

  return (
    <>
      <section className="hero-section">
        <div className="hero-container half-computer">
          <img src={halfComputer} alt="computer" />
        </div>
        <div className="hero-container hero-content" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
          <h1>The Buy Button<span className="of-the">of the</span></h1>
          <h1>Experience Economy</h1>
          <div className="content">
            Rally your buyers and turn any moment into an 
            unforgettable shared experience on your brand.
          </div>
          <SliderNavDot dots={4} />
        </div>
      </section>
      <section className="collective-section">
        <div className="sub-title" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
          <div className="sub-title-content">
            <h2>Collective<br/> Commerce:</h2>
            <h2 className="sub-content">
              This is How <br/>
              It’s Done. 
            </h2>
          </div>
        </div>
        <div className="content-container" >
          <div className="content">
            The game has changed for social experiences. Using 
            Fevo, consumers buy as individuals, share purchases 
            with others, and live it up together. This is collective
            commerce—the easiest way to bring people together
            for shared experiences.
          </div>
        </div>
      </section>
      <section className="fevo-way-section"  style={{backgroundImage: `url(${fevoWayBgImg})`}}>
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="content-container" >
              <div className="content">
                Fevo works as a button that pops open
                on a brand’s page, simplifying every
                transaction into a seamless process. On
                the backend, our clients can customize
                their offers, track metrics, and capture
                data. It’s a win for fans and brands.
              </div>
              <div className="for-content-navs">
                <NavLink to="/brands">
                  For Brands 
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </NavLink>
                <NavLink to="/fans">
                  For Fans
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="sub-title">
              <div className="sub-title-content top-bar">
                <h2>The Fevo Way</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recommend-section" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
        <div className="sub-title-content top-bar title">
          <h2>
            “I’d recommend Fevo to anybody that 
            likes to make money, enjoys selling 
            tickets, and wants to make their team 
            owner happy.”
          </h2>
          <div className="d-flex jake">
            <img src={learfieldImg} alt="" />
            <div className="jake-bye">
              <div>Jake Bye</div>
              <div className="evp-of-sales">EVP of Sales & Service at Learfield IMG College</div>
            </div>
          </div>
          <div className="d-flex justify-content-center slider-navs">
            <SliderNavDot dots={4} />
          </div>
        </div>
      </section>
    </>
  );
};

const mapState = state => ({});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(HomePage);
