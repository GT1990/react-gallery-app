// React
import React from "react";
// App Component
import ErrorIcon from "./ErrorIcon";

/**
 * Error Component
 * @param {object} props - props.error
 * @returns - Returns error icon and error message
 */
const Error = ({ error }) => {
  return (
    <div className="error">
      <ErrorIcon />
      <h2>{error ? error : "Error, Please Try Again"}</h2>
    </div>
  );
};

export default Error;
