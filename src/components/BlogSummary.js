import React from "react";

import "./BlogSummary.scss";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const BlogSummary = ({ darkTheme, item, history}) => {
  
  const viewDetail = (id) => {
    const url = (darkTheme?'/fans':'/about/brands') + '/view/'+id;
    history.push(url);
  }
  return (
    <div className={darkTheme?"blog-item dark":"blog-item"}>
      <h2 className={darkTheme?"dark":""}>{item.title}</h2>
      <div className="blog-info">
        <div>By <span className="author">{item.author}</span></div>
        <div>{item.posted}</div>
        <div>{item.comments} comments</div>
      </div>
      <img src={item.heroImg} alt="" />
      <div className="summary">{item.summary}</div>
      <Button variant="outline-secondary" onClick={()=>viewDetail(item.id)}>Read more</Button>
    </div>
  );
};

const mapState = state => ({
});
const mapProps = {
  
};
const enhance = (connect(mapState, mapProps));
export default withRouter(enhance(BlogSummary));