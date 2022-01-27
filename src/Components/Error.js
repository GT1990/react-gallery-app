import React from "react";
import ErrorIcon from "./ErrorIcon";

const Error = ({ error }) => {
  return (
    <div className="error">
      <ErrorIcon />
      <h2>{error ? error : "Error, Please Try Again"}</h2>
    </div>
  );
};

export default Error;
