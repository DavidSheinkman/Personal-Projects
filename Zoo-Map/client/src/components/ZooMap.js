import React, { useState, useEffect, Fragment } from "react";
import styles from "./ZooMap.module.css";
import { MapInteractionCSS } from "react-map-interaction";

import AnimalPopUp from "./AnimalPopUp";

import icon1 from "../assets/1.svg";
import icon2 from "../assets/2.svg";
import icon3 from "../assets/3.svg";
import icon4 from "../assets/4.svg";
import icon5 from "../assets/5.svg";
import icon6 from "../assets/6.svg";
import icon7 from "../assets/7.svg";
import icon8 from "../assets/8.svg";
import icon9 from "../assets/9.svg";
import icon10 from "../assets/10.svg";
import icon11 from "../assets/11.svg";
import icon12 from "../assets/12.svg";
import icon13 from "../assets/13.svg";
import icon14 from "../assets/14.svg";
import icon15 from "../assets/15.svg";
import icon16 from "../assets/16.svg";
import icon17 from "../assets/17.svg";
import icon18 from "../assets/18.svg";
import icon19 from "../assets/19.svg";
import icon20 from "../assets/20.svg";
import icon21 from "../assets/21.svg";
import icon22 from "../assets/22.svg";
import icon23 from "../assets/23.svg";
import icon24 from "../assets/24.svg";
import icon25 from "../assets/25.svg";
import icon26 from "../assets/26.svg";
import icon27 from "../assets/27.svg";
import icon28 from "../assets/28.svg";
import icon29 from "../assets/29.svg";
import icon30 from "../assets/30.svg";
import icon31 from "../assets/31.svg";
import icon32 from "../assets/32.svg";
import icon33 from "../assets/33.svg";
import icon34 from "../assets/34.svg";
import icon35 from "../assets/35.svg";
import icon36 from "../assets/36.svg";
import icon37 from "../assets/37.svg";
import icon38 from "../assets/38.svg";
import icon39 from "../assets/39.svg";
import icon40 from "../assets/40.svg";
import icon41 from "../assets/41.svg";
import icon42 from "../assets/42.svg";
import icon43 from "../assets/43.svg";
import icon44 from "../assets/44.svg";
import icon45 from "../assets/45.svg";
import icon46 from "../assets/46.svg";
import icon47 from "../assets/47.svg";
import icon48 from "../assets/48.svg";
import icon49 from "../assets/49.svg";
import icon50 from "../assets/50.svg";
import icon51 from "../assets/51.svg";
import icon52 from "../assets/52.svg";
import icon53 from "../assets/53.svg";
import icon54 from "../assets/54.svg";
import icon55 from "../assets/55.svg";
import icon56 from "../assets/56.svg";
import icon57 from "../assets/57.svg";
import icon58 from "../assets/58.svg";
import icon59 from "../assets/59.svg";
import icon60 from "../assets/60.svg";
import icon61 from "../assets/61.svg";
import icon62 from "../assets/62.svg";
import icon63 from "../assets/63.svg";
import icon64 from "../assets/64.svg";
import icon65 from "../assets/65.svg";
import icon66 from "../assets/66.svg";
import icon67 from "../assets/67.svg";

