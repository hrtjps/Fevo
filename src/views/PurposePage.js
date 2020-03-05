import React from "react";

import { connect } from "react-redux";

import './PurposePage.scss';
import whiteBg from '../assets/bg-images/purpose/rectangle-white.png';
import redBg from '../assets/bg-images/purpose/rectangle-red.png';
import blueBg from '../assets/bg-images/purpose/rectangle-blue.png';
import heroImg from '../assets/bg-images/purpose/hero.png';
import lastImg from '../assets/bg-images/purpose/fevo-cb-edits.png';
import {dataSelector} from "../modules/app";


const PurposePage = () => {

  return (
    <>
      <section className="purpose-hero-section common-5-5-pan" style={{backgroundImage: `url(${whiteBg})`}}>
        <div className="left-pan" style={{backgroundImage: `url(${heroImg})`}}>
          
        </div>
        <div className="right-pan" >
          <h1>Experience Together</h1>
          <div className="content">
            <strong>We come alive when we are together. </strong>
            Our tribes propel us forward and draw us into adventure. 
            We are all tribes. FEVO is how tribes buy.
          </div>
        </div>
      </section>
      <section className="purpose-unlock-section common-5-5-pan" style={{backgroundImage: `url(${redBg})`}}>
        <div className="sub-title left-pan" >
          <div className="sub-title-content">
            <h2>Unlock Your Tribe</h2>
          </div>
        </div>
        <div className="right-pan" >
          <div className="content">
            The game has changed for social experiences. Using FEVO, 
            consumers buy as individuals, share purchases with others, 
            and live it up together. This is Collective Commerce™—the 
            easiest way to bring people together for shared experiences.
          </div>
        </div>
      </section>
      <section className="purpose-purchase-section common-5-5-pan" style={{backgroundImage: `url(${blueBg})`}}>
        <div className="left-pan" style={{backgroundImage: `url(${lastImg})`}}>  
        </div>
        <div className="right-pan" >
          <h2>Turn Every Purchase Into An Adventure</h2>
          <div className="content">
            The game has changed for social experiences. Using FEVO, 
            consumers buy as individuals, share purchases with others, 
            and live it up together. This is Collective Commerce™—the 
            easiest way to bring people together for shared experiences.
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
export default enhance(PurposePage);
