import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styles from "./OneMovie.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";

const OneMovie = () => {
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=10fe05bc&i=${imdbID}`
        );
        const movieData = response.data;
        setMovieInfo(movieData);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovieInfo();
  }, [imdbID]);

  return (
    <div>
      {movieInfo && (
        <Fragment>
          <div className={styles.searchContainer}>
            <div className={styles.yellowBox}>
              {" "}
              <img src="https://i.imgur.com/PemRvED.png"></img>{" "}
            </div>
          </div>

          <div className={styles.generalContainer}>
            <div className={styles.firstContainer}>
              <div className={styles.mainInfo}>
                <div className={styles.titleAndTime}>
                  <h1 className={styles.movieTitle}>{movieInfo.Title}</h1>
                  <p className={styles.runtime}>
                    {movieInfo.Year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {movieInfo.Rated}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {movieInfo.Runtime}
                  </p>
                </div>
                <div className={styles.ratingBox}>
                  <label className={styles.ratingLabel}>IMDb RATING</label>
                  <p className={styles.imdbRating}>
                    <span className={styles.yellowStart}>
                      <AiFillStar />
                    </span>{" "}
                    {movieInfo.imdbRating}{" "}
                    <span className={styles.imdbRating10}>/10</span>{" "}
                  </p>
                </div>
                <div className={styles.ratingBox2}>
                  <label className={styles.ratingLabel}>YOUR RATING</label>
                  <p className={styles.blueRating}>
                    <span className={styles.blueStar}>
                      <AiOutlineStar />
                    </span>{" "}
                    Rate{" "}
                  </p>
                </div>
              </div>
              <div className={styles.imgs}>
                <img src={movieInfo.Poster} alt={movieInfo.Title} />
                <div className={styles.trailer}>
                  <div className={styles.trailerButton}>
                    <span className={styles.playIcon}>
                      <BsPlayCircle />
                    </span>{" "}
                    Play trailer 1:12
                  </div>
                </div>
                <div className={styles.videoAndPhotos}>
                  <div className={styles.videosBox}>
                    <div className={styles.videosBoxIcons}>
                      <BiSolidVideos />
                    </div>{" "}
                    24 VIDEOS{" "}
                  </div>
                  <div className={styles.videosBox}>
                    <div className={styles.videosBoxIcons}>
                      <FaImages />
                    </div>{" "}
                    99+ PHOTOS
                  </div>
                </div>
              </div>
              <div className={styles.moreInfo}>
                {movieInfo.Genre.split(", ").map((genre, index) => (
                  <button key={index} className={styles.genreButton}>
                    {genre}
                  </button>
                ))}
                <p>{movieInfo.Plot}</p>

                <div className={styles.brline}></div>
                <p className={styles.director}>
                  Director{" "}
                  <span className={styles.directors}>{movieInfo.Director}</span>
                </p>
                <div className={styles.brline}></div>
                <p className={styles.director}>
                  Writers{" "}
                  <span className={styles.directors}>{movieInfo.Writer}</span>
                </p>
                <div className={styles.brline}></div>
                <p className={styles.director}>
                  Stars{" "}
                  <span className={styles.directors}>{movieInfo.Actors}</span>
                </p>
                <div className={styles.brline}></div>
              </div>
            </div>
          </div>
          <div className={styles.generalContainer2}>
            <div className={styles.firstContainerM}>
              <div className={styles.mainInfoM}>
                <div className={styles.titleAndTimeM}>
                  <h1 className={styles.movieTitleM}>{movieInfo.Title}</h1>
                  <p className={styles.runtimeM}>
                    {movieInfo.Year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {movieInfo.Rated}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {movieInfo.Runtime}
                  </p>
                </div>
              </div>
              <div className={styles.imgs2M}>
                <div className={styles.trailerM}>
                  <div className={styles.trailerButtonM}>
                    <span className={styles.playIconM}>
                      <BsPlayCircle />
                    </span>{" "}
                    Play trailer 1:12
                  </div>
                </div>
                <div className={styles.videoAndPhotosM}>
                  <div className={styles.videosBoxM1}>
                    <div className={styles.videosBoxIconsM}>
                      <BiSolidVideos />
                    </div>{" "}
                    24 VIDEOS{" "}
                  </div>
                  <div className={styles.videosBoxM2}>
                    <div className={styles.videosBoxIconsM}>
                      <FaImages />
                    </div>{" "}
                    99+ PHOTOS
                  </div>
                </div>
              </div>
              <div className={styles.infoM}>
                <img src={movieInfo.Poster} alt={movieInfo.Title} />
                <div className={styles.moreInfoM}>
                  {movieInfo.Genre.split(", ").map((genre, index) => (
                    <button key={index} className={styles.genreButtonM}>
                      {genre}
                    </button>
                  ))}
                  <p>{movieInfo.Plot}</p>
                </div>
              </div>

              <div className={styles.ratingsM}>
                <div className={styles.ratingBoxM}>
                  <p className={styles.imdbRatingM}>
                    <span className={styles.yellowStartM}>
                      <AiFillStar />
                    </span>{" "}
                    {movieInfo.imdbRating}{" "}
                    <span className={styles.imdbRating10M}>/10</span>{" "}
                  </p>
                </div>
                <div className={styles.ratingBox2M}>
                  <p className={styles.blueRatingM}>
                    <span className={styles.blueStarM}>
                      <AiOutlineStar />
                    </span>{" "}
                    Rate{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default OneMovie;
