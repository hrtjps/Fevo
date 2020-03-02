import React from "react";

import "./NextArticle.scss";
import { connect } from "react-redux";
import { dataSelector } from "../modules/app";
import { NavLink } from "react-router-dom";
const Newsletter = ({data, curId}) => {
  const id=(curId+1)%4;
  const item = data.blogItems[id];
  return (
    <div className="next-article-container">
      <div className="blog-title">Read Next Article</div>
      <div className="next-item">
        <img src={item.heroImg} className="next-item-img" alt=""/>
        <div className="post-item">
          <NavLink to={`/about/brands/view/${id}`} className="blog-title">{item.title}</NavLink>
          <div className="info">
            By <span className="author">{item.author}</span> - {item.posted}
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