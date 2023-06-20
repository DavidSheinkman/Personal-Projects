import React, {  useEffect }  from "react";
import styles from "./MainComponent.module.css";
import Navbar from "./Navbar";
import TextButtonComponent from "./TextButtonComponent";
import ColorInputComponent from "./ColorInputComponent";
import { useSelector } from "react-redux";


const MainComponent = () => {



  const backgroundColor = useSelector((state) => state.picturesettings.backgroundColor);
  const mainTextColor = useSelector((state) => state.picturesettings.mainTextColor);



  useEffect(() => {
    
  }, [backgroundColor,mainTextColor]);




  return (
    <div  className={styles.container} style={{ backgroundColor: backgroundColor , color: mainTextColor}} >
      <Navbar style={{ color: mainTextColor}} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <TextButtonComponent />
        </div>
        <div style={{ flex: 1 }}>
          <ColorInputComponent />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
