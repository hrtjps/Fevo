import React from "react";

import { connect } from "react-redux";

import './PartnersPage.scss';

import whiteBgImg from '../assets/bg-images/case-study-home/fevo-bg-white.png';
import heroImg from '../assets/bg-images/about_fevo-brands/group-4.png';
import ticketImg from '../assets/icons/ticket.png';

import {dataSelector} from "../modules/app";


const PartnersPage = () => {

  return (
    <>
      <section className="partners-hero-section" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="row w-100">
          <div className="col-12 col-md-6">
            <div className="content-container">
              <div className="content">
                <h1 className="mb-4">Our Partners</h1>
                Proud to support our growing community of FEVO partners
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 hero-right py-4">
            <div className="hero-content mb-5">
              “FEVO’s Social Cart massively  expanded our sales and 
              is so easy  to use. Our consumers love it.”
            </div>
            <div className="hero-subcontent mb-4">
              Brian Norman, VP of Sales &  Service at New Jersey Devils
            </div>
          </div>
        </div>
      </section>
      <section className="partners-collective-section" style={{backgroundImage: `url(${whiteBgImg})`}}>
        <div className="row w-100">
          <div className="col-12 col-md-6 ">
            <div className="content-container">
              <div className="content" >
                <h2 className="pt-4">FEVO  Integrations</h2>
                <div className="my-4">
                  We integrate into the major  inventory systems, including  
                  Ticketmaster, Paciolan, and  Tickets.com. This allows our  
                  clients to offer experiences, goods,  and services all in 
                  one place—  giving consumers the most  seamless digital 
                  experience all fully integrated with your existing inventory system. 
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="content-container">
              <img src={ticketImg} alt="" className="mb-4"/>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-fevo-way-section"  style={{backgroundImage: `url(${heroImg})`}}>
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6">
            <div className="content-container" >
              <div className="content">
                With our proprietary Social Cart, we turn consumers 
                into communities of buyers right on your brand. Proven 
                to deliver results for our partners, it’s easy to see 
                why the biggest brands in the world trust us with their consumer experience.
              </div>
              <div className="for-content-navs mb-4">
                <a href="/">Connect with FEVO.</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <div className="content-container" >
              <h2>FEVO Clients</h2>
            </div>
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
export default enhance(PartnersPage);
