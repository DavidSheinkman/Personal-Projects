import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MoviePopUp.module.css";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const MoviePopUp = ({ onClose }) => {
  const movie = useSelector((state) => state.moviesettings.movie);

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
    <div className={styles.modal}>
      {movieInfo && (
        <div className={styles.movieItemContainer}>
          <div className={styles.movieItemContainer2}>
            <div>
              <img
                className={styles.movieImg}
                src={movieInfo.Poster}
                alt={movieInfo.Title}
              />
            </div>
            <div className={styles.movieDetails}>
              <h1 className={styles.movieTitle}>{movieInfo.Title}</h1>
              <p className={styles.release_date}>
                {movieInfo.Year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {movieInfo.Runtime}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {movieInfo.Rated}
              </p>
              <p className={styles.genre}>{movieInfo.Genre}</p>

              <p className={styles.vote_average}>
                {" "}
                <span className={styles.star}>
                  <AiFillStar />
                </span>{" "}
                {movieInfo.imdbRating}
                <span className={styles.vote10}>/10</span>{" "}
                <span className={styles.bluestar}>
                  <AiOutlineStar /> Rate
                </span>{" "}
              </p>
            </div>
            <div className={styles.moreInfoButtonContainer}>
              <button className={styles.moreInfoButton} onClick={onClose}>
                X
              </button>
            </div>
          </div>
          <div className={styles.overview}>{movieInfo.Plot}</div>

          <p className={styles.directorStarsLabel}>
            Director{" "}
            <a className={styles.directorStars}> {movieInfo.Director}</a>{" "}
          </p>
          <p className={styles.directorStarsLabel}>
            Stars <a className={styles.directorStars}>{movieInfo.Actors}</a>
          </p>
          <div className={styles.lastButtons}>
            <button className={styles.trailerButton}>
              <BsFillPlayFill /> Trailer
            </button>
            <button className={styles.watchListButton}>
              <AiOutlinePlus /> Watchlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePopUp;
