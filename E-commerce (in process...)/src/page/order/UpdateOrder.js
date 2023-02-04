import React, { useState } from "react";
import UpdateSuccess from "./UpdateSuccess";
import styles from "./UpdateOrder.module.css";


const UpdateOrder = ({ order, onCancel, onUpdate }) => {
  const [updatedOrder, setUpdatedOrder] = useState({ ...order });
  const [isVisible, setIsVisible] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedOrder({ ...updatedOrder, [name]: value });
  };

  if (updateSuccess) {
    return <UpdateSuccess onClose={() => setUpdateSuccess(true)} />;
  }

  if (!isVisible) {
    return <UpdateSuccess onClose={() => setIsVisible(false)} />;
  }

  return (
    <div className={styles.updateOrderModal}>
      <div className={styles.updateOrderContent}>
        <h2>Update Order</h2>
        <form>
          <label htmlFor="customer">Customer:</label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={updatedOrder.customer}
            onChange={handleChange}
          />
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={updatedOrder.date}
            onChange={handleChange}
          />
          <label htmlFor="pricing">Pricing:</label>
          <input
            type="text"
            id="pricing"
            name="pricing"
            value={updatedOrder.pricing}
            onChange={handleChange}
          />
          {/* <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={updatedOrder.status}
            onChange={handleChange}
          /> */}
          <label htmlFor="payment">Payment:</label>
          <input
            type="text"
            id="payment"
            name="payment"
            value={updatedOrder.payment}
            onChange={handleChange}
          />
        </form>
        <button
          className={styles.updateButton}
          onClick={() => {
            console.log(updatedOrder);
            setUpdateSuccess(true)
            onUpdate(updatedOrder);
            setIsVisible(true);
          }}
        >
          Update
        </button>
        <button
          className={styles.cancelButton}
          onClick={() => {
            onCancel();
            setIsVisible(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateOrder;
