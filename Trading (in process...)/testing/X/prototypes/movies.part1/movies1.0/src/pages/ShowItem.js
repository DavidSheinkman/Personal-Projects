import React from "react";

const ShowItem = ({ show, onClick }) => {
  let imgsrc =
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg";

  if (show.poster_path) {
    
    imgsrc = `https://image.tmdb.org/t/p/w500${show.poster_path}`

  }

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={imgsrc} alt={show.title} />
      <p>{show.release_date}</p>
      <button onClick={onClick}>more info</button>
    </div>
  );
};

export default ShowItem;
