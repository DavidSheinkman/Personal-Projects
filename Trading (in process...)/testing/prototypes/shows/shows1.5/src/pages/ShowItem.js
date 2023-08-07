import React from "react";

const ShowItem = ({ show, onClick }) => {
  let imgsrc =
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg";

  if (show.image) {
    imgsrc = show.image.medium;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={imgsrc} alt={show.name} />
      <p>{show.premiered}</p>
      <button onClick={onClick}>more info</button>
    </div>
  );
};

export default ShowItem;
