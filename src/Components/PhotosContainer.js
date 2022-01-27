import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// App Components
import NotFound from "./NotFound";
import Photo from "./Photo";
import Loading from "./Loading";

const PhotosContainer = ({ data, loading, onSearch }) => {
  const { query } = useParams();
  useEffect(() => {
    if (data.length === 0 && query) {
      onSearch(query);
    }
  }, []);

  const createImages = (data) => {
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

  const images = createImages(data);
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
