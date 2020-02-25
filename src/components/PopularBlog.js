import React from "react";

import "./PopularBlog.scss";
import { connect } from "react-redux";

const PopularBlog = ({data, item}) => {
  return (
    <div className="blog-item">
      
    </div>
  );
};

const mapState = state => ({
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(PopularBlog);