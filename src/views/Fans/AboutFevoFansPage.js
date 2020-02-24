import React from "react";

import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import './AboutFevoFansPage.scss';
import heroBgImg from '../../assets/bg-images/about_fevo-brands/group-4.png';
import prjImg1 from '../../assets/bg-images/about_fevo-brands/image-1_4.png';
import prjImg2 from '../../assets/bg-images/about_fevo-brands/image-1_3.png';
import prjImg3 from '../../assets/bg-images/about_fevo-brands/image-1_2.png';

import accessImg from '../../assets/bg-images/about_fevo-brands/image-1.png';
import amplifyBgImg from '../../assets/bg-images/home/rectangle.png';
import {dataSelector} from "../../modules/app";
import fevoBlackCloth from '../../assets/bg-images/home/fevo-black-cloth.png';
import 'react-circular-progressbar/dist/styles.css';


const AboutFevoFansPage = ({data}) => {

  return (
    <>
      <section className="about-fevo-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="about-fevo-hero-container common-4-6-pan" >
          <div className="left-pan">
            <h1>FEVO for Brands</h1>
          </div>
          <div className="right-pan">
            <p className="content">
              <strong>FEVO is an e-commerce technology that integrates seamlessly onto your site. </strong>
              Effortlessly create offers in three clicks and streamline transactions for your fans,
              all while empowering your consumers to share their purchase and preserving your branding.
            </p>
          </div>
        </div>
      </section>
      <section className="amplify-section common-4-6-pan">
        <div className="left-pan sub-title" style={{backgroundImage: `url(${amplifyBgImg})`}}>
          <div className="sub-title-content">
            <h1>Amplify Your Brand</h1>
          </div>
        </div>
        <div className="right-pan">
          <p className="content">
            It’s impossible to know your consumer when all your social 
            activity happens on an outsider’s website. <strong>Fevo turns your 
            brand into its own platform</strong>, connecting you directly with 
            your consumers and positioning your brand as something 
            friends experience together.
          </p>
        </div>
      </section>
      
      <section className="social-section common-4-6-pan">
        <div className="left-pan sub-title">
          <div className="sub-title-content">
            <h1>Social, Data, Commerce: <br/>Under Your Roof</h1>
          </div>
        </div>
        <div className="right-pan">
          <p className="content">
            Our Buy Button opens up right on your page to simplify 
            e-commerce into a seamless process. <strong>Consumers complete 
            transactions, share purchase info, and invite friends with just
            a few clicks.</strong> No redirects, no forced account creations. All of
            our partners get an account with WeFevo, our backend 
            platform that allows them to customize offers, expand social
            opportunities, and capture significant consumer data.
          </p>
          <div className="get-started">
            Get Started with Fevo
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </div>
        </div>
      </section>
      <section className="launch-section" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
        <div className="launch-container">
          <div className="title">Launch Your Campaign in Three Clicks</div>
          <div className="sub-title">
            <div className="sub-title-content top-bar center">
              You can build and launch your own offer pages with customizable images, 
              logos, and descriptions. Layer in marketing pixels and customize inventory 
              pulled right from your ticketing system.
            </div>
          </div>
          <div className="launch-items container">
            <div className="row">
              <div className="col-3">
                <div className="launch-item">
                  <img src={prjImg1} alt="" />
                  <div className="item-name">Create Event</div>
                </div>
              </div>
              <div className="col-6">
                <div className="launch-item active">
                  <img src={prjImg2} alt="" />
                  <div className="item-name">Edit Details</div>
                </div>
              </div>
              <div className="col-3">
                <div className="launch-item">
                  <img src={prjImg3} alt="" />
                  <div className="item-name">Add Inventory</div>
                </div>
              </div>
            </div>
          </div>
          <div className="down-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div className="access-container">
          <div className="title">Access all your buyer data with WeFevo Reporting</div>
          <div className="sub-title">
            <div className="sub-title-content top-bar center">
              Take control of your ticket sales with access to real-time data.
            </div>
          </div>
          <div className="row">
            <div className="col-5 access-img">
              <img src={accessImg} alt=""/>
            </div>
            <div className="col-7 access-items">
              <div className="access-item">
                <FontAwesomeIcon icon={faCheckCircle}/>
                Live data and reporting on all your events, offers, and fans
              </div>
              <div className="access-item">
                <FontAwesomeIcon icon={faCheckCircle}/>
                Track metrics and identify mobilizers
              </div>
              <div className="access-item">
                <FontAwesomeIcon icon={faCheckCircle}/>
                Handle real-time customer service
              </div>
            </div>
          </div>
          <div className="down-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div className="stats-container">
          <div className="title">Great stats across the board from our 200+ live events partners</div>
          <div className="sub-title">
            <div className="sub-title-content top-bar center">
              Fevo connects your group sales and marketing efforts, facilitating 
              incremental revenue through a fully mobile platform that rewards 
              social sharing and group growth. That means more data to optimize 
              your sales and marketing initiatives. 
            </div>
          </div>
          <div className="row">
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
export default enhance(AboutFevoFansPage);
