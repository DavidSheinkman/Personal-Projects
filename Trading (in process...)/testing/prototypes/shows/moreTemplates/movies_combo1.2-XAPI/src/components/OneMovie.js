import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./OneMovie.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OneMovie = () => {
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

    

    fetchMovieInfo();

    
  }, [movie]);



  return (
    <div className={styles.modal}>
      {movieInfo && (
        <div className={styles.movieItemContainer}>
          <div className={styles.movieItemContainer2}>
            <div>
              <img className={styles.movieImg} src={movie.Poster} alt={movie.title} />
            </div>
            <div className={styles.movieDetails}>
              <h1 className={styles.movieTitle}>{movie.Title}</h1>
              <p className={styles.release_date}>{movie.Year}</p>
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