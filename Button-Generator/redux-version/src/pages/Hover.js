import React, { Fragment } from "react";
import styles from "./Hover.module.css";
import { useSelector, useDispatch } from "react-redux";
import { btncssActions } from "../store/btncss-slice";

const Hover = () => {
  const dispatch = useDispatch();
  const bgColorHover = useSelector((state) => state.btncss.bgColorHover);
  const textColorHover = useSelector((state) => state.btncss.textColorHover);
  const borderColorHover = useSelector(
    (state) => state.btncss.borderColorHover
  );

  const handleBgColorChange1 = (e) => {
    dispatch(btncssActions.changeBgColorHover(e.target.value));
  };

  const handleBgColorChange2 = (e) => {
    dispatch(btncssActions.changeTextColorHover(e.target.value));
  };

  const handleBgColorChange3 = (e) => {
    dispatch(btncssActions.changeBorderColorHover(e.target.value));
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
