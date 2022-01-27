// React
import React, { useEffect } from "react";
// React Router Dom
import { useParams } from "react-router-dom";
// App Components
import NotFound from "./NotFound";
import Photo from "./Photo";
import Loading from "./Loading";

/**
 * PhotoContainer Component
 * @param {object} props
 * @returns - Returns either the Image Results, Loading animation, or Not Found messae
 */
const PhotosContainer = ({ data, loading, onSearch }) => {
  // url param: /search/:query
  const { query } = useParams();
  /**
   * Hook that is run once, this allows you to type a seach into the url directly at /search/:query.
   * If the page has no data passed as a prop and the query param is set it requests another fetch api call using the onSearch callback function
   */
  useEffect(() => {
    if (data.length === 0 && query) {
      onSearch(query);
    }
  }, []);

  /**
   * imagesData()
   * @param {object[]} data - Data from the fetch api response
   * @returns - Returns an data used to create images
   */
  const imagesData = (data) => {
    let images = [];
    data.forEach((img, index) => {
      images.push({
        key: index,
        src: `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`,
        alt: img.title,
      });
    });
    return images;
  };

  const images = imagesData(data);
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {loading ? (
          <Loading />
        ) : data.length !== 0 ? (
          images.map((image, index) => (
            <Photo key={image.key} src={image.src} alt={image.alt} />
          ))
        ) : (
          <NotFound />
        )}
      </ul>
    </div>
  );
};

export default PhotosContainer;
