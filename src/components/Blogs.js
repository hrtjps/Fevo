import React from "react";

import { connect } from "react-redux";

import './Blogs.scss';
import heroBgImg from '../assets/bg-images/blogs/group-5.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import BlogSummary from "./BlogSummary";
import Newsletter from "./Newsletter";
import BackToTop from "./BackToTop";

const Blogs = ({ data, darkTheme}) => {
  return (
    <>
      <section className="blog-hero-section" style={{backgroundImage: `url(${heroBgImg})`}}>
        <div className="blog-hero-container" >
          <h1>Stay in the Know</h1>
          <div className="subtitle">Best practices, insights, and hot topics  </div>
          <div className="overview-link">
            <NavLink to="#" >
              <FontAwesomeIcon icon={faArrowDown}/>
              Overview & Results
            </NavLink>
          </div>
        </div>
      </section>
      <section className={darkTheme?"blogs-section dark":"blogs-section"}>
        <div className="blogs">
          {
            data.blogItems.map((item, i) => (
              <BlogSummary item={{...item, id: i}} key={i} darkTheme={darkTheme}/>
            ))
          }
        </div>
        <div className="subscribe">
          <Newsletter darkTheme={darkTheme}/>
        </div>
        <BackToTop/>
      </section>
    </>
  );
};

const mapState = state => ({
});
const mapProps = {
  
};
const enhance = (connect(mapState, mapProps));
export default enhance(Blogs);
