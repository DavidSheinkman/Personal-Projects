import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./OneMovie.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OneMovie = () => {
  const movie = useSelector((state) => state.moviesettings.movie);

  const [movieInfo, setMovieInfo] = useState(null);
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
    const fetchMovieInfo = async () => {
      if (movie) {
        try {
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=10fe05bc&i=${movie.imdbID}`,
            
          );
          const movieData = response.data;
          setMovieInfo(movieData);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      } else {
        setMovieInfo(null);
      }
    };

    // Set a new timeout for 500ms after the user stops typing

    fetchMovieInfo();

    // Cleanup function to clear the timeout on unmount or when the query changes
  }, [movie]);

  if (movieInfo) {
    if (movieInfo.poster_path) {
      imgsrc = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
    }
  }

  return (
    <div className={styles.modal}>
      {movieInfo && (
        <div className={styles.movieItemContainer}>
          <div className={styles.movieItemContainer2}>
            <div>
              <img className={styles.movieImg} src={movieInfo.Poster} alt={movieInfo.Title} />
            </div>
            <div className={styles.movieDetails}>
              <h1 className={styles.movieTitle}>{movieInfo.Title}</h1>
              <p className={styles.release_date}>{movieInfo.Year}</p>
              <p className={styles.vote_average}>{movieInfo.imdbRating}</p>
            </div>
            <div className={styles.moreInfoButtonContainer}>
              <Link className={styles.moreInfoButton} to={`/`}>
                X
              </Link>
            </div>
          </div>
          <div className={styles.overview}>
            <p>{movieInfo.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneMovie;
