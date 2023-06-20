import React from "react";
import styles from "./TextButtonComponent.module.css";
import { useSelector } from "react-redux";

const TextButtonComponent = () => {


  const buttonColor = useSelector((state) => state.picturesettings.buttonColor);
  const buttonTextColor = useSelector((state) => state.picturesettings.buttonTextColor);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UI Colors</h1>
      <h1 className={styles.heading}>Optimization</h1>
      <p className={styles.paragraph} style={{ marginTop: "3rem" }}>
      Simplifying the process of choosing the perfect palette,
      
        
      </p>
      <p className={styles.paragraph}>
      Select colors for your UI and receive optimized alternatives.
      </p>
      
      <button className={styles.button} style={{ backgroundColor: buttonColor , color: buttonTextColor}}>Button Example</button> 
    </div>
  );
};

export default TextButtonComponent;
