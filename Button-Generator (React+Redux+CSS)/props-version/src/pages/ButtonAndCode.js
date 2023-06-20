import React from "react";
import Button from "./Button";
import Code from "./Code";
import styles from "./ButtonAndCode.module.css";

const ButtonAndCode = ({
  buttonText,
  bgColor,
  textColor,
  borderColor,
  fontSize,
  fontWeight,
  fontFamily,
  fontStyle,
  paddingintV,
  paddingintH,
  borderSize,
  borderRadius,
  boxShadowPositionH,
  boxShadowPositionV,
  boxShadowBlurRadius,
  boxShadowSpreadRadius,
  boxShadowColor,
  textShadowPositionH,
  textShadowPositionV,
  textShadowBlurRadius,
  textShadowColor,
  bgColorHover,
  textColorHover,
  borderColorHover,
  gifLink,
  cssCode,
  handleCopyClick,
}) => {
  return (
    <div>
      <div className={styles.buttonAndCodeContainer}>
        <h2 className={styles.result}>FINAL RESULT: </h2>
        <Button
          className={styles.centerButton}
          bgColor={bgColor}
          textColor={textColor}
          borderColor={borderColor}
          fontSize={fontSize}
          fontFamily={fontFamily}
          fontStyle={fontStyle}
          paddingintV={paddingintV}
          paddingintH={paddingintH}
          fontWeight={fontWeight}
          borderSize={borderSize}
          borderRadius={borderRadius}
          boxShadowPositionH={boxShadowPositionH}
          boxShadowPositionV={boxShadowPositionV}
          boxShadowBlurRadius={boxShadowBlurRadius}
          boxShadowSpreadRadius={boxShadowSpreadRadius}
          boxShadowColor={boxShadowColor}
          textShadowPositionH={textShadowPositionH}
          textShadowPositionV={textShadowPositionV}
          textShadowBlurRadius={textShadowBlurRadius}
          textShadowColor={textShadowColor}
          bgColorHover={bgColorHover}
          textColorHover={textColorHover}
          borderColorHover={borderColorHover}
          gifLink={gifLink}
        >
          {buttonText}
        </Button>
      </div>
      <Code code={cssCode} handleCopyClick={handleCopyClick} />
    </div>
  );
};

export default ButtonAndCode;
