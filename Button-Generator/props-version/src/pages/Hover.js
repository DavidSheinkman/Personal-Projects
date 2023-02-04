import React, { Fragment } from "react";
import styles from "./Hover.module.css";

const Hover = ({
  bgColorHover,
  setBgColorHover,
  textColorHover,
  setTextColorHover,
  borderColorHover,
  setBorderColorHover,
}) => {
  const handleBgColorChange1 = (e) => {
    setBgColorHover(e.target.value);
  };

  const handleBgColorChange2 = (e) => {
    setTextColorHover(e.target.value);
  };

  const handleBgColorChange3 = (e) => {
    setBorderColorHover(e.target.value);
  };

  return (
    <Fragment>
      <div className={styles.inputContainer}>
        <label>Background Color : Hover </label>
        <input
          type="color"
          value={bgColorHover}
          onChange={handleBgColorChange1}
        />
        <input
          type="text"
          value={bgColorHover}
          onChange={handleBgColorChange1}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Text Color : Hover </label>
        <input
          type="color"
          value={textColorHover}
          onChange={handleBgColorChange2}
        />
        <input
          type="text"
          value={textColorHover}
          onChange={handleBgColorChange2}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Boder Color : Hover </label>
        <input
          type="color"
          value={borderColorHover}
          onChange={handleBgColorChange3}
        />
        <input
          type="text"
          value={borderColorHover}
          onChange={handleBgColorChange3}
        />
      </div>
    </Fragment>
  );
};

export default Hover;
