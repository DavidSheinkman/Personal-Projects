import React from 'react';
import styles from './OrdersTableHeader.module.css';

const OrdersTableHeader = ({ handleSort }) => {

  
  const handleClick = (name) => {
    handleSort(name);
  };

  return (
    <tr>
      <th className={styles.cell} onClick={() => handleClick('id')}>ID</th>
      <th className={styles.cell} onClick={() => handleClick('customer')}>Customer</th>
      <th className={styles.cell} onClick={() => handleClick('date')}>Date</th>
      <th className={styles.cell} onClick={() => handleClick('pricing')}>Pricing</th>
      <th className={styles.cell} onClick={() => handleClick('status')}>Status</th>
      <th className={styles.cell} onClick={() => handleClick('payment')}>Payment</th>
      <th className={styles.cell}>More Info</th>
    </tr>
  );
};

export default OrdersTableHeader;
