import React, { useState } from 'react';
import styles from './FoodItem.module.css';

const FoodItem = ({ item, onRemove,onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);
  const price = quantity * 2.5;
  

  const handleSliderChange = (event) => {
    setQuantity(parseFloat(event.target.value));
  };

  return (
    <div className={styles.selectedItem}>
      <div className={styles.itemName}>
        <span className={styles.itemNameText}>{item}</span>
        <button onClick={onRemove}>X</button>
      </div>
      <div className={styles.itemQuantity}>
        <label htmlFor="quantity">Select quantity:</label>
        <input
          type="range"
          id="quantity"
          name="quantity"
          min="0"
          max="10"
          step="0.5"
          value={quantity}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.itemPrice}>
        <span className={styles.itemPriceText}>Price: ${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FoodItem;
