import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TVShowSearch = () => {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      if (query.trim() !== '') {
        try {
          const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
          const showData = response.data.map((item) => item.show);
          setShows(showData);
        } catch (error) {
          console.error('Error fetching shows:', error);
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

  const handleShowSelection = (show) => {
    setSelectedShow(show);
    setQuery(show.name); // Set the query to the selected show's name
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for TV shows"
      />
      <ul>
        {shows.map((show) => (
          <li key={show.id} onClick={() => handleShowSelection(show)}>
            {show.name}
          </li>
        ))}
      </ul>
      {selectedShow && (
        <div>
          <h2>{selectedShow.name}</h2>
          <p>{selectedShow.summary}</p>
          {/* Add more details about the selected show here */}
        </div>
      )}
    </div>
  );
};

export default TVShowSearch;
