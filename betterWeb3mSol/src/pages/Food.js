import React, { useState, useEffect } from "react";
import styles from "./Food.module.css";
import FoodItem from "./FoodItem";

const Food = () => {
  const [availableItems2, setAvailableItems2] = useState([
    {
      key: 1,
      name: "Apple",
      price: 3,
      quantity: 0,
      totalPrice: 0,
      color: "#8FBC8F",
    },
    {
      key: 2,
      name: "Carrot",
      price: 1.5,
      quantity: 0,
      totalPrice: 0,
      color: "#FFA07A",
    },
    {
      key: 3,
      name: "Melon",
      price: 5,
      quantity: 0,
      totalPrice: 0,
      color: "#F08080",
    },
    {
      key: 4,
      name: "Pear",
      price: 2,
      quantity: 0,
      totalPrice: 0,
      color: "#9ACD32",
    },
    {
      key: 5,
      name: "Lemon",
      price: 1,
      quantity: 0,
      totalPrice: 0,
      color: "#D1D100",
    },
    {
      key: 6,
      name: "Orange",
      price: 2.5,
      quantity: 0,
      totalPrice: 0,
      color: "#FFA500",
    },
    {
      key: 7,
      name: "Salad",
      price: 4,
      quantity: 0,
      totalPrice: 0,
      color: "#9ACD32",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (selectedItems.length > 0) {
      setTotalPrice(
        selectedItems.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        )
      );
    }
  }, [selectedItems, availableItems2, totalPrice]);

  const handleSelect = (event) => {
    const item = availableItems2.find(
      (item) => item.name === event.target.value
    );
    console.log(event.target.value);
    const newSelectedItems = [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    const newAvailableItems = availableItems2.filter(
      (availableItem) => availableItem !== item
    );
    setAvailableItems2(newAvailableItems);
  };

  const handleRemove = (item) => {
    const newSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.key !== item.key
    );
    setSelectedItems(newSelectedItems);
    const newAvailableItems = [...availableItems2, item];
    setAvailableItems2(newAvailableItems);
  };

  const changeQuantity = (name, quantity) => {
    const newSelectedItems = selectedItems;
    newSelectedItems.find((item2) => item2.name === name).quantity = quantity;

    setSelectedItems(newSelectedItems);
    setTotalPrice(
      selectedItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      )
    );
    console.log();
  };

  const handleSubmit = () => {
    alert("Order submitted!");
  };

  return (
    <div className={styles.food}>
      <div className={styles.multiSelect}>
        <select onChange={handleSelect} defaultValue="">
          <option value="" disabled>
            Select an item
          </option>
          {availableItems2.map((item) => (
            <option key={item.key} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectedItems}>
        {selectedItems &&
          selectedItems.map((item) => (
            <FoodItem
              key={item.key}
              item={item}
              changeQuantity={changeQuantity}
              onRemove={() => handleRemove(item)}
            />
          ))}
      </div>
      <div className={styles.line}></div>
      <div className={styles.selectedItemsList}>
        <label className={styles.itemListLabel}>Item List:</label>

        <ul>
          {selectedItems.map((item) => (
            <div key={item.key}>
              {item.name}
              <span className={styles.line2}>
                -------------------------------
              </span>
              {item.quantity}kg
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.totalPrice}>
        <div className={styles.itemListLabel}>Total price:</div>${totalPrice}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Food;
