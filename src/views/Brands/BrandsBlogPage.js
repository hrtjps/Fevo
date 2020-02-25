import React from "react";

import { connect } from "react-redux";

import './BrandsBlogPage.scss';
import heroBgImg from '../../assets/bg-images/blogs/group-5.png';
import {dataSelector} from "../../modules/app";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import BlogSummary from "../../components/BlogSummary";
import Newsletter from "../../components/Newsletter";


const BrandsBlogPage = ({data}) => {

  return (
    <>
      <section className="blog-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="blog-hero-container" >
          <h1>Stay in the Know</h1>
          <div className="subtitle">Best practices, insights, and hot topics  </div>
          <div className="overview-link">
            <NavLink to="#">
              <FontAwesomeIcon icon={faArrowDown}/>
              Overview & Results
            </NavLink>
          </div>
        </div>
      </section>
      <section className="blogs-section">
        <div className="blogs">
          {
            data.blogItems.map((item, i) => (
              <BlogSummary item={item} key={i} />
            ))
          }
        </div>
        <div className="subscribe">
          <Newsletter />
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
const enhance = connect(mapState, mapProps);
export default enhance(BrandsBlogPage);
