import React from "react";

/**
 * @author
 * @function
 **/

const Order = (props) => {
  return (
    <li>
      <figure>
        <p>{props.date}</p>
      </figure>
      <button onClick={() => console.log(props.order)}>more info</button>
    </li>
  );
};

export default Order;
