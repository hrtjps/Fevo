import React from "react";

import { connect } from "react-redux";

import './PressPage.scss';
import heroBgImg from '../assets/bg-images/press/group-9.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import PressItem from "../components/PressItem";
import { dataSelector } from "../modules/app";

const PressPage = ({ data}) => {
  return (
    <>
      <section className="press-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="press-hero-container" >
          <h1>In the Headlines</h1>
          <div className="subtitle">The latest press releases and media coverage  </div>
          <div className="overview-link">
            <NavLink to="#" >
              <FontAwesomeIcon icon={faArrowDown}/>
              Explore
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
export default enhance(PressPage);
