import React, { useState } from "react";

import "./PleasureWorking.scss";
import { connect } from "react-redux";
import {dataSelector} from "../modules/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PleasureWorking = ({data}) => {
  const [curNo, setCurNo] = useState(0);
  return (
    <div className="working-container">
      <div className="title">
        We’ve had the pleasure working with
      </div>
      <div className="items-body">
        <div className="working-items">
          {
            data.workingItems.map((e, i) => {
              return (
                <div key={i} className="working-item" onClick={()=>setCurNo(i)}>
                  <img src={e.img} alt=""/>
                </div>
              )
            })
          }
        </div>
        <div className="arrow-cursor left"><FontAwesomeIcon icon={faChevronLeft}/></div>
        <div className="arrow-cursor right"><FontAwesomeIcon icon={faChevronRight}/></div>
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
export default enhance(PleasureWorking);