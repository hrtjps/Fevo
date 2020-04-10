import React from "react";

import { connect } from "react-redux";

import './HomePage.scss';
import halfComputer from '../assets/bg-images/home/group-4.png';
import fullComputer from '../assets/bg-images/home/laptop-bucks_full.png';
import fevoBlackCloth from '../assets/bg-images/home/fevo-black-cloth.png';
import fevoBlueCloth from '../assets/bg-images/home/rectangle.png';

import fevoWayBgImg from '../assets/bg-images/home/group-2.png';
import learfieldImg from '../assets/icons/learfield.png';

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
          <h1>The Social Cart<span className="of-the">of the</span></h1>
          <h1>Experience Economy</h1>
          <div className="content">
            Rally your consumers and turn every purchase into a collective commerce experience right on your brand.
          </div>
        </div>
      </section>
      <section className="collective-section common-4-6-pan" style={{backgroundImage: `url(${fevoBlueCloth})`}}>
        <div className="sub-title left-pan" >
          <div className="sub-title-content">
            <h2>Collective Commerce™:</h2>
            <h2 className="sub-content">
              This is How It’s Done
            </h2>
          </div>
        </div>
        <div className="right-pan" >
          <div className="content">
            Using FEVO, consumers buy as individuals, share purchases with others, 
            and live it up together.  This is Collective Commerce - the easiest 
            way to bring people together for shared commerce and experiences.
          </div>
        </div>
      </section>
      <section className="fevo-way-section"  style={{backgroundImage: `url(${fevoWayBgImg})`}}>
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 d-flex align-items-center ">
            <div className="content-container" >
              <div className="content">
                FEVO is the Social Cart that lives on your brand's page 
                and simplifies every transaction into a shareable experience.  
                Increase your sales.  Capture more data.  Expand your reach.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
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
            “FEVO’s Social Cart massively expanded our 
            sales and is so easy to use. Our consumers love it.”
          </h2>
          <div className="d-flex jake">
            <img src={learfieldImg} alt="" />
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
