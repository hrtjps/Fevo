import React, { useState, useEffect } from "react";

import "./PleasureWorking.scss";
import { connect } from "react-redux";
import {dataSelector} from "../modules/app";
import { Carousel } from "react-bootstrap";
import { CarouselItem } from "react-bootstrap";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const responsive = [
  {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1400 },
    items: 5,
  },
  {
    breakpoint: { max: 1399, min: 900 },
    items: 3,
  },
  {
    breakpoint: { max: 899, min: 680 },
    items: 2,
  },
  {
    breakpoint: { max: 680, min: 0 },
    items: 1,
  },
];
const chunk= (arr) => {
  const w = window.innerWidth;
  for(let j=0; j<responsive.length; j++) {
    const item = responsive[j];
    if(item.breakpoint.max >= w && w >= item.breakpoint.min) {
      let results = [];
      for (let i = 0, len = arr.length; i < len; i += item.items) {
        results.push(arr.slice(i, i + item.items));
      }
      return results;
    }
  }
  return [arr];
}

const PleasureWorking = ({data}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [workingItems, setWorkingItems]=useState(chunk(data.workingItems))
  const changeSize = () => {
    setWorkingItems(chunk(data.workingItems));
  }
  const prev=()=>{
    setIndex((index+1)%workingItems.length);
    setDirection("prev");
  }
  const next=()=>{
    setIndex((index+workingItems.length-1)%workingItems.length);
    setDirection("next");
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  useEffect(()=>{
    // changeSize();
    window.addEventListener('resize', changeSize);
    return () => {
      window.removeEventListener('resize', changeSize);
    }
  })
  return (
    <div className="working-container">
      <div className="title">
        We’ve had the pleasure working with
      </div>
      <div className="carousel-body">
        <Carousel indicators={false} controls={false} activeIndex={index}
          interval={null} onSelect={handleSelect} direction={direction}>
        {
          workingItems.map((e, i) => {
            return (
              <CarouselItem key={i}>
                <div className="working-items">
                {
                  e.map((el, j) => {
                    return (
                      <div key={j} className="working-item">
                        <img src={el.img} alt=""/>
                      </div>
                    )
                  })
                }
                </div>
              </CarouselItem>
            )
          })
        }
        </Carousel>
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