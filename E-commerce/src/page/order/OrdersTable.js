import React, { useEffect, useState } from "react";
import OrderInfo from "./OrderInfo";
import UpdateOrder from "./UpdateOrder";
import UpdateSuccess from "./UpdateSuccess";
import OrdersTableHeader from "./OrdersTableHeader";
import OrdersTableRow from "./OrdersTableRow";
import styles from "./OrdersTable.module.css";
import { getDatabase, ref, set } from "firebase/database";
// import firebase from "firebase"
import "firebase/firestore";
import Header from "../../comp/header/header";
import { database } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
const OrdersTable = (props) => {
  const [orders, setOrders] = useState(props.orders2);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(null);
  const [sortedBy, setSortedBy] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleMoreInfo = (orderId) => {
    setSelectedOrderId(orderId);
  };
  const handleMoreInfoClick = (order) => {
    setSelectedOrder(order);
  };
  const handleEditClick = (order) => {
    setUpdateOrder(order);
  };

  const handleUpdateClick = async (updatedOrder) => {
    // Find the index of the order that needs to be updated
    const index = orders.findIndex((order) => order.id === updatedOrder.id);
    // Create a new array with the updated order
    const updatedOrders = [
      ...orders.slice(0, index),
      updatedOrder,
      ...orders.slice(index + 1),
    ];
    // Update the state with the new orders
    setOrders(updatedOrders);
    setUpdateSuccess(true);
    // Create our initial doc

    const washingtonRef = doc(
      database,
      `wewe/1/${updatedOrder.status}`,
      updatedOrder.id
    );

    await updateDoc(washingtonRef, {
      ...updatedOrder,
    });

    // const status = updatedOrder.status
    // const washingtonRef = doc(database,  `$wewe/1/${status}`, updatedOrder.id);

    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   ...updatedOrder,
    // });
  };

  const handleSort = (name) => {
    if (sortedBy === name) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedBy(name);
      setSortDirection("asc");
    }
  };
  let sortedOrders = [...orders];
  sortedOrders.sort((a, b) => {
    if (a[sortedBy] < b[sortedBy]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (a[sortedBy] > b[sortedBy]) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const StatusFunc = (item) => {
    if (item.status == "START") {
      const getData = async (item) => {
        console.log(item);
        await deleteDoc(doc(database, `wewe/1/START`, item.id));
        await addDoc(collection(database, `wewe/1/PROSESS`), {
          ...item,
          status: "PROSESS",
        });
      };
      getData(item);
    } else {
      const getData = async (item) => {
        console.log(item);
        await deleteDoc(doc(database, `wewe/1/PROSESS`, item.id));
        await addDoc(collection(database, `wewe/1/END`), {
          ...item,
          status: "END",
        });
      };

      getData(item);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <OrdersTableHeader
            handleSort={handleSort}
            sortedBy={sortedBy}
            sortDirection={sortDirection}
          />
        </thead>
        <tbody className={styles.tableBody}>
          {sortedOrders.map((order) => (
            <OrdersTableRow
              key={order.id}
              order={order}
              onMoreInfo={handleMoreInfo}
              handleMoreInfoClick={handleMoreInfoClick}
              handleEditClick={handleEditClick}
              StatusFunc={StatusFunc}
            />
          ))}
        </tbody>
      </table>
      {selectedOrderId && (
        <OrderInfo
          order={
            orders.length > 0
              ? orders.find((order) => order.id === selectedOrderId)
              : null
          }
          onClose={() => setSelectedOrderId(null)}
          handleUpdateClick={handleUpdateClick}
          handelStatuse={StatusFunc}
        />
      )}
    </div>
  );
};

export default OrdersTable;
