import React, { useState } from "react";
import styles from "./Category.module.css";
import { useDispatch } from "react-redux";
import { pictureSettingsActions } from "../store/pictures-slice";

const Category = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSelection = (category) => { // Changing Category 
    dispatch(pictureSettingsActions.changeSelectedCategory(category));
    dispatch(pictureSettingsActions.changeIsModalOpen(false));
    dispatch(pictureSettingsActions.changePageNumberReset());
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    handleSelection(searchText);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p className={styles.label}>Search for a Category:</p>
        <div className={styles.row2}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchInputChange}
            placeholder="Search..."
          />
          <button className={styles.button} onClick={handleSearchSubmit}>
            Search
          </button>
        </div>
        <p className={styles.label}>Or Select on of the categories below:</p>
        <div className={styles.row2}>
          <button
            className={styles.button}
            onClick={() => handleSelection("Beach")}
          >
            Beach
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Cat")}
          >
            Cat
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("City")}
          >
            City
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Dog")}
          >
            Dog
          </button>{" "}
        </div>
        <div className={styles.row2}>
          <button
            className={styles.button}
            onClick={() => handleSelection("Tiger")}
          >
            Tiger
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Orca")}
          >
            Orca
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Flower")}
          >
            Flower
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Sunset")}
          >
            Sunset
          </button>{" "}
        </div>
        <div className={styles.row2}>
          <button
            className={styles.button}
            onClick={() => handleSelection("Bear")}
          >
            Bear
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Food")}
          >
            Food
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Eagle")}
          >
            Eagle
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Car")}
          >
            Car
          </button>{" "}
        </div>
        <div className={styles.row2}>
          <button
            className={styles.button}
            onClick={() => handleSelection("Space")}
          >
            Space
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Lions")}
          >
            Lions
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Music")}
          >
            Music
          </button>
          <button
            className={styles.button}
            onClick={() => handleSelection("Shark")}
          >
            Shark
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Category;
