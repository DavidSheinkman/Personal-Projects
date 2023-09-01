import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styles from "./OneProduct.module.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import PopUpAdd from "./PopUpAdd";
import PopUpError from "./PopUpError";
import { useDispatch } from "react-redux";
import { cartSettingsActions } from "../store/cart-slice";

const OneProduct = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();

  const [PopUpCartModule, setPopUpCartModule] = useState(false);
  const [PopUpErrorModule, setPopUpErrorModule] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [colorsList, setColorsList] = useState([]);
  const [displaySizeTextList, setDisplaySizeTextList] = useState([]);

  const [selectedAttributes, setSelectedAttributes] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {
        id: productID,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "90a3208c21msh89c6df17c9dc973p180a95jsn90576a319607",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    const fetchProductInfo = async () => {
      if (productID) {
        try {
          const response = await axios.request(options);

          const productData = response.data;
          setProductInfo(productData);

          setImgUrl(productData.media.images[0].url);

          const colorsList1 = [];
          const displaySizeTextList1 = [];

          for (const variant of productData.variants) {
            colorsList1.push({ value: variant.colour, key: variant.id });
            displaySizeTextList1.push({
              value: variant.displaySizeText,
              key: variant.id,
            });
          }

          setDisplaySizeTextList(displaySizeTextList1);

          const filteredArray = colorsList1.filter(
            (item, index, self) =>
              index === self.findIndex((obj) => obj.value === item.value)
          );

          setColorsList(filteredArray);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      } else {
        setProductInfo(null);
      }
    };

    fetchProductInfo();
  }, [productID]);

  useEffect(() => {
    if (productInfo) {
      setImgUrl(productInfo.media.images[0].url);
      setPrice(productInfo.price.current.text);
      setTitle(productInfo.name);
    }
  }, [selectedAttributes, productInfo]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    console.log(selectedAttributes.size);
    console.log(selectedAttributes.color);

    if (selectedAttributes.size && selectedAttributes.color) {
      setPopUpCartModule(true);
      dispatch(cartSettingsActions.productsNumber(quantity));
    } else {
      setPopUpErrorModule(true);
    }
  };

  const handleAttributeChange = (title, value) => {
    console.log(value);
    setSelectedAttributes((prevAttributes) => ({
      ...prevAttributes,
      [title]: value,
    }));
  };

  const handleImgButtonClick = (buttonNumber) => {
    if (productInfo.media.images[buttonNumber]) {
      setImgUrl(productInfo.media.images[buttonNumber].url);
    } else {
      setImgUrl(productInfo.images[0].url);
    }
  };

  const handleClosePopUp = () => {
    setPopUpCartModule(false);
    setPopUpErrorModule(false);
  };

  return (
    <div className={styles.mainContainer}>
      {PopUpCartModule && <PopUpAdd onClose={() => handleClosePopUp(false)} />}
      {PopUpErrorModule && (
        <PopUpError onClose={() => handleClosePopUp(false)} />
      )}
      {productInfo && (
        <Fragment>
          <Navbar />
          <div className={styles.product}>
            <div className={styles.productImage}>
              <img
                src={`https://${imgUrl}`}
                alt={productInfo.title}
                className={styles.productImageSize}
              />
              <div className={styles.buttonRow}>
                <button
                  onClick={() => handleImgButtonClick(0)}
                  className={styles.imgButton}
                  autoFocus
                ></button>
                <button
                  onClick={() => handleImgButtonClick(1)}
                  className={styles.imgButton}
                ></button>
                <button
                  onClick={() => handleImgButtonClick(2)}
                  className={styles.imgButton}
                ></button>
              </div>
            </div>
            <div className={styles.productInfo}>
              <h1 className={styles.title}>{title}</h1>
              <h2 className={styles.price}>{price}</h2>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: productInfo.description }}
              ></p>

              <select
                className={styles.dropDown}
                id="color"
                value={selectedAttributes.color} // Use selected value from state
                onChange={(e) => handleAttributeChange("color", e.target.value)}
              >
                <option value="">Choose color</option>
                {colorsList.map((color) => (
                  <option key={color.key} value={color.value}>
                    {color.value}
                  </option>
                ))}
              </select>

              <select
                className={styles.dropDown}
                id="size"
                value={selectedAttributes.size} // Use selected value from state
                onChange={(e) => handleAttributeChange("size", e.target.value)}
              >
                <option value="">Choose size</option>
                {displaySizeTextList.map((size) => (
                  <option key={size.key} value={size.value}>
                    {size.value}
                  </option>
                ))}
              </select>

              <div className={styles.quantityCounter}>
                <button
                  className={styles.quantityCounterButton}
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className={styles.quantityCounterButton}>{quantity}</span>
                <button
                  className={styles.quantityCounterButton}
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              <button className={styles.cartButton} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default OneProduct;
