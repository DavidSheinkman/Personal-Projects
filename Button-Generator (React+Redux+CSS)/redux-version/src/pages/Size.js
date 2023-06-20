import React, { Fragment } from "react";
import styles from "./Size.module.css";
import { useSelector, useDispatch } from "react-redux";
import { btncssActions } from "../store/btncss-slice";

const Size = () => {
  const dispatch = useDispatch();
  const paddingintV = useSelector((state) => state.btncss.paddingintV);
  const paddingintH = useSelector((state) => state.btncss.paddingintH);

  const handleChange1 = (e) => {
    dispatch(btncssActions.changePaddingintV(e.target.value));
  };

  const handleChange2 = (e) => {
    dispatch(btncssActions.changePaddingintH(e.target.value));
  };

  const incrementPaddingintV = () => {
    dispatch(btncssActions.changePaddingintV(paddingintV + 1));
  };

  const decrementPaddingintV = () => {
    dispatch(btncssActions.changePaddingintV(paddingintV - 1));
  };

  const incrementPaddingintH = () => {
    dispatch(btncssActions.changePaddingintH(paddingintH + 1));
  };

  const decrementPaddingintH = () => {
    dispatch(btncssActions.changePaddingintH(paddingintH - 1));
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
