import React, { useState } from 'react';
import styles from './Food.module.css';
import FoodItem from './FoodItem';

const Food = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([
    'Apple',
    'Carrot',
    'Melone',
    'Pear',
    'Lemon',
    'Orange',
    'Salad'
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = (event) => {
    const item = event.target.value;
    const newSelectedItems = [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    const newAvailableItems = availableItems.filter(
      (availableItem) => availableItem !== item
    );
    setAvailableItems(newAvailableItems);
  };

  const handleRemove = (item) => {
    const newSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem !== item
    );
    setSelectedItems(newSelectedItems);
    const newAvailableItems = [...availableItems, item];
    setAvailableItems(newAvailableItems);
  };

  const handleSubmit = () => {
    const newSelectedItems = [];
    setSelectedItems(newSelectedItems);
    setAvailableItems([
      'Apple',
      'Carrot',
      'Melone',
      'Pear',
      'Lemon',
      'Orange',
      'Salad'
    ]);
    setTotalPrice(0);
    alert('Order submitted!');
  };

  const itemsPrice = selectedItems.reduce((total, item) => {
    const quantity = selectedItems.filter((i) => i === item).length;
    return total + quantity * 2.5;
  }, 0);

  const handleQuantityChange = (quantity, item) => {
    const newSelectedItems = [...selectedItems];
    const index = newSelectedItems.findIndex((i) => i === item);
    newSelectedItems.splice(index, 1, ...Array(quantity).fill(item));
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className={styles.food}>
      <div className={styles.multiSelect}>
        <select onChange={handleSelect}>
          <option value="" disabled selected>
            Select an item
          </option>
          {availableItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selectedItems}>
        {selectedItems.map((item) => (
          <FoodItem
            key={item}
            item={item}
            onRemove={() => handleRemove(item)}
            onQuantityChange={(quantity) =>
              handleQuantityChange(quantity, item)
            }
          />
        ))}
      </div>
      <div className={styles.selectedItemsList}>
        <ul>
          {selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.totalPrice}>
        Total price: ${itemsPrice.toFixed(2)}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Food;
