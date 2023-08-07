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
            `http://www.omdbapi.com/?apikey=10fe05bc&i=${movie.imdbID}`
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
    // <div className={styles.modal}>
    //   {movieInfo && (
    //     <div className={styles.movieItemContainer}>
    //       <div className={styles.movieItemContainer2}>
    //         <div>
    //           <img className={styles.movieImg} src={movieInfo.Poster} alt={movieInfo.Title} />
    //         </div>
    //         <div className={styles.movieDetails}>
    //           <h1 className={styles.movieTitle}>{movieInfo.Title}</h1>
    //           <p className={styles.release_date}>{movieInfo.Year}</p>
    //           <p className={styles.vote_average}>{movieInfo.imdbRating}</p>
    //         </div>
    //         <div className={styles.moreInfoButtonContainer}>
    //           <Link className={styles.moreInfoButton} to={`/`}>
    //             X
    //           </Link>
    //         </div>
    //       </div>
    //       <div className={styles.overview}>
    //         <p>{movieInfo.Plot}</p>
    //       </div>
    //     </div>
    //   )}
    // </div>

    <div className={styles.maincontainer}>
      {movieInfo && (
        <div className={styles.container}>
          <div className={styles.back}>
            <div className={styles.moreInfoButtonContainer}>
              <Link className={styles.moreInfoButton} to={`/`}>
                Go Back
              </Link>
            </div>
          </div>
          <div className={styles.header}>{movieInfo.Title}</div>
          <div className={styles.pictures}>
            <img
              className={styles.movieImg}
              src={movieInfo.Poster}
              alt={movieInfo.Title}
            />
          </div>
          <div className={styles.category}>{movieInfo.Title}</div>
          <div className={styles.plot}>{movieInfo.Plot}</div>
          <div className={styles.cast}>
            <div>{movieInfo.Title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneMovie;
