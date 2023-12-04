import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const MovieItem = ({ movie, onClick, onClick2 }) => {
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      if (movie) {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=10fe05bc&i=${movie.imdbID}`
          );
          const movieData = response.data;
          setMovieInfo(movieData);
          console.log(response.data);
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
    <div className={styles.movieItemContainer}>
      {movieInfo && (
        <Fragment>
          <Link onClick={onClick} to={`movie/${movie.imdbID}`}>
            <div>
              <img
                className={styles.movieImg}
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
          </Link>

          <div className={styles.movieDetails}>
            <Link
              className={styles.link}
              onClick={onClick}
              to={`movie/${movie.imdbID}`}
            >
              <h1 className={styles.movieTitle}>{movie.Title}</h1>
            </Link>

            <p className={styles.release_date}>
              {movieInfo.Year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {movieInfo.Runtime}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {movieInfo.Rated}
            </p>
            <p className={styles.vote_average}>
              {" "}
              <span className={styles.star}>
                <AiFillStar />
              </span>{" "}
              {movieInfo.imdbRating}
              <span className={styles.vote10}> (2.8M) </span>{" "}
              <span className={styles.bluestar}>
                <AiOutlineStar /> Rate
              </span>{" "}
            </p>
          </div>
          <div className={styles.moreInfoButtonContainer}>
            <button className={styles.moreInfoButton} onClick={onClick2}>
              <AiOutlineInfoCircle />
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MovieItem;
