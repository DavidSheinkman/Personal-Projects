import React from "react";


const PictureItem = ({ item, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={item.webformatURL} alt="Flower" />
    </div>
  );
};

export default PictureItem;
