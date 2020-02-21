import React, { useState } from "react";

import "./SliderNavDot.scss";

const SliderNavDot = ({ dots }) => {
  const [curNo, setCurNo] = useState(0);
  return (
    <div className="dots">
      {
        Array.from(Array(dots), (e, i) => {
          return (
            <div key={i} className={i===curNo?"dot active":"dot"} onClick={()=>setCurNo(i)}></div>
          )
        })
      }
    </div>
  );
};

export default SliderNavDot;
