import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import MoviePopUp from "./MoviePopUp";
import styles from "./MovieSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieSettingsActions } from "../store/movie-slice";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const searchContainerRef = useRef(null);
  const search = useSelector((state) => state.moviesettings.search);
  const [moreInfoModul, setMoreInfoModul] = useState(false);

  const [searchSuggestions, setSearchSuggestions] = useState(null);

  const movies = useSelector((state) => state.moviesettings.movies);

  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSearchSuggestions(null); // Close the dropdown when clicking outside
      }
    };

    const fetchMovies = async () => {
      if (search.trim() !== "") {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=10fe05bc&s=${search}`
          );
          const movieData = response.data.Search.map((item) => item);

          setSearchSuggestions(movieData);

          dispatch(movieSettingsActions.changeSearchSuggestions(movieData));
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      } else if (movies && movies.length > 1 && search.trim() === "") {
      } else {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=10fe05bc&s=batman`
          );
          const movieData = response.data.Search.map((item) => item);

          dispatch(movieSettingsActions.changeMovies(movieData));
          setSearchSuggestions(movieData);

          dispatch(movieSettingsActions.changeSearchSuggestions(movieData));
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
    };

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout for 500ms after the user stops typing
    const newDebounceTimeout = setTimeout(() => {
      fetchMovies();
    }, 500);

    setDebounceTimeout(newDebounceTimeout);

    document.addEventListener("click", handleOutsideClick);

    // Cleanup function to clear the timeout on unmount or when the query changes
    return () => {
      if (newDebounceTimeout) {
        clearTimeout(newDebounceTimeout);
      }
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [search]);

  const handleInputChange = (event) => {
    dispatch(movieSettingsActions.changeSearch(event.target.value));

    setSortCriteria("choose option");
  };

  const handleMovieItemClick = (movie) => {
    setSearchSuggestions(null);

    dispatch(movieSettingsActions.changeMovie(movie));
    dispatch(movieSettingsActions.changeSearch(""));
  };

  const handleMovieItemInfoClick = (movie) => {
    setSearchSuggestions(null);

    dispatch(movieSettingsActions.changeMovie(movie));
    dispatch(movieSettingsActions.changeSearch(""));

    setMoreInfoModul(true);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    sortMovies(event.target.value);
  };

  const sortMovies = (criteria) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (criteria === "name") {
        return a.Title.localeCompare(b.Title);
      } else if (criteria === "premiered" && b.Year && a.Year) {
        return b.Year.localeCompare(a.Year);
      }
      return 0;
    });

    dispatch(movieSettingsActions.changeMovies(sortedMovies));
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      dispatch(movieSettingsActions.changeMovies(searchSuggestions));
      setSearchSuggestions(null);
    }
  };
  const handleCloseMovieModal = () => {
    setMoreInfoModul(false);
  };

  return (
    <div className={styles.mainContainer}>
      <div ref={searchContainerRef} className={styles.searchContainer}>
        <div className={styles.yellowBox}>
          {" "}
          <img src="https://i.imgur.com/PemRvED.png"></img>{" "}
        </div>
        <input
          className={styles.searchBar}
          type="text"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          placeholder="Search IMDb"
        />
        {search && searchSuggestions && (
          <div className={styles.dropdown}>
            {searchSuggestions.map((movie) => (
              <Link to={`movie/${movie.imdbID}`} className={styles.link}>
                <div
                  key={movie.imdbID}
                  className={styles.suggestionItem}
                  onClick={() => handleMovieItemClick(movie)}
                >
                  <img
                    className={styles.suggestionImg}
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <div className={styles.suggestionInfo}>
                    {" "}
                    <p className={styles.suggestionTitle}>{movie.Title}</p>{" "}
                    <p className={styles.suggestionYear}>{movie.Year}</p>{" "}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className={styles.subContainer}>
        <div className={styles.sortContainer}>
          <span className={styles.sortTitle}>
            {" "}
            <div className={styles.yellowStick}> </div> Titles
          </span>
          <label>
            <span className={styles.sortLabel}>Sort by</span>

            <select
              className={styles.sortOption}
              value={sortCriteria}
              onChange={handleSortChange}
            >
              <option value="">choose option</option>
              <option value="name">Name</option>
              <option value="premiered">Release date</option>
            </select>
          </label>
        </div>

        {moreInfoModul && (
          <MoviePopUp onClose={() => handleCloseMovieModal(false)} />
        )}

        {!movies && <div className={styles.loader}></div>}

        {movies && (
          <ul className={styles.moviesul}>
            {movies.map((movie) => (
              <li className={styles.movieli}>
                <MovieItem // One of the 3*3 Pictures
                  key={movie.imdbID}
                  movie={movie}
                  onClick={() => handleMovieItemClick(movie)}
                  onClick2={() => handleMovieItemInfoClick(movie)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
