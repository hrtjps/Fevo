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
            <strong>Life is meant to be shared together. </strong>
            We all have our tribes.  Our tribes embody us and lead us into adventure.  <br /><br />
            FEVO is how tribes buy.
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
            It's time to break the barriers of traditional ecommerce.  
            A purchase is no longer just a transaction, it's an opportunity 
            for people to connect and share.  Collective Commerce™ turns every 
            purchase into an experience buyers enjoy together on your brand.
          </div>
        </div>
      </section>
      <section className="purpose-purchase-section common-5-5-pan" style={{backgroundImage: `url(${blueBg})`}}>
        <div className="left-pan" style={{backgroundImage: `url(${lastImg})`}}>  
        </div>
        <div className="right-pan" >
          <h2>Turn Every Purchase Into An Adventure</h2>
          <div className="content">
            People are looking for ways to connect their passions with others.  
            When they love it, they'll tell their friends.  When they're 
            passionate about it, they'll share it with the world.  
            With FEVO, every purchase is a chance to turn one 
            person into a tribe -- and that purchase into a movement.
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
