import React from "react";

const Loading = () => {
  return <div className="animated fadeIn pt-1 text-center" style={
    {
      height: '100vh',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }>Loading...</div>;
};

export default Loading;
