import React from "react";

import { connect } from "react-redux";

import './AboutFevoFansPage.scss';
import heroBgImg from '../../assets/bg-images/about_fevo-fans/group-2.png';
import phone1 from '../../assets/bg-images/about_fevo-fans/group-8.png';
import phone2 from '../../assets/bg-images/about_fevo-fans/group-8_2.png';
import experienceBgImg from '../../assets/bg-images/about_fevo-fans/rectangle.png';
import {dataSelector} from "../../modules/app";
import fevoBlackCloth from '../../assets/bg-images/home/fevo-black-cloth.png';
import { NavLink } from "react-router-dom";
import facebookIcon from '../../assets/icons/fb.png';
import instagramIcon from '../../assets/icons/insta.png';
import twitterIcon from '../../assets/icons/twitter.png';

const AboutFevoFansPage = ({data}) => {

  return (
    <>
      <section className="fans-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="fans-hero-container common-4-6-pan" >
          <div className="left-pan">
            <h1>FEVO for Fans</h1>
          </div>
          <div className="right-pan">
            <p className="content">
              In a world where social media seemingly rules,
              <strong> FEVO stands for experiencing life together in person.</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="experience-section common-4-6-pan">
        <div className="left-pan">
          <h1>Experience Life in Person</h1>
          <p className="content">
            Life doesn’t happen in your phone or under a 
            mountain of work, so look up! <strong>Fevo gives you 
            the power to unite the people you care about </strong>
            by making it easier than ever to rally your friends 
            for the moments you want to experience together.
          </p>
        </div>
        <div className="right-pan"  style={{backgroundImage: `url(${experienceBgImg})`}}>
        </div>
      </section>
      
      <section className="planning-section common-4-6-pan">
        <div className="left-pan">
          <div className="row">
            <div className="col-6">
              <img src={phone1} alt="" />
            </div>
            <div className="col-6">
              <img src={phone2} alt="" />
            </div>
          </div>
        </div>
        <div className="right-pan" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
          <h1>Planning Made Simple</h1>
          <p className="content">
            Coordinating plans with a group is inherently 
            complicated. <strong>Fevo provides a single link that 
            allows you to share event information, pay 
            individually, and reserve spots for your friends </strong>
            without having to put money down. Using that same 
            link, you’re able to see who’s going and who’s been invited. .
          </p>
          <div className="lets-go">Let’s Go!</div>
          <div className="links">
            <NavLink to="#"><img src={facebookIcon} alt="" /></NavLink>
            <NavLink to="#"><img src={instagramIcon} alt="" /></NavLink>
            <NavLink to="#"><img src={twitterIcon} alt="" /></NavLink>

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
