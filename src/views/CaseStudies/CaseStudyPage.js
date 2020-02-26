import React from "react";

import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import './CaseStudyPage.scss';
import heroBgImg from '../../assets/bg-images/case-study-home/fevo-bg-white.png';
import {dataSelector} from "../../modules/app";
import { NavLink } from "react-router-dom";

const CaseStudyPage = ({data}) => {

  return (
    <>
      <section className="case-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="case-hero-container" >
          <h1>Milwaukee Bucks</h1>
          <div className="featured">
            Featured Case Studies
          </div>
          <div className="featured-logos">
            {
              data && data.featuredItems.map((item, id) => {
                return (
                  <img src={item.img} alt="" key={id}/>
                )
              })
            }
          </div>
          <div className="overview-link">
            <NavLink to="#">
              <FontAwesomeIcon icon={faArrowDown}/>
              Blog
            </NavLink>
          </div>
        </div>
      </section>
      {
        data && data.featuredItems.map((item, id) => {
          return (
            <section className="case-item-section" style={{backgroundImage: `url(${item.bgImg})`}} key={id}>
              <div className="row">
                <div className="col-12 col-sm-7 mb-5">
                  <h1>{item.title}</h1>
                  <NavLink to={`/case-study/${id}`}>
                    View Case Study 
                    <FontAwesomeIcon icon={faArrowRight} />
                  </NavLink>
                </div>
                <div className="col-12 col-sm-5 item-logo">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </section>
          )
        })
      }
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(CaseStudyPage);
