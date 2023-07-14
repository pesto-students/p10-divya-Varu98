import React from "react";

const withLogging = (Element) => {
  console.log("rendered");
  return (props) => {
    return <Element {...props} />;
  };
};

export default withLogging;
