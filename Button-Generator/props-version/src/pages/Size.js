import React, { Fragment } from "react";
import styles from "./Size.module.css";

const Size = ({ setPaddingintV, paddingintV, setPaddingintH, paddingintH }) => {
  const handleChange1 = (e) => {
    setPaddingintV(e.target.value);
  };

  const handleChange2 = (e) => {
    setPaddingintH(e.target.value);
  };

  const incrementPaddingintV = () => {
    setPaddingintV(paddingintV + 1);
  };

  const decrementPaddingintV = () => {
    setPaddingintV(paddingintV - 1);
  };

  const incrementPaddingintH = () => {
    setPaddingintH(paddingintH + 1);
  };

  const decrementPaddingintH = () => {
    setPaddingintH(paddingintH - 1);
  };

  return (
    <Fragment>
      <div className={styles.inputContainer2}>
        <label className={styles.label}>Vertical Padding</label>
        <div className={styles.inputContainer}>
          <button className={styles.button} onClick={decrementPaddingintV}>
            -
          </button>
          <input
            type="text"
            value={paddingintV}
            onChange={handleChange1}
            className={styles.input}
          />
          <button className={styles.button} onClick={incrementPaddingintV}>
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainer2}>
        <label className={styles.label}>Horizontal Padding</label>
        <div className={styles.inputContainer}>
          <button className={styles.button} onClick={decrementPaddingintH}>
            -
          </button>
          <input
            type="text"
            value={paddingintH}
            onChange={handleChange2}
            className={styles.input}
          />
          <button className={styles.button} onClick={incrementPaddingintH}>
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Size;
