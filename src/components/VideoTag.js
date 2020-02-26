import React, { useState } from "react";

import "./VideoTag.scss";
import img from '../assets/icons/triangle.png';
import { Modal } from "react-bootstrap";

const VideoTag = ({ url, onPlay, modal }) => {
  const [show, setShow]=useState(false);
  const playVideo = ()=>{

  }
  return (
    <>
      <div className="video-tag">
        <div className="video-content">
          <div className="play-button" onClick={()=>{setShow(true)}}>
            <img src={img} alt=""/>
          </div>
        </div>
      </div>
      
      <Modal show={show} onHide={()=>setShow(false)} centered size="lg">
        <div className="video-modal-body">
          <div className="close-btn" onClick={()=>setShow(false)}>x</div>
          <div className="video-tag">
            <div className="video-content">
              <div className="play-button" onClick={()=>{playVideo()}}>
                <img src={img} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoTag;
