import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ShowInfo.module.css";

const ShowInfo = ({ show, onClose }) => {
  const [showInfo, setShowInfo] = useState(null);
  let imgsrc =
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTU0ZTU2YmZlMGQ3ZTY1ZWQ0YzUwYWJmZWMwZTdiZiIsInN1YiI6IjY0Y2JhNGU1NDNjZDU0MDBjNTI2YTY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_Xgw_1RXv9ni1qzgn-RQBrekQTLv8tXaGzjtALhrZo",
    },
  };

  useEffect(() => {
    const fetchShowInfo = async () => {
      if (show) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${show.id}?language=en-US`,
            options
          );
          const showData = response.data;
          setShowInfo(showData);
        } catch (error) {
          console.error("Error fetching shows:", error);
        }
      } else {
        setShowInfo(null);
      }
    };

    // Set a new timeout for 500ms after the user stops typing

    fetchShowInfo();

    // Cleanup function to clear the timeout on unmount or when the query changes
  }, []);

 

  if (showInfo) {
   
    if (showInfo.poster_path) {
      imgsrc = `https://image.tmdb.org/t/p/w500${showInfo.poster_path}`;
    }
  }

  return (
    <div className={styles.modal}>
      {showInfo && (
        <div className={styles.showItemContainer}>
          <div className={styles.showItemContainer2}>
            <div>
              <img className={styles.movieImg} src={imgsrc} alt={show.title} />
            </div>
            <div className={styles.showDetails}>
              <h1 className={styles.showTitle}>{show.title}</h1>
              <p className={styles.release_date}>{show.release_date}</p>
              <p className={styles.vote_average}>{show.vote_average}</p>
            </div>
            <div className={styles.moreInfoButtonContainer}>
              <button className={styles.moreInfoButton} onClick={onClose}>
                X
              </button>
            </div>
          </div>
          <div className={styles.overview}>
            <p>{showInfo.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowInfo;
