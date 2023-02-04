import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Spinner from "react-bootstrap/Spinner";
import Header from "../../comp/header/header";
import Table from "react-bootstrap/Table";
import { database } from "../../firebaseConfig";

// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Modal from "react-bootstrap/Modal";
// import Row from "react-bootstrap/Row";
import Order from "./OrderItem";

/**
 * @author
 * @function
 **/

export const Orders = (props) => {
  const [array, setArray] = useState("");

  const collectionRefCategory = collection(database, `wewe/1/${props.status}`);

  const getData = async (e) => {
    // e.preventDefault();
    const data = await getDocs(collectionRefCategory);

    setArray(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );

    console.log(array);
  };

  useEffect(() => {
    getData();
  }, []);

  const console1 = async () => {
    console.log(array);
    const data = await getDocs(collectionRefCategory);

    setArray(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  };

  return (
    <div>
      <ul>
        {array.length > 0
          ? array.map((order) => (
              <Order
                key={order.id}
                id={order.id}
                date={order.date}
                order={order}
              />
            ))
          : null}
      </ul>
      <button onClick={console1}>sadadad</button>
    </div>
  );
};
