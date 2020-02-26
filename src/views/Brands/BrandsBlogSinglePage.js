import React from "react";

import { connect } from "react-redux";

import {dataSelector} from "../../modules/app";
import Blog from "../../components/Blog";


const BrandsBlogSinglePage = ({match}) => {
  const id = match.params.id;
  return (
    <Blog id={id} />
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(BrandsBlogSinglePage);
