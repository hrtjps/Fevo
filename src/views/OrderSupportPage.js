import React from "react";

import { connect } from "react-redux";

import './OrderSupportPage.scss';
import heroBgImg from '../assets/bg-images/order-support/group-4.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { dataSelector } from "../modules/app";
import BackToTop from "../components/BackToTop";

const OrderSupportPage = ({ data}) => {
  return (
    <>
      <section className="support-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="support-hero-container" >
          <h1>Need help with an order? </h1>
          <div className="subtitle">Give us a shout to support@fevo.com</div>
          <div className="overview-link">
            <NavLink to="#" >
              <FontAwesomeIcon icon={faArrowDown}/>
              Jump to FAQ’s 
            </NavLink>
          </div>
        </div>
      </section>
      <section className="support-section">
        <div className="support-container">
          <div className="support-form">
            <div className="order-support">
              Order Support
            </div>
          </div>
          {
            data.faqItems.map((item, i) => (
              <div className="faq-item">
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
