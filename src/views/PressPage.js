import React from "react";

import { connect } from "react-redux";

import './PressPage.scss';
import heroBgImg from '../assets/bg-images/blogs/group-5.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import PressItem from "../components/PressItem";
import { dataSelector } from "../modules/app";

const Blogs = ({ data}) => {
  return (
    <>
      <section className="press-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="press-hero-container" >
          <h1>Stay in the Know</h1>
          <div className="subtitle">Best practices, insights, and hot topics  </div>
          <div className="overview-link">
            <NavLink to="#" >
              <FontAwesomeIcon icon={faArrowDown}/>
              Overview & Results
            </NavLink>
          </div>
        </div>
      </section>
      <section className="press-section">
        {
          data.pressItems.map((item, i) => (
            <PressItem item={{...item, id: i}} key={i}/>
          ))
        }
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
export default enhance(Blogs);
