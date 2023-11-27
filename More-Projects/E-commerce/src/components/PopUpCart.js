import React from "react";
import styles from "./PopUp.module.css";


const PopUpCart = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.productItemContainer}>
        <div className={styles.productItemContainer2}>
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>Cart</h1>
            <p className={styles.msg}>Cart not yet implemented :(</p>
          </div>
          <div className={styles.moreInfoButtonContainer}>
            <button className={styles.moreInfoButton} onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCart;
