import React from "react";

import { connect } from "react-redux";

import './BackToTop.scss';
import {dataSelector} from "../modules/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const BackToTop = () => {
  const scropllTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="back-top" onClick={scropllTop}>
      <FontAwesomeIcon icon={faArrowUp} />
      Back to Top
    </div>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(BackToTop);
