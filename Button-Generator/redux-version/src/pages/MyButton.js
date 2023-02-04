import React, { useState, useEffect, Fragment } from "react";
import styles from "./MyButton.module.css";
import Input2 from "./Input2";
import ButtonAndCode from "./ButtonAndCode";
import { useSelector } from "react-redux";

function MyButton() {
  const bgColor = useSelector((state) => state.btncss.bgColor);
  const textColor = useSelector((state) => state.btncss.textColor);
  const borderColor = useSelector((state) => state.btncss.borderColor);
  const fontSize = useSelector((state) => state.btncss.fontSize);
  const fontWeight = useSelector((state) => state.btncss.fontWeight);
  const fontFamily = useSelector((state) => state.btncss.fontFamily);
  const fontStyle = useSelector((state) => state.btncss.fontStyle);
  const paddingintV = useSelector((state) => state.btncss.paddingintV);
  const paddingintH = useSelector((state) => state.btncss.paddingintH);
  const borderRadius = useSelector((state) => state.btncss.borderRadius);
  const borderSize = useSelector((state) => state.btncss.borderSize);
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
  const bgColorHover = useSelector((state) => state.btncss.bgColorHover);
  const textColorHover = useSelector((state) => state.btncss.textColorHover);
  const borderColorHover = useSelector(
    (state) => state.btncss.borderColorHover
  );
  const gifLink = useSelector((state) => state.btncss.gifLink);

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
          <Input2 />
        </div>
        <div className={styles.rightContainer}>
          <ButtonAndCode cssCode={cssCode} />
        </div>
      </div>
    </Fragment>
  );
}

export default MyButton;
