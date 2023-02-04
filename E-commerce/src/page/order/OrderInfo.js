import React, { useState, useEffect } from "react";
import styles from "./OrderInfo.module.css";
import UpdateOrder from "./UpdateOrder";
import UpdateSuccess from "./UpdateSuccess";
import { Drog_Custom } from "./costome";
function OrderInfo({
  order,
  onClose,
  onEdit,
  handleUpdateClick,
  handelStatuse,
}) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log("order", order);
    console.log("order1", order.product);
  }, []);

  const getObjectValues = (obj) => {
    let objArr = [];
    for (let key in obj) {
      objArr.push({
        name: obj[key].name,
        text: obj[key].text,
        text2: obj[key].text2,
        color: obj[key].color,
        fontSize: obj[key].fontSize,
        leftRight: obj[key].leftRight,
        mColor: obj[key].mColor,
        textColor: obj[key].textColor,
        updDown: obj[key].updDown,
        europe: obj[key].europe,
        font: obj[key].font,
      });
    }
    return objArr;
  };

  const objArr = getObjectValues(order.product);

  return (
    <div className={styles.orderInfoModal}>
      <div className={styles.orderInfoContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Order Info</h2>
        <table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{order.id}</td>
            </tr>
            <tr>
              <td>Customer:</td>
              <td>{order.customer}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{order.moreInfo.phone}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{order.moreInfo.email}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{order.date}</td>
            </tr>
            <tr>
              <td>Pricing:</td>
              <td>${order.pricing}</td>
            </tr>

            <tr>
              <td>Address:</td>
              <td>{order.moreInfo.address}</td>
            </tr>

            <div>
              {objArr.map((obj, i) => (
                <div key={i}>
                  <p>שם המוצר:{obj.name}</p>
                  {obj.text ? (
                    <Drog_Custom product={obj}></Drog_Custom>
                  ) : (
                    <div>
                      <p>טקסט{obj.text}</p>
                      <p>טקסט2{obj.text2}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </tbody>
        </table>
        <button
          className={styles.editButton}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>

      {isEditing && (
        <UpdateOrder
          order={order}
          onCancel={() => setIsEditing(false)}
          onUpdate={handleUpdateClick}
          handelStatuse={handelStatuse}
        />
      )}
    </div>
  );
}

export default OrderInfo;
