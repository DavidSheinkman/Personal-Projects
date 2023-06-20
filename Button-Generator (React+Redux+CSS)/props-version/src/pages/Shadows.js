import React, { Fragment } from "react";
import styles from "./Shadows.module.css";

const Shadows = ({
  boxShadowPositionH,
  setBoxShadowPositionH,
  boxShadowPositionV,
  setBoxShadowPositionV,
  boxShadowBlurRadius,
  setBoxShadowBlurRadius,
  boxShadowSpreadRadius,
  setBoxShadowSpreadRadius,
  boxShadowColor,
  setBoxShadowColor,
  textShadowPositionH,
  setTextShadowPositionH,
  textShadowPositionV,
  setTextShadowPositionV,
  textShadowBlurRadius,
  setTextShadowBlurRadius,
  textShadowColor,
  setTextShadowColor,
}) => {
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
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
            onClick={decrement(setBoxShadowPositionH)}
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowPositionH}
            onChange={handleChange(setBoxShadowPositionH)}
          />
          <button
            className={styles.button}
            onClick={increment(setBoxShadowPositionH)}
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
            onClick={decrement(setBoxShadowPositionV)}
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowPositionV}
            onChange={handleChange(setBoxShadowPositionV)}
          />
          <button
            className={styles.button}
            onClick={increment(setBoxShadowPositionV)}
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
            onClick={decrement(setBoxShadowBlurRadius)}
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowBlurRadius}
            onChange={handleChange(setBoxShadowBlurRadius)}
          />
          <button
            className={styles.button}
            onClick={increment(setBoxShadowBlurRadius)}
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
            onClick={decrement(setBoxShadowSpreadRadius)}
          >
            -
          </button>
          <input
            type="text"
            value={boxShadowSpreadRadius}
            onChange={handleChange(setBoxShadowSpreadRadius)}
          />
          <button
            className={styles.button}
            onClick={increment(setBoxShadowSpreadRadius)}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.inputContainerC}>
        <label>Box Shadow Color:</label>

        <input
          type="color"
          value={boxShadowColor}
          onChange={handleChange(setBoxShadowColor)}
        />
        <input
          type="text"
          value={boxShadowColor}
          onChange={handleChange(setBoxShadowColor)}
        />
      </div>
      <div className={styles.inputContainerC}>
        <label>Text Shadow Horizontal Position</label>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            onClick={decrement(setTextShadowPositionH)}
          >
            -
          </button>
          <input
            type="text"
            value={textShadowPositionH}
            onChange={handleChange(setTextShadowPositionH)}
          />
          <button
            className={styles.button}
            onClick={increment(setTextShadowPositionH)}
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
            onClick={decrement(setTextShadowPositionV)}
          >
            -
          </button>
          <input
            type="text"
            value={textShadowPositionV}
            onChange={handleChange(setTextShadowPositionV)}
          />
          <button
            className={styles.button}
            onClick={increment(setTextShadowPositionV)}
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
            onClick={decrement(setTextShadowBlurRadius)}
          >
            -
          </button>
          <input
            type="text"
            value={textShadowBlurRadius}
            onChange={handleChange(setTextShadowBlurRadius)}
          />
          <button
            className={styles.button}
            onClick={increment(setTextShadowBlurRadius)}
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
          onChange={handleChange(setTextShadowColor)}
        />
        <input
          type="text"
          value={textShadowColor}
          onChange={handleChange(setTextShadowColor)}
        />
      </div>
    </Fragment>
  );
};

export default Shadows;
