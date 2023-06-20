import React from "react";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";


const Navbar = () => {


  const mainTextColor = useSelector((state) => state.picturesettings.mainTextColor);


  return (
    <nav  className={styles.navbar} >
      <ul >
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>Services</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>Features</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>FAQ</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>Pricing</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>Team</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>Blog</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#" className={styles.navbarLink}>Contact</a>
        </li>
        <li>
          <a style={{ color: mainTextColor}} href="#"  className={styles.navbarLink}>Support</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
