import React from "react";

import { connect } from "react-redux";

import './BrandsBlogSinglePage.scss';
import {dataSelector} from "../../modules/app";
import Newsletter from "../../components/Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NextArticle from "../../components/NextArticle";


const BrandsBlogSinglePage = ({match, data}) => {
  const id = match.params.id;
  const blog = data.blogItems[id];

  return (
    <>
      <section className="blog-hero-section" style={{backgroundImage: `url(${blog.heroImg})`}}>
        <div className="blog-hero-container" >
        </div>
      </section>
      <section className="blog-section">
        <div className="blog">
          <h1>{blog.title}</h1>
          <div className="blog-info">
            <div className="d-flex">
              <div className="cat">By <span className="author">{blog.author}</span></div>
              <div className="cat">{blog.posted}</div>
              <div className="cat">{blog.comments} comments</div>
            </div>
            <div className="d-flex">
              <div className="social-item">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faPinterestP} />
              </div>
              <div className="social-item">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="summary">{blog.summary}</div>
          <h2>{blog.subTitle}</h2>
          <div className="summary">{blog.content1}</div>
          <img src={blog.image} alt="" />
          <div className="summary">{blog.content2}</div>
          <NextArticle curId={id} />
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
export default enhance(BrandsBlogSinglePage);
