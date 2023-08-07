import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieItem = ({ movie, onClick, onClick2 }) => {
  return (
    <div className={styles.movieItemContainer}>
      <Link
        
        onClick={onClick}
        to={`movie/${movie.Title}`}
      >
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
          
          onClick={onClick}
          to={`movie/${movie.Title}`}
        >
          <h1 className={styles.movieTitle}>{movie.Title}</h1>
        </Link>

        <p className={styles.release_date}>{movie.Year}</p>
        <p className={styles.vote_average}>7</p>
      </div>
      <div className={styles.moreInfoButtonContainer}>
        <button className={styles.moreInfoButton} onClick={onClick2}>
          <AiOutlineInfoCircle />
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
