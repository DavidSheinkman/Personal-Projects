import React, { Fragment } from "react";
import styles from "./Shadows.module.css";
import { useSelector, useDispatch } from "react-redux";
import { btncssActions } from "../store/btncss-slice";

const Shadows = () => {
  const dispatch = useDispatch();
  const boxShadowPositionH = useSelector(
    (state) => state.btncss.boxShadowPositionH
  );
  const boxShadowPositionV = useSelector(
    (state) => state.btncss.boxShadowPositionV
  );
  const boxShadowBlurRadius = useSelector(
    (state) => state.btncss.boxShadowBlurRadius
  );
  const boxShadowSpreadRadius = useSelector(
    (state) => state.btncss.boxShadowSpreadRadius
  );
  const boxShadowColor = useSelector((state) => state.btncss.boxShadowColor);
  const textShadowPositionH = useSelector(
    (state) => state.btncss.textShadowPositionH
  );
  const textShadowPositionV = useSelector(
    (state) => state.btncss.textShadowPositionV
  );
  const textShadowBlurRadius = useSelector(
    (state) => state.btncss.textShadowBlurRadius
  );
  const textShadowColor = useSelector((state) => state.btncss.textShadowColor);

  const handleBoxShadowPositionH = (e) => {
    dispatch(btncssActions.changeBoxShadowPositionH(e.target.value));
  };

  const handleBoxShadowPositionV = (e) => {
    dispatch(btncssActions.changeBoxShadowPositionV(e.target.value));
  };

  const handleBoxShadowBlurRadius = (e) => {
    dispatch(btncssActions.changeBoxShadowBlurRadius(e.target.value));
  };

  const handleBoxShadowSpreadRadius = (e) => {
    dispatch(btncssActions.changeBoxShadowSpreadRadius(e.target.value));
  };

  const handleBoxShadowColor = (e) => {
    dispatch(btncssActions.changeBoxShadowColor(e.target.value));
  };

  const handleTextShadowPositionH = (e) => {
    dispatch(btncssActions.changeTextShadowPositionH(e.target.value));
  };

  const handleTextShadowPositionV = (e) => {
    dispatch(btncssActions.changeTextShadowPositionV(e.target.value));
  };

  const handleTextShadowBlurRadius = (e) => {
    dispatch(btncssActions.changeTextShadowBlurRadius(e.target.value));
  };

  const handleTextShadowColor = (e) => {
    dispatch(btncssActions.changeTextShadowColor(e.target.value));
  };

  const increment = (setter) => () => {
    setter((prev) => prev + 1);
  };

  const decrement = (setter) => () => {
    setter((prev) => prev - 1);
  };

  return (
    <Fragment>
      <div className={styles.inputContainerC}>
        <label>Box Shadow Horizontal Position</label>

        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowPositionH(boxShadowPositionH - 1)
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowPositionH}
            onChange={handleBoxShadowPositionH}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowPositionH(boxShadowPositionH + 1)
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Box Shadow Vertical Position</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowPositionV(boxShadowPositionV - 1)
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowPositionV}
            onChange={handleBoxShadowPositionV}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowPositionV(boxShadowPositionV + 1)
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Box Shadow Blur Radius</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowBlurRadius(boxShadowBlurRadius + 1)
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowBlurRadius}
            onChange={handleBoxShadowBlurRadius}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowBlurRadius(boxShadowBlurRadius + 1)
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Box Shadow Spread Radius</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowSpreadRadius(
                  boxShadowSpreadRadius + 1
                )
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowSpreadRadius}
            onChange={handleBoxShadowSpreadRadius}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeBoxShadowSpreadRadius(
                  boxShadowSpreadRadius + 1
                )
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Box Shadow Color</label>

        <input
          type="color"
          value={boxShadowColor}
          onChange={handleBoxShadowColor}
        />
        <input
          type="text"
          value={boxShadowColor}
          onChange={handleBoxShadowColor}
        />
      </div>
      <div className={styles.inputContainerC}>
        <label>Text Shadow Horizontal Position</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeTextShadowPositionH(textShadowPositionH + 1)
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={textShadowPositionH}
            onChange={handleTextShadowPositionH}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeTextShadowPositionH(textShadowPositionH + 1)
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Text Shadow Vertical Position</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeTextShadowPositionV(textShadowPositionV + 1)
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={textShadowPositionV}
            onChange={handleTextShadowPositionV}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeTextShadowPositionV(textShadowPositionV + 1)
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Text Shadow Blur Radius</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeTextShadowBlurRadius(
                  textShadowBlurRadius + 1
                )
              )
            }
          >
            -
          </button>
          <input
            type="text"
            value={textShadowBlurRadius}
            onChange={handleTextShadowBlurRadius}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(
                btncssActions.changeTextShadowBlurRadius(
                  textShadowBlurRadius + 1
                )
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Text Shadow Color</label>
        <input
          type="color"
          value={textShadowColor}
          onChange={handleTextShadowColor}
        />
        <input
          type="text"
          value={textShadowColor}
          onChange={handleTextShadowColor}
        />
      </div>
    </Fragment>
  );
};

export default Shadows;
