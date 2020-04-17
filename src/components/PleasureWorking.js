import React, { useState, useEffect, useRef } from "react";

import "./PleasureWorking.scss";
import { connect } from "react-redux";
import {dataSelector} from "../modules/app";
import { Carousel } from "react-bootstrap";
import { CarouselItem } from "react-bootstrap";
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
  const carousel = useRef();
  const changeSize = () => {
    setWorkingItems(chunk(data.workingItems));
  }
  const prev=()=>{
    carousel.current.slidePrev();
  }
  const next=()=>{
    carousel.current.slideNext();
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
            // stagePadding={{
            //   paddingLeft: 7,
            //   paddingRight: 7,
            // }}
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
        {/* <Carousel indicators={false} controls={false} activeIndex={index}
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
         */}
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