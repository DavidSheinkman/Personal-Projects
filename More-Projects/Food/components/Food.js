import React, { useState, useEffect } from "react";
import styles from "./Food.module.css";
import FoodItem from "./FoodItem";
import { GiShinyApple } from 'react-icons/gi';
import { GiCarrot } from 'react-icons/gi';
import { GiWatermelon } from 'react-icons/gi';
import { GiPear } from 'react-icons/gi';
import { GiLemon } from 'react-icons/gi';
import { GiOrange } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';

const Food = ({ food }) => {
  const [availableItems2, setAvailableItems2] = useState(food);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  

  useEffect(() => {
    if (selectedItems.length > 0) {
      setTotalPrice(
        selectedItems.reduce(
          (total, item) => total + item.amount * item.price,
          0
        )
      );
    }
  }, [selectedItems, availableItems2, totalPrice]);

  const handleSelect = (event) => {
    const item = availableItems2.find(
      (item) => item.name === event.target.value
    );

    const newSelectedItems = [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    const newAvailableItems = availableItems2.filter(
      (availableItem) => availableItem.id !== item.id
    );
    setAvailableItems2(newAvailableItems);
  };

  const handleRemove = (item) => {
    const newSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setSelectedItems(newSelectedItems);
    const newAvailableItems = [...availableItems2, item];
    setAvailableItems2(newAvailableItems);
  };

  const changeQuantity = (name, amount) => {
    const newSelectedItems = selectedItems;
    newSelectedItems.find((item2) => item2.name === name).amount = amount;

    setSelectedItems(newSelectedItems);
    setTotalPrice(
      selectedItems.reduce((total, item) => total + item.amount * item.price, 0)
    );
  };

  const handleSubmit = async () => {
    const newFoodList = selectedItems.map((item) => ({
      id: item.id,
      amount: item.amount,
    }));

    const appleResponse = await fetch(
      "https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFoodList),
      }
    );
    const appleData = await appleResponse.json();

    if (appleData.message && appleData.message === "Send successful") {
      alert("Send successful");
      setAvailableItems2(food);
      setSelectedItems([]);
      setTotalPrice(0);
    }

    if (
      appleData.detail &&
      appleData.detail === "Insufficient stock for product Pear"
    ) {
      alert("Insufficient stock for product Pear");
    }
  };

  return (
    <div className={styles.foodContainer}>
      <div className={styles.food}>
        <div className={styles.multiSelect}>
          <select className={styles.multiSelect2} onChange={handleSelect} defaultValue="">
            <option className={styles.foodOption} value="">Select to add item to basket</option>
            {availableItems2.map((item) => (
              <option className={styles.foodOption} key={item.id} value={item.name}>
                {item.name} ----------------------------------------------------------------------------------------  
            {item.id === "apple" && "--🍎"}
          {item.id === "carrot" && "-🥕"}
          {item.id === "melon" && "-🍈" }
          {item.id === "pear" && "---🍐"}
          {item.id === "lemon" && "-🍋"}
          {item.id === "orange" && "🍊"}
          {item.id === "salad" && "--🥗"}
              </option>
              
            ))}
            
          </select>
          
        </div>
        <div className={styles.selectedItems}>
          {selectedItems &&
            selectedItems.map((item) => (
              <FoodItem
                key={item.id}
                item={item}
                changeQuantity={changeQuantity}
                onRemove={() => handleRemove(item)}
              />
            ))}
        </div>
        <div className={styles.line}></div>
        <div className={styles.selectedItemsList}>
          <label className={styles.itemListLabel}>Item list:</label>

          <ul className={styles.ulList}>
            {selectedItems.map((item) =>
              item.amount > 0 ? (
                <div key={item.id}>
                  {item.name}
                  <span className={styles.line2}>
                    -------------------------------
                  </span>
                  {item.amount}kg
                </div>
              ) : null
            )}
          </ul>
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.totalPriceLabel}>Total price:</div>
          <span className={styles.totalPriceNumber}>${totalPrice}</span>
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Food;
