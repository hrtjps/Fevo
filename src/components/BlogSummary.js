import React from "react";

import "./BlogSummary.scss";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const BlogSummary = ({data, item}) => {
  return (
    <div className="blog-item">
      <h2>{item.title}</h2>
      <div className="blog-info">
        <div>By <span className="author">{item.author}</span></div>
        <div>{item.posted}</div>
        <div>{item.comments} comments</div>
      </div>
      <img src={item.heroImg} alt="" />
      <div className="summary">{item.summary}</div>
      <Button variant="outline-secondary" >Read more</Button>
    </div>
  );
};

const mapState = state => ({
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(BlogSummary);