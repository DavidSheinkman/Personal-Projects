import React from "react";
import styles from "./PopUp.module.css";

const PopUpAdd = ({ onClose }) => {
  return ( 
    <div className={styles.modal}>
      <div className={styles.productItemContainer}>
        <div className={styles.productItemContainer2}>
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>Product Added to Cart!</h1>
            <p className={styles.msg}>
              Great choice! The selected product has been successfully added to
              your cart. Happy shopping!
            </p>
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

export default PopUpAdd;
