import React from "react";
import styles from "./PopUp.module.css";

const PopUpError = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.productItemContainer}>
        <div className={styles.productItemContainer2}>
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>Error !!!</h1>
            <p className={styles.msg}>size or color not selected!</p>
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

export default PopUpError;
