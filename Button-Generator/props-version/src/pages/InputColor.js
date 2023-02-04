import React, { Fragment } from "react";
import styles from "./InputColor.module.css";

const InputColor = ({
  setBgColor,
  bgColor,
  setTextColor,
  textColor,
  setBorderColor,
  borderColor,
}) => {
  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleBorderColorChange = (e) => {
    setBorderColor(e.target.value);
  };

  return (
    <Fragment>
      <div className={styles.inputContainer}>
        <label>Background Color</label>
        <input type="color" value={bgColor} onChange={handleBgColorChange} />
        <input type="text" value={bgColor} onChange={handleBgColorChange} />
      </div>
      <div className={styles.inputContainer}>
        <label>Text Color</label>
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
        />
        <input type="text" value={textColor} onChange={handleTextColorChange} />
      </div>
      <div className={styles.inputContainer}>
        <label>Border Color</label>
        <input
          type="color"
          value={borderColor}
          onChange={handleBorderColorChange}
        />
        <input
          type="text"
          value={borderColor}
          onChange={handleBorderColorChange}
        />
      </div>
    </Fragment>
  );
};

export default InputColor;
