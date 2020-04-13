import React from "react";

import { connect } from "react-redux";

import './CompanyPage.scss';
import heroBgImg from '../assets/bg-images/company/group-2.png';
import { dataSelector } from "../modules/app";

const CompanyPage = ({ data}) => {
  return (
    <>
      <section className="company-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="company-hero-container d-flex flex-column flex-md-row justify-content-evenly w-100">
          <div className="left-pan px-4">
            <h1>Meet Our Team</h1>
          </div>
          <div className="right-pan px-4">
            <strong>FEVO is a company on a mission to bring us all together with our tribe. </strong> 
            Located in New York City, if you’re passionate about advancing the way people connect, join us!
          </div>
        </div>
      </section>
      <section className="member-section">
        <div className="member-container">
          <div className="team">
            <div className="our-team">Our Team</div>
            <div>
              FEVO is a company on a mission to bring us all together with our tribe. 
              Located in New York City, if you’re passionate about advancing the way 
              people connect, join us!
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
