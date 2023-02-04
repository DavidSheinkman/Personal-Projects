import React, { useState } from "react";
import styles from "./Input2.module.css";
import InputText from "./InputText";
import InputColor from "./InputColor";
import Size from "./Size";
import Border from "./Border";
import Shadows from "./Shadows";
import Hover from "./Hover";
import Gif from "./Gif";

const Input2 = () => {
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
        <InputText/>
      ) : activeTab === "InputColor" ? (
        <InputColor/>
      ) : activeTab === "Size" ? (
        <Size/>
      ) : activeTab === "Border" ? (
        <Border/>
      ) : activeTab === "Shadows" ? (
        <Shadows/>
      ) : activeTab === "Hover" ? (
        <Hover/>
      ) : activeTab === "Gif" ? (
        <Gif/>
      ) : null}
    </div>
  );
};

export default Input2;
