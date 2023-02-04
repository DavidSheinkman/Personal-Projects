import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import styles from "./Code.module.css";
import Highlight from "react-highlight";
import "highlight.js/styles/github-gist.css";

const Code = ({ code }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.codeContainer}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>Code:</h3>
        <button className={styles.copyButton} onClick={handleCopyClick}>
          <FontAwesomeIcon icon={faCopy} className={styles.copyIcon} />
        </button>
      </div>

      <div className={styles.codeBackground}>
        <Highlight className="css">{code}</Highlight>
      </div>
    </div>
  );
};

export default Code;
