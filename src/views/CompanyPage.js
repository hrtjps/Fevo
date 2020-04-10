import React from "react";

import { connect } from "react-redux";

import './CompanyPage.scss';
import heroBgImg from '../assets/bg-images/company/group-2.png';
import { dataSelector } from "../modules/app";

const CompanyPage = ({ data}) => {
  return (
    <>
      <section className="company-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="company-hero-container common-4-6-pan" >
          <div className="left-pan">
            <h1>Meet Our Team</h1>
          </div>
          <div className="right-pan">
            <strong>FEVO is a company with a purpose headquartered in New York City. </strong> 
            If you’re passionate about changing the way people connect, join us.
          </div>
        </div>
      </section>
      <section className="member-section">
        <div className="member-container">
          <div className="team">
            <div className="our-team">Our Team</div>
            <div>
              consectetur adipiscing elit. Integer 
              bibendum ut ligula vel lacinia. Donec 
              blandit tincidunt felis non rhoncus. consectetur
            </div>
          </div>
          {
            data.teamMembers.map((item, i) => (
              <div className="member-item" key={i}>
                <div className="member-photo"></div>
                <div className="member-name">{item.name}</div>
                <div>{item.role}</div>
              </div>
            ))
          }
        </div>
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
export default enhance(CompanyPage);
