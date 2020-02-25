import React from "react";

import { connect } from "react-redux";
import Blog from "../../components/Blog";


const FansBlogSinglePage = ({match}) => {
  const id = match.params.id;
  return (
    <Blog darkTheme id={id}/>
  );
};

const mapState = state => ({
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(FansBlogSinglePage);
