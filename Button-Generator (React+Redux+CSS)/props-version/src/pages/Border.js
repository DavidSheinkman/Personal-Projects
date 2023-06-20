import React, { Fragment } from "react";
import styles from "./Border.module.css";

const Border = ({
  setBorderSize,
  borderRadius,
  setBorderRadius,
  borderSize,
}) => {
  const handleBorderChange1 = (e) => {
    setBorderSize(e.target.value);
  };

  const handleBorderChange2 = (e) => {
    setBorderRadius(e.target.value);
  };

  const incrementBorderSize = () => {
    setBorderSize(borderSize + 1);
  };

  const decrementBorderSize = () => {
    setBorderSize(borderSize - 1);
  };

  return (
    <Fragment>
      <div className={styles.inputContainer2}>
        <label className={styles.label}>Border Size</label>
        <div className={styles.inputContainer}>
          <button className={styles.button} onClick={decrementBorderSize}>
            -
          </button>
          <input
            type="text"
            value={borderSize}
            onChange={handleBorderChange1}
            className={styles.input}
          />
          <button className={styles.button} onClick={incrementBorderSize}>
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainer2}>
        <label>Border Radius</label>
        <input
          type="range"
          min="1"
          max="50"
          value={borderRadius}
          className={styles.slider}
          onChange={handleBorderChange2}
        />
        {borderRadius}
      </div>
    </Fragment>
  );
};

export default Border;
