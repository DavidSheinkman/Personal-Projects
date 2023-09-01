import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import Navbar from "./Navbar";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4209",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "90a3208c21msh89c6df17c9dc973p180a95jsn90576a319607",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.request(options);

        const productData = response.data.products.map((item) => ({
          ...item,
          key: item.id,
        }));

        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <img
        className={styles.bannerImg}
        src="https://i.imgur.com/e7BbEuW.jpg"
        alt="Banner"
      ></img>
      <h1 className={styles.productTitle}>Products</h1>
      <div className={styles.underline}></div>

      {!products && <div>LOADING</div>}

      {products && (
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.id} className={styles.productItemWrapper}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
