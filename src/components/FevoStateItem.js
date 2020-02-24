import React from "react";

import "./FevoStateItem.scss";
import { connect } from "react-redux";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const FevoStateItem = ({data, item}) => {
  return (
    <div className="state-item">
      <div className="circular-progress">
        <CircularProgressbarWithChildren value={item.value} strokeWidth={3} background={false}>
          <div className="progress-content">
            <img src={item.itemImg} alt="" />
            <div className="value">8%</div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="state-content">
        <div className="state-title">
          {item.title}
        </div>
        <div>
          <strong>{item.strong} </strong>
          {item.content}
        </div>
      </div>
    </div>
  );
};

const mapState = state => ({
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(FevoStateItem);