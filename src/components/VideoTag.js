import React from "react";

import "./VideoTag.scss";
import img from '../assets/icons/triangle.png';

const VideoTag = ({ url }) => {
  return (
    <div className="video-tag">
      <div className="video-content">
        <div className="play-button">
          <img src={img} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default VideoTag;
