import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowItem from "./ShowItem";
import styles from "./TVShowSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieSettingsActions } from "../store/movie-slice";

const TVShowSearch = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.moviesettings.search);

  const [shows, setShows] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTU0ZTU2YmZlMGQ3ZTY1ZWQ0YzUwYWJmZWMwZTdiZiIsInN1YiI6IjY0Y2JhNGU1NDNjZDU0MDBjNTI2YTY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_Xgw_1RXv9ni1qzgn-RQBrekQTLv8tXaGzjtALhrZo",
    },
  };

  useEffect(() => {
    const fetchShows = async () => {
      setisLoading(true);
      if (search.trim() !== "") {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
            options
          );
          const showData = response.data.results.map((item) => item);
          setShows(showData);
          setisLoading(false);
        } catch (error) {
          console.error("Error fetching shows:", error);
        }
      } else {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
            options
          );
          const showData = response.data.results.map((item) => item);
          setShows(showData);
          setisLoading(false);
        } catch (error) {
          console.error("Error fetching shows:", error);
        }
      }
    };

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout for 500ms after the user stops typing
    const newDebounceTimeout = setTimeout(() => {
      fetchShows();
    }, 500);

    setDebounceTimeout(newDebounceTimeout);

    // Cleanup function to clear the timeout on unmount or when the query changes
    return () => {
      if (newDebounceTimeout) {
        clearTimeout(newDebounceTimeout);
      }
    };
  }, [search]);

  const handleInputChange = (event) => {
    dispatch(movieSettingsActions.changeSearch(event.target.value));

    setSortCriteria("choose option");
  };

  const handleShowItemClick = (show) => {
    dispatch(movieSettingsActions.changeShow(show));
  };

  const handleSortChange = (event) => {
    console.log(shows);
    setSortCriteria(event.target.value);
    sortShows(event.target.value);
  };

  const sortShows = (criteria) => {
    const sortedShows = [...shows].sort((a, b) => {
      if (criteria === "name") {
        return a.title.localeCompare(b.title);
      } else if (criteria === "premiered" && b.release_date && a.release_date) {
        return b.release_date.localeCompare(a.release_date);
      }
      return 0;
    });
    setShows(sortedShows);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <span className={styles.yellowBox}>inMNG</span>
        <input
          className={styles.searchBar}
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a moovie"
        />
      </div>
      {/* <ul>
        {shows.map((show) => (
          <li key={show.id} onClick={() => handleShowSelection(show)}>
            {show.name}
          </li>
        ))}
      </ul> */}
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

        {isLoading && <div>LOADING</div>}

        {shows && (
          <ul className={styles.moviesul}>
            {shows.map((show) => (
              <li className={styles.movieli}>
                <ShowItem // One of the 3*3 Pictures
                  key={show.id}
                  show={show}
                  onClick={() => handleShowItemClick(show)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TVShowSearch;
