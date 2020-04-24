import React, { useRef } from "react";

import { connect } from "react-redux";

import './OrderSupportPage.scss';
import heroBgImg from '../assets/bg-images/order-support/group-4.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import BackToTop from "../components/BackToTop";
import { FormControl, FormCheck, InputGroup } from "react-bootstrap";
import { dataSelector } from "../modules/app";
import { Button } from "react-bootstrap";

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
          <div className="subtitle">Give us a shout to support@fevo.com</div>
          <div className="overview-link">
            <NavLink to="#" onClick={scropllToFaq}>
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
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="label">Issue Type</div>
                <FormControl as="select">
                  <option>- Select one -</option>
                  <option>Issue with a ticket</option>
                  <option>Other</option>
                </FormControl>
              </div>
              <div className="col-12 col-md-8">
                <div className="label">Please select the option that most closely applies to your situation:</div>
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                    <FormCheck custom type="radio" id="situation1" name="situation" label="Haven’t received my ticket/product(s)"></FormCheck>
                    <FormCheck custom type="radio" id="situation2" name="situation" label="Can’t access my ticket/product(s)"></FormCheck>
                    <FormCheck custom type="radio" id="situation3" name="situation" label="Trouble purchasing"></FormCheck>
                    <FormCheck custom type="radio" id="situation4" name="situation" label="Group Question"></FormCheck>
                    <FormCheck custom type="radio" id="situation5" name="situation" label="Seating Adjustment"></FormCheck>
                  </div>
                  <div className="col-12 col-sm-6 ">
                    <FormCheck custom type="radio" id="situation6" name="situation" label="Benefit Redemption"></FormCheck>
                    <FormCheck custom type="radio" id="situation7" name="situation" label="Refund Request"></FormCheck>
                    <FormCheck custom type="radio" id="situation8" name="situation" label="General Question"></FormCheck>
                    <FormCheck custom type="radio" id="situation9" name="situation" label="Other"></FormCheck>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="label">Question/Issues</div>
                <FormControl as="textarea"></FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="label">Event Name</div>
                <FormControl as="input"></FormControl>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="label">Date of Event</div>
                <InputGroup>
                  <FormControl as="input"></FormControl>
                  <InputGroup.Append>
                    <Button variant="outline-secondary">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>

              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="label">Contact Email</div>
                <FormControl as="input" ></FormControl>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="label">Email Used to Purchase</div>
                <FormControl as="input"></FormControl>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="label">Order Number</div>
                <FormControl as="input"></FormControl>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12">
                <button className="form-control custom-button">SUBMIT</button>
              </div>

            </div>
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
