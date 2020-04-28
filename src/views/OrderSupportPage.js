import React, { useRef } from "react";

import { connect } from "react-redux";

import './OrderSupportPage.scss';
import heroBgImg from '../assets/bg-images/order-support/group-4.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import BackToTop from "../components/BackToTop";
import { dataSelector } from "../modules/app";

const OrderSupportPage = ({ data}) => {
  const faqSection = useRef();
  const scropllToFaq=()=>{
    console.log(faqSection);
    window.scrollTo({
      top: faqSection.current.offsetTop - 55,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <section className="support-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="support-hero-container" >
          <h1>Need help with an order? </h1>
          <div className="subtitle">Click the help button on the bottom right corner</div>
          <div className="overview-link">
            <NavLink to="#" onClick={scropllToFaq}>
              <FontAwesomeIcon icon={faArrowDown}/>
              Jump to FAQ’s 
            </NavLink>
          </div>
        </div>
      </section>
      <section className="faq-section" ref={faqSection}>
        <div className="faq-container">
          {
            data.faqItems.map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question">
                  {item.question}
                </div>
                {item.answer}
              </div>
            ))
          }
        </div>
      </section>
      <section className="bottom">
        <BackToTop />
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
export default enhance(OrderSupportPage);
