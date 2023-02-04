import React, { useState } from "react";
import styles from "./Input2.module.css";
import InputText from "./InputText";
import InputColor from "./InputColor";
import Size from "./Size";
import Border from "./Border";
import Shadows from "./Shadows";
import Hover from "./Hover";
import Gif from "./Gif";

const Input2 = ({
  buttonText,
  setButtonText,
  setBgColor,
  bgColor,
  setTextColor,
  textColor,
  setBorderColor,
  borderColor,
  setFontSize,
  fontSize,
  setFontWeight,
  fontWeight,
  setFontFamily,
  fontFamily,
  setFontStyle,
  fontStyle,
  setPaddingintV,
  paddingintV,
  setPaddingintH,
  paddingintH,
  setBorderRadius,
  borderRadius,
  setBorderSize,
  borderSize,
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
  bgColorHover,
  setBgColorHover,
  textColorHover,
  setTextColorHover,
  borderColorHover,
  setBorderColorHover,
  setGifLink,
  gifLink,
}) => {
  const [activeTab, setActiveTab] = useState("InputColor");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <header>
        <div className={styles.tabContainer}>
          <div
            className={`${styles.tab} ${
              activeTab === "InputColor" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("InputColor")}
          >
            Color
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "InputText" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("InputText")}
          >
            Text
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Size" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Size")}
          >
            Size
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Border" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Border")}
          >
            Border
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Shadows" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Shadows")}
          >
            Shadows
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Hover" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Hover")}
          >
            Hover
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Gif" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("Gif")}
          >
            Gif
          </div>
        </div>
      </header>
      {activeTab === "InputText" ? (
        <InputText
          setButtonText={setButtonText}
          buttonText={buttonText}
          setFontSize={setFontSize}
          fontSize={fontSize}
          setFontWeight={setFontWeight}
          fontWeight={fontWeight}
          setFontFamily={setFontFamily}
          fontFamily={fontFamily}
          setFontStyle={setFontStyle}
          fontStyle={fontStyle}
        />
      ) : activeTab === "InputColor" ? (
        <InputColor
          setBgColor={setBgColor}
          bgColor={bgColor}
          setTextColor={setTextColor}
          textColor={textColor}
          setBorderColor={setBorderColor}
          borderColor={borderColor}
        />
      ) : activeTab === "Size" ? (
        <Size
          setPaddingintV={setPaddingintV}
          paddingintV={paddingintV}
          setPaddingintH={setPaddingintH}
          paddingintH={paddingintH}
        />
      ) : activeTab === "Border" ? (
        <Border
          setBorderRadius={setBorderRadius}
          borderRadius={borderRadius}
          setBorderSize={setBorderSize}
          borderSize={borderSize}
        />
      ) : activeTab === "Shadows" ? (
        <Shadows
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
        />
      ) : activeTab === "Hover" ? (
        <Hover
          bgColorHover={bgColorHover}
          setBgColorHover={setBgColorHover}
          textColorHover={textColorHover}
          setTextColorHover={setTextColorHover}
          borderColorHover={borderColorHover}
          setBorderColorHover={setBorderColorHover}
        />
      ) : activeTab === "Gif" ? (
        <Gif gifLink={gifLink} setGifLink={setGifLink} />
      ) : null}
    </div>
  );
};

export default Input2;
