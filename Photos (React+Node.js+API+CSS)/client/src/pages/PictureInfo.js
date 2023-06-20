import React from "react";
import styles from "./PictureInfo.module.css";
import { AiFillEye } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { BsFillCloudDownloadFill } from "react-icons/bs";

const PictureInfo = ({ picture, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img
          className={styles.Image}
          src={picture.largeImageURL}
          alt={picture.title}
        />

        <div className={styles.row1}>
          <img
            className={styles.userImage}
            src={picture.userImageURL}
            alt={picture.title}
          />

          <p>@{picture.user}</p>
        </div>
        <div className={styles.row2}>
          <p>
            <AiFillEye /> {picture.views}
          </p>
          <p>
            <FaCommentAlt /> {picture.comments}
          </p>
          <p>
            <BsFillCloudDownloadFill /> {picture.downloads}
          </p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default PictureInfo;
