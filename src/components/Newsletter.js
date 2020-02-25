import React from "react";

import "./Newsletter.scss";
import { connect } from "react-redux";
import { dataSelector } from "../modules/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
const Newsletter = ({data, item}) => {
  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <div className="email-newsletter">Email newsletter</div>
        <div className="description">Sign up to receive market insights on today’s latest hot topics</div>
        <input className="form-control" placeholder="Your name"/>
        <input className="form-control" placeholder="Your email address"/>
        <button className="form-control">SUBSCRIBE NOW</button>
      </div>
      <div className="posts">
        <div className="blog-title">Popular posts</div>
        {
          data.blogItems.map((item, i)=>(
            <div className="post-item" key={i}>
              <NavLink to={`/brands/view/${i}`} className="blog-title">{item.title}</NavLink>
              <div className="info">
                By <span className="author">{item.author}</span> - {item.posted}
              </div>
            </div>
          ))
        }
        
      </div>
      
      <div className="tags">
        <div className="blog-title">Tags</div>
        <div className="tag-items">
          {
            data.tagItems.map((item, i)=>(
              <div className="tag-item" key={i}>{item}</div>
            ))
          }
        </div>
      </div>
      <div className="instagram">
        <div className="blog-title">Instagram</div>
        <div className="insta-items">
          {
            data.instagramImgs.map((item, i)=>(
              <img src={item.img} alt="" key={i}/>
            ))
          }
        </div>
        <button className="form-control">Follow</button>
      </div>
      <div className="keep-in-touch">
        <div className="blog-title">Keep in touch</div>
        <div className="d-flex justify-content-between">
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
    </div>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(Newsletter);