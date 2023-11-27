import React from "react";
import styles from "./FoodItem.module.css";



import { GiShinyApple } from 'react-icons/gi';
import { GiCarrot } from 'react-icons/gi';
import { GiWatermelon } from 'react-icons/gi';
import { GiPear } from 'react-icons/gi';
import { GiLemon } from 'react-icons/gi';
import { GiOrange } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';


const FoodItem = ({ item, onRemove, changeQuantity }) => {

 





  const handleSliderChange = (event) => {
    changeQuantity(item.name, event.target.value);
  };

  return (
    <div className={styles.selectedItem}>
      <div className={styles.itemName}>
        
        <span
          className={styles.itemNameText}
          style={{ backgroundColor: item.betterColor }}
        >
          
          <span className={styles.icon}>{item.icon === "GiShinyApple" && <GiShinyApple />}
          {item.icon === "GiCarrot" && <GiCarrot />}
          {item.icon === "GiWatermelon" && <GiWatermelon />}
          {item.icon === "GiPear" && <GiPear />}
          {item.icon === "GiLemon" && <GiLemon />}
          {item.icon === "GiOrange" && <GiOrange />}
          {item.icon === "TbSalad" && <TbSalad />}</span>
          

          {item.name}
        </span>
        <div className={styles.removeButtonW}>
          <button className={styles.removeButton} onClick={onRemove}>
            X
          </button>
        </div>
      </div>
      <div className={styles.itemQuantity}>
        <label className={styles.itemQuantityLabel} htmlFor="amount">
          Select quantity: <span className={styles.spacer}></span>
          <div className={styles.amountLabel}>{item.amount}</div>
          <span className={styles.kgLabel}>KG</span>{" "}
        </label>

        <input
          type="range"
          id="amount"
          name="amount"
          min="0"
          max="9"
          step="1"
          value={item.amount}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div>

      <div className={styles.itemPrice}>
        <span className={styles.itemPriceText}>
          Price:{" "}
          <span className={styles.priceLabel}>${item.price * item.amount}</span>
        </span>
      </div>
    </div>
  );
};

export default FoodItem;
