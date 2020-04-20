import React from "react";

import { connect } from "react-redux";

import './HomePage.scss';
import halfComputer from '../assets/bg-images/home/group-4.png';
import fullComputer from '../assets/bg-images/home/laptop-bucks_full.png';
import fevoBlackCloth from '../assets/bg-images/home/fevo-black-cloth.png';
import fevoBlueCloth from '../assets/bg-images/home/rectangle.png';

import fevoWayBgImg from '../assets/bg-images/home/group-2.png';
import logoImg from '../assets/icons/img3665.png';

import {dataSelector} from "../modules/app";

import PleasureWorking from "../components/PleasureWorking";

const HomePage = () => {

  return (
    <>
      <section className="hero-section common-4-6-pan">
        {/* <div className="slider-dots">
          <SliderNavDot dots={4}/>
        </div> */}
        <div className="hero-container left-pan">
          <img src={halfComputer} alt="computer" className="show-laptop"/>
          <img src={fullComputer} alt="computer" className="show-mobile"/>
        </div>
        <div className="hero-container right-pan" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
          <h1 className="mb-3 main-title">FEVO: The Social Cart</h1>
          <h1>Changing the Way Ecommerce Works</h1>
          <div className="content">
            Rally your consumers and turn every purchase into a collective commerce experience right on your brand.
          </div>
        </div>
      </section>
      <section className="collective-section" style={{backgroundImage: `url(${fevoBlueCloth})`}}>
        <div className="d-flex flex-column flex-md-row justify-content-evenly w-100">
          <div className="content-container px-4">
            <div className="content title">
              <h2>This is </h2>
              <h2 >
                Collective Commerce™
              </h2>
            </div>
          </div>
          <div className="content-container right-pan px-4" >
            <div className="content">
              Using FEVO, consumers buy as individuals, share purchases with others, and live it up together. This is Collective Commerce™ — the easiest way to bring people together for shared commerce and experiences.              </div>
          </div>
        </div>
      </section>
      <section className="fevo-way-section"  style={{backgroundImage: `url(${fevoWayBgImg})`}}>
        <div className="d-flex flex-column-reverse flex-md-row justify-content-evenly w-100">
          <div className="content-container px-4" >
            <div className="content">
              FEVO is the Social Cart that lives on your brand’s page and simplifies every transaction into a shareable experience.
              Increase your sales.  Capture more data. Expand your reach.
            </div>
          </div>
          <div className="content-container right-pan px-4" >
            <div className="sub-title">
              <div className="sub-title-content top-bar">
                <h2>The FEVO Way</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recommend-section" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
        <div className="sub-title-content top-bar title">
          <h2>
            “FEVO’s Social Cart massively expanded our sales and is so easy to use.  Our consumers love it.”
          </h2>
          <div className="jake">
            <img src={logoImg} alt="" />
            <div className="jake-bye">
              <div>Brian Norman</div>
              <div className="evp-of-sales">VP of Sales & Service at New Jersey Devils</div>
            </div>
          </div>
        </div>
        
        <div className="slider-navs">
          <PleasureWorking />
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
export default enhance(HomePage);
