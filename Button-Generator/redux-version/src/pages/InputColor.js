import React, { Fragment } from "react";
import styles from "./InputColor.module.css";
import { useSelector, useDispatch } from "react-redux";
import { btncssActions } from "../store/btncss-slice";

const InputColor = () => {
  const dispatch = useDispatch();
  const bgColor = useSelector((state) => state.btncss.bgColor);
  const textColor = useSelector((state) => state.btncss.textColor);
  const borderColor = useSelector((state) => state.btncss.borderColor);

  const handleBgColorChange = (e) => {
    dispatch(btncssActions.changeBgColor(e.target.value));
  };

  const handleTextColorChange = (e) => {
    dispatch(btncssActions.changeTextColor(e.target.value));
  };

  const handleBorderColorChange = (e) => {
    dispatch(btncssActions.changeBorderColor(e.target.value));
  };

  return (
    <Fragment>
      <div className={styles.inputContainer}>
        <label>Background Color</label>
        <input
          type="color"
          value={bgColor || "#ffffff"}
          onChange={handleBgColorChange}
        />
        <input
          type="text"
          value={bgColor || "#ffffff"}
          onChange={handleBgColorChange}
        />
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
