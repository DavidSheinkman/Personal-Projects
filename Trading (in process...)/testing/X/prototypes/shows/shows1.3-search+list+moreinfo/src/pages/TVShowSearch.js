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
  };

  const handleShowItemClick = (show) => {
    
    setSelectedShow(show);
  
    setMoreInfoModul(true);

  };



  const handleCloseShowModal = () => {
    setMoreInfoModul(false);
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
