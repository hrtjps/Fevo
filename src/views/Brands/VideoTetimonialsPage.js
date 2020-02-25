import React from "react";

import { connect } from "react-redux";

import './VideoTetimonialsPage.scss';
import heroBgImg from '../../assets/bg-images/home/fevo-black-cloth.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { dataSelector } from "../../modules/app";
import VideoTag from "../../components/VideoTag";
import Testimonial from "../../components/Testimonial";
import BackToTop from "../../components/BackToTop";

const VideoTetimonialsPage = ({ data}) => {
  return (
    <>
      <section className="video-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="video-hero-container common-4-6-pan" >
          <div className="left-pan">
            <h1>The Fevo Effect</h1>
            <div className="subtitle">Hear about the power of Fevo from the people who use it most.</div>
            <div className="overview-link">
              <NavLink to="#" >
                <FontAwesomeIcon icon={faArrowDown}/>
                Testimonials
              </NavLink>
            </div>
          </div>
          <div className="right-pan">
            <VideoTag url={""}/>
          </div>
        </div>
      </section>
      <section className="video-section">
        {
          data.testimonialItems.map((item, i) => (
            <Testimonial item={{...item, id: i}} key={i}/>
          ))
        }
      </section>
      <section className="bottom">
        <BackToTop />
      </section>
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = (connect(mapState, mapProps));
export default enhance(VideoTetimonialsPage);
