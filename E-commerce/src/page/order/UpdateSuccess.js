import React, { useState } from "react";
import styles from "./UpdateSuccess.module.css";

const UpdateSuccess = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.updateSuccessModal}>
      <div className={styles.updateSuccessContent}>
        <h2>Update Successful</h2>
        <button
          className={styles.okButton}
          onClick={() => {
            onClose();
            setIsVisible(false);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default UpdateSuccess;
