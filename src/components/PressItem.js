import React from "react";

import { connect } from "react-redux";

import './PressItem.scss';
import {dataSelector} from "../modules/app";
import arrowRightIcon from '../assets/icons/arrow-right.png';

const PressItem = ({item}) => {
  return (
    <div className="press-item">
      <div className="press-img">
        <img src={item.img}  alt="" />
      </div>
      <div className="press-content">
        <div className="content">
          <div className="title">{item.title}</div>
          {item.content}
        </div>
        <div className="read-story">
          Read Story
          <img src={arrowRightIcon} alt=""/>
        </div>
      </div>

    </div>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(PressItem);
