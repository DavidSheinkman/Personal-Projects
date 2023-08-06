import React from "react";
import styles from "./ShowItem.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ShowItem = ({ show, onClick }) => {
  let imgsrc =
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg";

  if (show.poster_path) {
    imgsrc = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  }

  return (
    <div className={styles.showItemContainer}>
      <div>
        <img className={styles.movieImg} src={imgsrc} alt={show.title} />
      </div>
      <div className={styles.showDetails}>
        <h1 className={styles.showTitle}>{show.title}</h1>
        <p className={styles.release_date}>{show.release_date}</p>
        <p className={styles.vote_average}>{show.vote_average}</p>
      </div>
      <div className={styles.moreInfoButtonContainer}>
        <button className={styles.moreInfoButton} onClick={onClick}>
        <AiOutlineInfoCircle />
        </button>
      </div>
    </div>
  );
};

export default ShowItem;
