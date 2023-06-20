import React, { useState, useEffect } from "react";
import styles from "./ColorInputComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pictureSettingsActions } from "../store/pictures-slice";

const ColorInputComponent = () => {
  const dispatch = useDispatch();

  const mainTextColorInput = useSelector(
    (state) => state.picturesettings.mainTextColor
  );
  const backgroundColorInput = useSelector(
    (state) => state.picturesettings.backgroundColor
  );
  const buttonColorInput = useSelector(
    (state) => state.picturesettings.buttonColor
  );
  const buttonTextColorInput = useSelector(
    (state) => state.picturesettings.buttonTextColor
  );

  // const [mainTextColorInput, setMainTextColorInput] = useState("#dedede");
  // const [backgroundColorInput, setBackgroundColorInput] = useState("#1b1b1b");
  // const [buttonColorInput, setButtonColorInput] = useState("#2a8a1d");
  // const [buttonTextColorInput, setButtonTextColor] = useState("#ffffff");

  const handleMainTextColor = (event) => {
    dispatch(pictureSettingsActions.changeMainTextColor(event.target.value));
  };

  const handleBackgroundColor = (event) => {
    dispatch(pictureSettingsActions.changeBackgroundColor(event.target.value));
  };

  const handleButtonColor = (event) => {
    dispatch(pictureSettingsActions.changeButtonColor(event.target.value));
  };

  const handleButtonTextColor = (event) => {
    dispatch(pictureSettingsActions.changeButtonTextColor(event.target.value));
  };

  const handleOP = (event) => {
    dispatch(pictureSettingsActions.ColorsOP());
  };

  const handleOP2 = (event) => {
    dispatch(pictureSettingsActions.ColorsOP2());
  };

  const handleOP3 = (event) => {
    dispatch(pictureSettingsActions.ColorsOP3());
  };

  useEffect(() => {}, [
    mainTextColorInput,
    backgroundColorInput,
    buttonColorInput,
    buttonTextColorInput,
  ]);

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.container}  >
      <h1 className={styles.heading}>Choose Colors:</h1>
        <label htmlFor="mainTextColor">
          Main Text Color: {mainTextColorInput}
        </label>
        <input
          value={mainTextColorInput}
          onChange={handleMainTextColor}
          type="color"
          id="mainTextColor"
          name="mainTextColor"
        />

        <label htmlFor="backgroundColor">
          Background Color: {backgroundColorInput}
        </label>
        <input
          type="color"
          value={backgroundColorInput}
          id="backgroundColor"
          name="backgroundColor"
          onChange={handleBackgroundColor}
        />

        <label htmlFor="buttonColor">Button Color: {buttonColorInput}</label>
        <input
          value={buttonColorInput}
          onChange={handleButtonColor}
          type="color"
          id="buttonColor"
          name="buttonColor"
        />

        <label htmlFor="buttonTextColor">
          Button Text Color: {buttonTextColorInput}
        </label>
        <input
          value={buttonTextColorInput}
          onChange={handleButtonTextColor}
          type="color"
          id="buttonTextColor"
          name="buttonTextColor"
        />
      </div>
      <div className={styles.container2} >

      <h1 className={styles.heading}>Optimize Colors:</h1>
        <div>
          <button onClick={handleOP} className={styles.button}>
            Optimize Contrast
          </button>
        </div>
        <div>
          <button onClick={handleOP3} className={styles.button}>
            Compimentry Text 
          </button>
        </div>

        <div>
          <button onClick={handleOP2} className={styles.button}>
            Compimentry BackGround
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorInputComponent;
