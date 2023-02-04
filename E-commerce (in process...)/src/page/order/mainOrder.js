import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../../comp/header/header";
import { Order } from "./order";
import "./css.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

/**
 * @author
 * @function
 **/

export const Orders = (props) => {
  return (
    <div className="popy">
      <Header />
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 jojo "
        justify
      >
        <Tab eventKey="home" title="START">
          <Order status={"START"}></Order>
        </Tab>
        <Tab eventKey="profile" title="PROSESS">
          <Order status={"PROSESS"}></Order>
        </Tab>
        <Tab eventKey="longer-tab" title="END">
          <Order status={"END"}></Order>
        </Tab>
      </Tabs>
    </div>
  );
};
