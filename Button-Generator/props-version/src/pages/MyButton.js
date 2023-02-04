import React, { useState, useEffect, Fragment } from "react";
import styles from "./MyButton.module.css";
import Input2 from "./Input2";
import ButtonAndCode from "./ButtonAndCode";

function MyButton() {
  const [buttonText, setButtonText] = useState("My Button");
  const [bgColor, setBgColor] = useState("#0066CC");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [borderColor, setBorderColor] = useState("#0066CC");
  const [fontSize, setFontSize] = useState(14);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontStyle, setFontStyle] = useState("normal");
  const [paddingintV, setPaddingintV] = useState(10);
  const [paddingintH, setPaddingintH] = useState(30);
  const [borderSize, setBorderSize] = useState(1);
  const [borderRadius, setBorderRadius] = useState(50);
  const [boxShadowPositionH, setBoxShadowPositionH] = useState(0);
  const [boxShadowPositionV, setBoxShadowPositionV] = useState(0);
  const [boxShadowBlurRadius, setBoxShadowBlurRadius] = useState(0);
  const [boxShadowSpreadRadius, setBoxShadowSpreadRadius] = useState(0);
  const [boxShadowColor, setBoxShadowColor] = useState("#FFFFFF");
  const [textShadowPositionH, setTextShadowPositionH] = useState(0);
  const [textShadowPositionV, setTextShadowPositionV] = useState(0);
  const [textShadowBlurRadius, setTextShadowBlurRadius] = useState(0);
  const [textShadowColor, setTextShadowColor] = useState("#FFFFFF");
  const [bgColorHover, setBgColorHover] = useState("#FFFFFF");
  const [textColorHover, setTextColorHover] = useState("#0066CC");
  const [borderColorHover, setBorderColorHover] = useState("#0066CC");
  const [gifLink, setGifLink] = useState("");

  const [cssCode, setCssCode] = useState(`
button {
  background-color: ${bgColor};
  color: ${textColor};
  border:${borderSize}px solid ${borderColor};
  border-radius: ${borderRadius};
  font-size: ${fontSize}px;
  font-family: ${fontFamily};
  font-style: ${fontStyle};
  padding: ${paddingintV}px  ${paddingintH}px;
  font-weight: ${fontWeight};
  box-shadow: ${boxShadowPositionH}px ${boxShadowPositionV}px ${boxShadowBlurRadius}px ${boxShadowSpreadRadius}px ${boxShadowColor};
  text-shadow: ${textShadowPositionH}px ${textShadowPositionV}px ${textShadowBlurRadius}px ${textShadowColor};
  background-image: url("${gifLink}");
}
  
button:hover {
  background-color: ${bgColorHover};
  color: ${textColorHover};
  border:${borderSize}px solid ${borderColorHover};
}`);

  useEffect(() => {
    setCssCode(`
button {
  background-color: ${bgColor};
  color: ${textColor};
  border:${borderSize}px solid ${borderColor};
  border-radius: ${borderRadius};
  font-size: ${fontSize}px;
  font-family: ${fontFamily};
  font-style: ${fontStyle};
  padding: ${paddingintV}px  ${paddingintH}px;
  font-weight: ${fontWeight};
  box-shadow: ${boxShadowPositionH}px ${boxShadowPositionV}px ${boxShadowBlurRadius}px ${boxShadowSpreadRadius}px ${boxShadowColor};
  text-shadow: ${textShadowPositionH}px ${textShadowPositionV}px ${textShadowBlurRadius}px ${textShadowColor};
  background-image: url("${gifLink}");
}

button:hover {
  background-color: ${bgColorHover};
  color: ${textColorHover};
  border:${borderSize}px solid ${borderColorHover};
}`);
  }, [
    bgColor,
    textColor,
    paddingintV,
    paddingintH,
    borderColor,
    borderRadius,
    borderSize,
    fontFamily,
    fontStyle,
    fontWeight,
    fontSize,
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
  ]);

  return (
    <Fragment>
      <h2 className={styles.title}>Button Generator</h2>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h2 className={styles.title2}>CUSTOMIZE YOUR OWN CSS BUTTON</h2>
          <Input2
            bgColor={bgColor}
            setBgColor={setBgColor}
            textColor={textColor}
            setTextColor={setTextColor}
            borderColor={borderColor}
            setBorderColor={setBorderColor}
            buttonText={buttonText}
            setButtonText={setButtonText}
            fontSize={fontSize}
            setFontSize={setFontSize}
            fontWeight={fontWeight}
            setFontWeight={setFontWeight}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontStyle={fontStyle}
            setFontStyle={setFontStyle}
            paddingintV={paddingintV}
            setPaddingintV={setPaddingintV}
            paddingintH={paddingintH}
            setPaddingintH={setPaddingintH}
            borderSize={borderSize}
            setBorderSize={setBorderSize}
            borderRadius={borderRadius}
            setBorderRadius={setBorderRadius}
            boxShadowPositionH={boxShadowPositionH}
            setBoxShadowPositionH={setBoxShadowPositionH}
            boxShadowPositionV={boxShadowPositionV}
            setBoxShadowPositionV={setBoxShadowPositionV}
            boxShadowBlurRadius={boxShadowBlurRadius}
            setBoxShadowBlurRadius={setBoxShadowBlurRadius}
            boxShadowSpreadRadius={boxShadowSpreadRadius}
            setBoxShadowSpreadRadius={setBoxShadowSpreadRadius}
            boxShadowColor={boxShadowColor}
            setBoxShadowColor={setBoxShadowColor}
            textShadowPositionH={textShadowPositionH}
            setTextShadowPositionH={setTextShadowPositionH}
            textShadowPositionV={textShadowPositionV}
            setTextShadowPositionV={setTextShadowPositionV}
            textShadowBlurRadius={textShadowBlurRadius}
            setTextShadowBlurRadius={setTextShadowBlurRadius}
            textShadowColor={textShadowColor}
            setTextShadowColor={setTextShadowColor}
            bgColorHover={bgColorHover}
            setBgColorHover={setBgColorHover}
            textColorHover={textColorHover}
            setTextColorHover={setTextColorHover}
            borderColorHover={borderColorHover}
            setBorderColorHover={setBorderColorHover}
            gifLink={gifLink}
            setGifLink={setGifLink}
          />
        </div>
        <div className={styles.rightContainer}>
          <ButtonAndCode
            buttonText={buttonText}
            bgColor={bgColor}
            textColor={textColor}
            borderColor={borderColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            fontStyle={fontStyle}
            paddingintV={paddingintV}
            paddingintH={paddingintH}
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
            cssCode={cssCode}
            gifLink={gifLink}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default MyButton;
