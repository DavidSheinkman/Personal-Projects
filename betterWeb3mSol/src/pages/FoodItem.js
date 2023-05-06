import React from "react";
import styles from "./FoodItem.module.css";

const FoodItem = ({ item, onRemove, changeQuantity }) => {
  const handleSliderChange = (event) => {
    changeQuantity(item.name, event.target.value);
  };

  return (
    <div className={styles.selectedItem}>
      <div className={styles.itemName}>
        <span
          className={styles.itemNameText}
          style={{ backgroundColor: item.color }}
        >
          {item.name}
        </span>
        <div className={styles.removeButtonW}>
          <button className={styles.removeButton} onClick={onRemove}>
            X
          </button>
        </div>
      </div>
      <div className={styles.itemQuantity}>
        <label htmlFor="quantity">
          Select quantity:{" "}
          <span className={styles.kgLabel}>{item.quantity}KG</span>{" "}
        </label>
        <input
          type="range"
          id="quantity"
          name="quantity"
          min="0"
          max="9"
          step="1"
          value={item.quantity}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.itemPrice}>
        <span className={styles.itemPriceText}>
          Price:{" "}
          <span className={styles.priceLabel}>
            ${item.price * item.quantity}
          </span>
        </span>
      </div>
    </div>
  );
};

export default FoodItem;