const ZooMap = () => {
  const redCircleButtons = [
    { id: 1, x: "63.5%", y: "66%", icon: icon1, width: "2%" },
    { id: 2, x: "67.5%", y: "69.5%", icon: icon2, width: "6%" },
    { id: 3, x: "73.4%", y: "69.5%", icon: icon3, width: "2%" },
    { id: 4, x: "76.9%", y: "79.5%", icon: icon4, width: "3%" },
    { id: 5, x: "79.9%", y: "78%", icon: icon5, width: "1.5%" },
    { id: 6, x: "84.2%", y: "72%", icon: icon6, width: "2.5%" },
    { id: 7, x: "81.5%", y: "60%", icon: icon7, width: "2%" },
    { id: 8, x: "86.5%", y: "65.2%", icon: icon8, width: "1.1%" },
    { id: 9, x: "78.3%", y: "51%", icon: icon9, width: "3.5%" },
    { id: 10, x: "78.7%", y: "43%", icon: icon10, width: "1.2%" },
    { id: 11, x: "74.4%", y: "55%", icon: icon11, width: "2.5%" },
    { id: 12, x: "69.5%", y: "53%", icon: icon12, width: "3.5%" },
    { id: 13, x: "66%", y: "61%", icon: icon13, width: "2%" },
    { id: 14, x: "59.25%", y: "35%", icon: icon14, width: "4.2%" },
    { id: 15, x: "51%", y: "69%", icon: icon15, width: "2%" },
    { id: 16, x: "52%", y: "72%", icon: icon16, width: "0.7%" },
    { id: 17, x: "52%", y: "70%", icon: icon17, width: "2.5%" },
    { id: 18, x: "53.5%", y: "72%", icon: icon18, width: "1%" },
    { id: 19, x: "54%", y: "76.5%", icon: icon19, width: "1.7%" },
    { id: 20, x: "56.5%", y: "75%", icon: icon20, width: "3.2%" },
    { id: 21, x: "87%", y: "59.3%", icon: icon21, width: "3%" },
    { id: 22, x: "90%", y: "57%", icon: icon22, width: "2.2%" },
    { id: 23, x: "86.9%", y: "38%", icon: icon23, width: "3.7%" },
    { id: 24, x: "91.2%", y: "40.8%", icon: icon24, width: "1.8%" },
    { id: 25, x: "94%", y: "43%", icon: icon25, width: "3%" },
    { id: 26, x: "89.2%", y: "29%", icon: icon26, width: "2.5%" },
    { id: 27, x: "86.8%", y: "34.5%", icon: icon27, width: "1.8%" },
    { id: 28, x: "83.5%", y: "31%", icon: icon28, width: "1.4%" },
    { id: 29, x: "82.6%", y: "22%", icon: icon29, width: "3.2%" },
    { id: 30, x: "78.6%", y: "30%", icon: icon30, width: "1.1%" },
    { id: 31, x: "77.5%", y: "20%", icon: icon31, width: "4%" },
    { id: 32, x: "74%", y: "28.2%", icon: icon32, width: "2.7%" },
    { id: 33, x: "73.1%", y: "20%", icon: icon33, width: "3%" },
    { id: 34, x: "69.5%", y: "16.5%", icon: icon34, width: "2%" },
    { id: 35, x: "66%", y: "18%", icon: icon35, width: "2.5%" },
    { id: 36, x: "66.4%", y: "29.5%", icon: icon36, width: "2%" },
    { id: 37, x: "60.5%", y: "18.5%", icon: icon37, width: "2.5%" },
    { id: 38, x: "56%", y: "17%", icon: icon38, width: "4%" },
    { id: 39, x: "52.9%", y: "18%", icon: icon39, width: "2.7%" },
    { id: 40, x: "40%", y: "25%", icon: icon40, width: "2.9%" },
    { id: 41, x: "45%", y: "40.5%", icon: icon41, width: "1.5%" },
    { id: 42, x: "46.8%", y: "44.9%", icon: icon42, width: "1.5%" },
    { id: 43, x: "46%", y: "46.4%", icon: icon43, width: "1.4%" },
    { id: 44, x: "48%", y: "63.4%", icon: icon44, width: "1.5%" },
    { id: 45, x: "45%", y: "62%", icon: icon45, width: "2.2%" },
    { id: 46, x: "44%", y: "58%", icon: icon46, width: "2%" },
    { id: 47, x: "42.5%", y: "46.7%", icon: icon47, width: "1.8%" },
    { id: 48, x: "40.8%", y: "50%", icon: icon48, width: "2%" },
    { id: 49, x: "36.3%", y: "37.7%", icon: icon49, width: "2.7%" },
    { id: 50, x: "31%", y: "25%", icon: icon50, width: "3.5%" },
    { id: 51, x: "27.5%", y: "24%", icon: icon51, width: "1.8%" },
    { id: 52, x: "21%", y: "17%", icon: icon52, width: "2%" },
    { id: 53, x: "32.3%", y: "47.5%", icon: icon53, width: "2.5%" },
    { id: 54, x: "28%", y: "51.5%", icon: icon54, width: "3%" },
    { id: 55, x: "28.1%", y: "38.5%", icon: icon55, width: "2.1%" },
    { id: 56, x: "23.1%", y: "38.6%", icon: icon56, width: "3.5%" },
    { id: 57, x: "20%", y: "43%", icon: icon57, width: "3%" },
    { id: 58, x: "16.5%", y: "38%", icon: icon58, width: "3%" },
    { id: 59, x: "26.2%", y: "61%", icon: icon59, width: "3%" },
    { id: 60, x: "22.5%", y: "58%", icon: icon60, width: "2.5%" },
    { id: 61, x: "20%", y: "62%", icon: icon61, width: "2%" },
    { id: 62, x: "16%", y: "59%", icon: icon62, width: "2.7%" },
    { id: 63, x: "13.5%", y: "50%", icon: icon63, width: "3%" },
    { id: 64, x: "9.3%", y: "62.3%", icon: icon64, width: "2.7%" },
    { id: 65, x: "3.5%", y: "50%", icon: icon65, width: "4.5%" },
    { id: 66, x: "3.25%", y: "65.3%", icon: icon66, width: "2%" },
    { id: 67, x: "8.7%", y: "75%", icon: icon67, width: "1.5%" },
  ];

  const [moreInfoModul, setMoreInfoModul] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const [animalData, setAnimalData] = useState(false);

  useEffect(() => {
    // Function to check screen size and set isMobileScreen
    const checkScreenSize = () => {
      const isMobile = window.innerWidth <= 480; // You can adjust the breakpoint as needed
      setIsMobileScreen(isMobile);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    fetch(`https://testzoo.onrender.com/api/1`)
      .then((response) => response.json())
      .then((data) => setAnimalData(data))
      .catch((error) => console.error("Error fetching animalData:", error));
  }, []);

  const handleCloseAnimalModal = () => {
    setMoreInfoModul(false);
  };

  const handleAnimalItemInfoClick = (id) => {
    setMoreInfoModul(true);
    setSelectedAnimal(id);
  };

  const mapInteractionContent = (
    <div className={styles.zooMapContainer}>
      {redCircleButtons.map((button) => (
        <button
          key={button.id}
          className={styles.animalButton}
          onClick={() => handleAnimalItemInfoClick(button.id)}
          style={{
            left: button.x,
            top: button.y,
            width: button.width,
            height: button.height,
          }}
        >
          <img src={button.icon} alt={`Button ${button.id}`} />
        </button>
      ))}
    </div>
  );

  return (
    <Fragment>
      {!animalData && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>Thanks for your patience! The
          server is waking up and getting ready to serve you. This might take a
          minute or two. Sit tight, and the server be up and running shortly. 😊
          I appreciate your patience as I'm currently using a free and
          budget-friendly service, so startup times can vary. Your understanding
          is much appreciated!
        </div>
      )}

      {animalData && isMobileScreen && moreInfoModul ? null : (
        <div className={styles.container}>
          <div className={styles.NavBar}>
            <div className={styles.NavBarLogo}>
              {" "}
              <img src="https://global-uploads.webflow.com/5e26b63b5f16d0655843b3f5/63ecf0d6b64b865dd3f81970_zoo_logo_green_en..svg"></img>{" "}
            </div>
            <p className={styles.NavBarMap}>Interactive Map</p>
            <p className={styles.NavBarAbout}>About</p>
          </div>

          {isMobileScreen && moreInfoModul ? null : isMobileScreen ? (
            mapInteractionContent
          ) : (
            <MapInteractionCSS minScale={1.0}>
              {mapInteractionContent}
            </MapInteractionCSS>
          )}
        </div>
      )}

      {animalData && moreInfoModul && (
        <AnimalPopUp
          animal={selectedAnimal}
          onClose={() => handleCloseAnimalModal(false)}
        />
      )}
    </Fragment>
  );
};

export default ZooMap;
