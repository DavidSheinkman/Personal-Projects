import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowItem from "./ShowItem";
import ShowInfo from "./ShowInfo";

const TVShowSearch = () => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [moreInfoModul, setMoreInfoModul] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    const fetchShows = async () => {
      if (query.trim() !== "") {
        try {
          const response = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${query}`
          );
          const showData = response.data.map((item) => item.show);
          setShows(showData);
        } catch (error) {
          console.error("Error fetching shows:", error);
        }
      } else {
        setShows([]);
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
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setSelectedShow(null);
    setSortCriteria("choose option");
  };

  const handleShowItemClick = (show) => {
    setSelectedShow(show);

    setMoreInfoModul(true);
  };

  const handleCloseShowModal = () => {
    setMoreInfoModul(false);
  };

  const handleSortByPremiered = () => {
    setSortCriteria("premiered");
    sortShowsByPremiered();
  };

  const handleSortByName = () => {
    setSortCriteria("name");
    sortShowsByName();
  };

  const sortShowsByPremiered = () => {
    const sortedShows = [...shows].sort((a, b) =>
      a.premiered.localeCompare(b.premiered)
    );
    setShows(sortedShows);
  };

  const sortShowsByName = () => {
    const sortedShows = [...shows].sort((a, b) => a.name.localeCompare(b.name));
    setShows(sortedShows);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    sortShows(event.target.value);
  };

  const sortShows = (criteria) => {
    const sortedShows = [...shows].sort((a, b) => {
      if (criteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (criteria === "premiered" && b.premiered && a.premiered) {
        return b.premiered.localeCompare(a.premiered);
      }
      return 0;
    });
    setShows(sortedShows);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for TV shows"
      />
      {/* <ul>
        {shows.map((show) => (
          <li key={show.id} onClick={() => handleShowSelection(show)}>
            {show.name}
          </li>
        ))}
      </ul> */}

      <label>
        Sort by:
        <select value={sortCriteria} onChange={handleSortChange}>
        <option value="">choose option</option>
          <option value="name">Name</option>
          <option value="premiered">Date</option>
        </select>
      </label>

      {moreInfoModul && (
        <ShowInfo // Picture with more info:  views, downloads, comments etc
          show={selectedShow}
          onClose={() => handleCloseShowModal(false)}
        />
      )}

      {shows && (
        <div>
          {shows.map((show) => (
            <div>
              <ShowItem // One of the 3*3 Pictures
                key={show.id}
                show={show}
                onClick={() => handleShowItemClick(show)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShowSearch;
