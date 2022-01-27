// React
import React from "react";

/**
 * Photo Component
 * @param {object} props - image src and alt
 * @returns - Returns a list item with an image inside
 */
const Photo = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

export default Photo;
