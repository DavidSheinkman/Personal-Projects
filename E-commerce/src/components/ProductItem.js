import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <Fragment>
      <Link to={`product/${product.id}`}>
        <img
          className={styles.img}
          src={`https://${product.imageUrl}`}
          alt={product.name}
        />
      </Link>

      <Link className={styles.link} to={`product/${product.id}`}>
        <h4 className={styles.title}>{product.name}</h4>
      </Link>

      <h5 className={styles.price}>{product.price.current.text}</h5>
      <p className={styles.description}>{product.description}</p>
    </Fragment>
  );
};

export default ProductItem;
