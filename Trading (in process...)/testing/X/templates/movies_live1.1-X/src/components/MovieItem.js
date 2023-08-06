import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";



const MovieItem = ({  movie, onClick , onClick2 }) => {



  console.log(movie)

  let imgsrc =
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg";

    
  if (movie.poster_path) {
    imgsrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  return (
    <div className={styles.movieItemContainer}>
      <Link className={styles.moreInfoButton} onClick={onClick} to={`movie/${movie.title}`}>
        
      <div >
        <img className={styles.movieImg} src={movie.Poster} alt={movie.Title} />
      </div>
      
      </Link>
      
      <div className={styles.movieDetails}>
      <Link className={styles.moreInfoButton} onClick={onClick} to={`movie/${movie.Title}`}>
        
      <h1 className={styles.movieTitle} >{movie.Title}</h1>
        
        </Link>
      
        
        
        <p className={styles.release_date}>{movie.Year}</p>
        <p className={styles.vote_average}>{movie.vote_average}</p>
      </div>
      <div className={styles.moreInfoButtonContainer}>
        
        <button className={styles.moreInfoButton} onClick={onClick2} >
        
            <AiOutlineInfoCircle />
          
          </button>
        
        
      </div>
    </div>
  );
};

export default MovieItem;
