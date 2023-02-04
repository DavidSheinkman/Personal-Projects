import React from "react";
import styles from "./OrdersTableRow.module.css";

const OrdersTableRow = ({ order, onMoreInfo, StatusFunc }) => {
  return (
    <tr>
      <td className={styles.cell}>{order.id}</td>
      <td className={styles.cell}>{order.customer}</td>
      <td className={styles.cell}>{order.date}</td>
      <td className={styles.cell}>${order.pricing}</td>
      <td className={styles.cell}>{order.status} </td>
      <button onClick={() => StatusFunc(order)}>שנה סטאטוס</button>
      <td className={styles.cell}>{order.payment}</td>
      <td className={styles.cell}>
        <button
          className={styles.moreInfoButton}
          onClick={() => onMoreInfo(order.id)}
        >
          More Info
        </button>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
