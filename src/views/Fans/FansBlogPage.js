import React from "react";
import { connect } from "react-redux";
import {dataSelector} from "../../modules/app";
import Blogs from "../../components/Blogs";

const FansBlogPage = ({data}) => {
  return (
    <>
      <Blogs darkTheme data={data}/>
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = (connect(mapState, mapProps));
export default enhance(FansBlogPage);
