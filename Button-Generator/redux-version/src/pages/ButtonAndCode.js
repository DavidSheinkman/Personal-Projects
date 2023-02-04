import React from "react";
import Button from "./Button";
import Code from "./Code";
import styles from "./ButtonAndCode.module.css";
import { useSelector } from "react-redux";

const ButtonAndCode = ({ cssCode, handleCopyClick }) => {
  const buttonText = useSelector((state) => state.btncss.buttonText);

  return (
    <div>
      <div className={styles.buttonAndCodeContainer}>
        <h2 className={styles.result}>FINAL RESULT: </h2>
        <Button className={styles.centerButton}>{buttonText}</Button>
      </div>
      <Code code={cssCode} handleCopyClick={handleCopyClick} />
    </div>
  );
};

export default ButtonAndCode;
