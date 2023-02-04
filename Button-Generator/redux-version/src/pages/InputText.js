import React, { Fragment } from "react";
import styles from "./InputText.module.css";
import { useSelector, useDispatch } from "react-redux";
import { btncssActions } from "../store/btncss-slice";

const InputText = () => {
  const dispatch = useDispatch();
  const buttonText = useSelector((state) => state.btncss.buttonText);
  const fontSize = useSelector((state) => state.btncss.fontSize);
  const fontWeight = useSelector((state) => state.btncss.fontWeight);
  const fontFamily = useSelector((state) => state.btncss.fontFamily);
  const fontStyle = useSelector((state) => state.btncss.fontStyle);

  const handleChange = (e) => {
    dispatch(btncssActions.changeButtonText(e.target.value));
  };

  const handleChange1 = (e) => {
    dispatch(btncssActions.changeFontSize(e.target.value));
  };

  const handleChange2 = (e) => {
    dispatch(btncssActions.changeFontWeight(e.target.value));
  };

  const handleChange3 = (e) => {
    dispatch(btncssActions.changeFontFamily(e.target.value));
  };

  const handleChange4 = (e) => {
    dispatch(btncssActions.changeFontStyle(e.target.value));
  };

  const incrementFontSize = () => {
    dispatch(btncssActions.changeFontSize(fontSize + 1));
  };

  const decrementFontSize = () => {
    dispatch(btncssActions.changeFontSize(fontSize - 1));
  };

  return (
    <Fragment>
      <div className={styles.inputContainer2}>
        <label>Button Text</label>
        <input type="text" value={buttonText} onChange={handleChange} />
      </div>

      <div className={styles.inputContainer2}>
        <label className={styles.label}>Font Size</label>
        <div className={styles.inputContainer}>
          <button className={styles.button} onClick={decrementFontSize}>
            -
          </button>
          <input
            type="text"
            value={fontSize}
            onChange={handleChange1}
            className={styles.input}
          />
          <button className={styles.button} onClick={incrementFontSize}>
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainer2}>
        <label>Font Weight</label>
        <input
          type="range"
          min="100"
          max="900"
          step="100"
          value={fontWeight}
          className={styles.slider}
          onChange={handleChange2}
        />
        {fontWeight}
      </div>
      <div className={styles.inputContainer2}>
        <label>Font Family</label>
        <select
          className={styles.input1}
          value={fontFamily}
          onChange={handleChange3}
        >
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      <div className={styles.inputContainer2}>
        <label>Font Style</label>
        <select
          className={styles.input1}
          value={fontStyle}
          onChange={handleChange4}
        >
          <option value="normal">normal</option>
          <option value="italic">italic</option>
          <option value="oblique">oblique</option>
        </select>
      </div>
    </Fragment>
  );
};

export default InputText;
