import React from "react";

import "./Testimonial.scss";
import VideoTag from "./VideoTag";

const Testimonial = ({ item }) => {
  return (
    <div className="testimonial-item">
      <div className="row">
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <VideoTag url={item.url}/>
        </div>
        <div className="col-12 col-md-6 testimonial-content">
          <div className="testimonial-title">{item.title}</div>
          <div>{item.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
