import React, { Fragment } from "react";
import styles from "./Gif.module.css";

const Gif = ({ gifLink, setGifLink }) => {
  const handleGifLinkChange = (e) => {
    setGifLink(e.target.value);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <label className={styles.label}>Add a GIF to your button:</label>

        <input
          type="text"
          value={gifLink}
          onChange={handleGifLinkChange}
          className={styles.input}
          placeholder="Enter GIF URL here"
        />
        <label className={styles.exampleLabel}>
          Example: https://i.stack.imgur.com/EZ1Mp.gif
        </label>
      </div>
    </Fragment>
  );
};

export default Gif;
