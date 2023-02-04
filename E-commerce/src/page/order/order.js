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
import OrdersTable from "./OrdersTable";
import { async } from "@firebase/util";

// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Modal from "react-bootstrap/Modal";
// import Row from "react-bootstrap/Row";

/**
 * @author
 * @function
 **/

export const Order = (props) => {
  const [array, setArray] = useState("");
  const [statusCol, setSStatusCol] = useState("START");

  const getData = async (e) => {
    // e.preventDefault();

    const collectionRefCategory = collection(
      database,
      `wewe/1/${props.status}`
    );
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

  // const lol = async () =>  {
  //   const Category = collection(database, `wewe/1/PROSESS`);
  //   const data1 = await getDocs(Category);

  //   setArray(
  //     data1.docs.map((item) => {
  //       return { ...item.data(), id: item.id };
  //     })
  //   );

  // }

  // useEffect(()  =>  {
  //   lol()
  // },[statusCol])

  // const Render = async (e) => {
  //   setSStatusCol("SDd")
  //     }

  const console1 = () => {
    console.log(array);
  };

  useEffect(() => {
    console.log("lol", array);
  }, []);

  return (
    <div>
      <div>
        {array ? (
          <OrdersTable className={"HeaderOrder"} orders2={array} />
        ) : null}
        <button onClick={console1}>sadadad</button>
      </div>
      {/* <button onClick={Render}>xxx</button> */}
    </div>
  );
};
