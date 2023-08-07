import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MovieInfo.module.css";
import { useSelector } from "react-redux";


const MovieInfo = ({onClose}) => {
  const movie = useSelector((state) => state.moviesettings.movie);

  const [movieInfo, setMovieInfo] = useState(null);


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
             
              <button className={styles.moreInfoButton} onClick={onClose}>
                X
              </button>
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

export default MovieInfo;
