import React, { useRef } from "react";

import "./PleasureWorking.scss";
import { connect } from "react-redux";
import {dataSelector} from "../modules/app";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  640: { items: 2 },
  870: { items: 3 },
  1090: { items: 4 },
  1320: { items: 5 },
};
const PleasureWorking = ({data}) => {
  const carousel = useRef();
  const prev=()=>{
    carousel.current.slidePrev();
  }
  const next=()=>{
    carousel.current.slideNext();
  }
  return (
    <div className="working-container">
      <div className="title">
        Featured Partners
      </div>
      <div className="carousel-body">
        
        <div className="working-items">
          <AliceCarousel
            ref={carousel}
            dotsDisabled={true}
            autoPlay={false}
            duration={500}
            responsive={responsive}
            autoPlayInterval={4000}
            buttonsDisabled={true}
          >
            {
              data.workingItems.map((el, j) => {
                return (

                  <div key={j} className="working-item-container">
                    <div className="working-item">
                      <img src={el.img} alt=""/>
                    </div>
                  </div>
                )
              })
            }
          </AliceCarousel>
        </div>
        <div className="arrow-cursor left" onClick={()=>prev()}><FontAwesomeIcon icon={faChevronLeft}/></div>
        <div className="arrow-cursor right" onClick={()=>next()}><FontAwesomeIcon icon={faChevronRight}/></div>
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