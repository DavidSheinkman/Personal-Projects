import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import MovieInfo from "./MovieInfo";
import styles from "./MovieSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieSettingsActions } from "../store/movie-slice";


const MovieSearch = () => {
  const dispatch = useDispatch();
  const searchContainerRef = useRef(null);
  const search = useSelector((state) => state.moviesettings.search);
  const [moreInfoModul, setMoreInfoModul] = useState(false);


  const movies = useSelector((state) => state.moviesettings.movies);

  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("");


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTU0ZTU2YmZlMGQ3ZTY1ZWQ0YzUwYWJmZWMwZTdiZiIsInN1YiI6IjY0Y2JhNGU1NDNjZDU0MDBjNTI2YTY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_Xgw_1RXv9ni1qzgn-RQBrekQTLv8tXaGzjtALhrZo",
    },
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
       
      }
    };

    const fetchMovies = async () => {
    
      if (search.trim() !== "") {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
            options
          );
          const movieData = response.data.results.map((item) => item);

          dispatch(movieSettingsActions.changeMovies(movieData));

        
          dispatch(movieSettingsActions.changeSearchSuggestions(movieData));
        
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      } else if (movies && movies.length>1 && search.trim() === "") {
        
      } else {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
            options
          );
          const movieData = response.data.results.map((item) => item);

          dispatch(movieSettingsActions.changeMovies(movieData));
       

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
   
  
    dispatch(movieSettingsActions.changeMovie(movie));
    dispatch(movieSettingsActions.changeSearch(""));
  };

  const handleSortChange = (event) => {
  
    setSortCriteria(event.target.value);
    sortMovies(event.target.value);
  };

  const sortMovies = (criteria) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (criteria === "name") {
        return a.title.localeCompare(b.title);
      } else if (criteria === "premiered" && b.release_date && a.release_date) {
        return b.release_date.localeCompare(a.release_date);
      }
      return 0;
    });

    dispatch(movieSettingsActions.changeMovies(sortedMovies));
  };

  const handleCloseMovieModal = () => {
    setMoreInfoModul(false);
  };

  const handleMovieItemInfoClick = (movie) => {
   
    
    dispatch(movieSettingsActions.changeMovie(movie));
    dispatch(movieSettingsActions.changeSearch(""));
    

    setMoreInfoModul(true);
  };


  return (
    <div className={styles.mainContainer}>
      <div ref={searchContainerRef} className={styles.searchContainer}>
        <span className={styles.yellowBox}>inMNG</span>
        <input
          className={styles.searchBar}
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a moovie"
        />
        
      </div>

      <div className={styles.subContainer}>
        <h1 className={styles.mTitle}>Movies</h1>
        <div className={styles.sortContainer}>
          <label>
            <span className={styles.sortLabel}>Sort by</span>

            <select value={sortCriteria} onChange={handleSortChange}>
              <option value="">choose option</option>
              <option value="name">Name</option>
              <option value="premiered">Date</option>
            </select>
          </label>
        </div>

        {moreInfoModul && (
        <MovieInfo  onClose={() => handleCloseMovieModal(false)}/>
      )}

        {!movies  && <div>LOADING</div>}

        {movies && (
          <ul className={styles.moviesul}>
            {movies.map((movie) => (
              <li className={styles.movieli}>
                <MovieItem // One of the 3*3 Pictures
                  key={movie.id}
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