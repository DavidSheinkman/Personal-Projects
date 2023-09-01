import React, { useState, Fragment } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import PopUpCart from "./PopUpCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [PopUpCartModule, setPopUpCartModule] = useState(false);
  const productsNumber = useSelector(
    (state) => state.cartSettings.productsNumber
  );

  const handleClosePopUp = () => {
    setPopUpCartModule(false);
  };

  const handleOpenPopUp = () => {
    setPopUpCartModule(true);
  };

  return (
    <Fragment>
      {PopUpCartModule && <PopUpCart onClose={() => handleClosePopUp(false)} />}
      <div className={styles.navbar}>
        <img
          className={styles.logo}
          src="https://i.imgur.com/q3DXqpe.png"
          alt="Logo"
        ></img>

        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>
            <span className={styles.homelink}>Home</span>
          </Link>
          <span className={styles.shoplogo} onClick={handleOpenPopUp}>
            <FiShoppingCart />
            <div className={styles.cartBadge}>{productsNumber}</div>
          </span>
        </div>
      </div>

      <div className={styles.navbarm}>
        <span className={styles.ham}>
          <RxHamburgerMenu />
        </span>

        <Link to="/" className={styles.link}>
          <img
            className={styles.logom}
            src="https://i.imgur.com/q3DXqpe.png"
            alt="Logo"
          ></img>
        </Link>

        <span className={styles.shoplogom} onClick={handleOpenPopUp}>
          <FiShoppingCart />
          <div className={styles.cartBadge}>{productsNumber}</div>
        </span>
      </div>
    </Fragment>
  );
};

export default Navbar;
