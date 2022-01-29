// React
import React, { useState, useEffect } from "react";
// React Router Dom
import { Routes, Route, useNavigate } from "react-router-dom";
// Axios (Fetch API)
import axios from "axios";
// CSS
import "../css/index.css";
import "../css/styles.css";
// App Components
import apiKey from "./config";
import PhotosContainer from "./PhotosContainer";
import Header from "./Header";
import Error from "./Error";

const App = () => {
  // State
  const [data, setData] = useState([]);
  const [orcas, setOrcas] = useState([]);
  const [jeep, setJeep] = useState([]);
  const [moraine_lake, setMoraine_lake] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const error404 = "Oppps! The Page Was Not Found!";

  /**
   * Hook that runs once on render and stores default data
   */
  useEffect(() => {
    preformSearch("moraine-lake");
    preformSearch("orcas");
    preformSearch("jeep");
  }, []);

  /**
   * createURL() takes a search query and returns the flickr api request url
   * @param {string} query - search query
   * @returns
   */
  const createURL = (query) => {
    const limit = 24,
      pages = 1,
      format = "json";

    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${limit}&page=${pages}&format=${format}&nojsoncallback=1`;
  };

  /**
   * preformSearch() takes a search query and fetches data from the flickr api using axios. Then stores the data in state based on the search.
   * @param {string} query - search query
   */
  const preformSearch = (query) => {
    setLoading(true); // so that loading animation renders on each search
    axios
      .get(createURL(query))
      .then(({ data }) => {
        switch (query) {
          case "moraine-lake":
            setMoraine_lake(data.photos.photo);
            setLoading(false);
            break;
          case "orcas":
            setOrcas(data.photos.photo);
            setLoading(false);
            break;
          case "jeep":
            setJeep(data.photos.photo);
            setLoading(false);
            break;
          default:
            setData(data.photos.photo);
            setLoading(false);
        }
      })
      .catch(() => {
        const error = "There was an error with the server, please try again.";
        setError(error);
        setLoading(false);
        navigate("/error");
      });
  };

  return (
    <>
      <Header onSearch={preformSearch} />
      <Routes>
        // Home Route
        <Route
          path="/"
          element={
            <PhotosContainer
              onSearch={preformSearch}
              loading={loading}
              data={moraine_lake}
            />
          }
        />
        // Default Search Route - Moraine Lake
        <Route
          path="/moraine-lake"
          element={
            <PhotosContainer
              onSearch={preformSearch}
              loading={loading}
              data={moraine_lake}
            />
          }
        />
        // Default Search Route - Orcas
        <Route
          path="/orcas"
          element={
            <PhotosContainer
              onSearch={preformSearch}
              loading={loading}
              data={orcas}
            />
          }
        />
        // Default Search Route - Jeep
        <Route
          path="/jeep"
          element={
            <PhotosContainer
              onSearch={preformSearch}
              loading={loading}
              data={jeep}
            />
          }
        />
        // Search Route
        <Route
          path="/search/:query"
          element={
            <PhotosContainer
              onSearch={preformSearch}
              loading={loading}
              data={data}
            />
          }
        />
        // Error Route
        <Route path="/error" element={<Error error={error} />} />
        // 404 Error Route
        <Route path="/*" element={<Error error={error404} />} />
      </Routes>
    </>
  );
};

export default App;
