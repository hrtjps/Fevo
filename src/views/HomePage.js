import React from "react";

import { connect } from "react-redux";

const HomePage = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
              hello world
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = state => ({});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(HomePage);
