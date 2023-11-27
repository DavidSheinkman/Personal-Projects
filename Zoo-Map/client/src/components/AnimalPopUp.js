import React, { useState, useEffect } from "react";
import styles from "./AnimalPopUp.module.css";
import useHttp from "../hooks/use-http";



const AnimalPopUp = ({ animalID, onClose }) => {
  const [animalData, setAnimalData] = useState(null);
  const { sendRequest: fetchAnimal } = useHttp();

  useEffect(() => {
    fetchAnimal(
      { url: `https://testzoo.onrender.com/api/${animalID}` },
      setAnimalData
    );

    fetchAnimal();
  }, [fetchAnimal]);

  return (
    <div className={styles.modal}>
      {!animalData && <div className={styles.loader}></div>}

      {animalData && (
        <div className={styles.Container}>
          <div className={styles.animalItemContainer}>
            <button className={styles.closeButton} onClick={onClose}>
              X
            </button>
            <div className={styles.animalName}> {animalData.name}</div>
            <div className={styles.animalGenus}>
              {" "}
              {animalData.taxonomy.genus}
            </div>
            <div className={styles.animalImage}>
              {" "}
              <img
                src={animalData.imgURL}
                alt={animalData.name}
                className={styles.animalImageSize}
              />
            </div>

            <div>{animalData.characteristics.slogan}</div>
            <p className={styles.quickFacts}>Quick Facts</p>
            <div className={styles.facts}>
              <div className={styles.fact}>
                {" "}
                <h1>HABITAT</h1>{" "}
                <p className={styles.factInfo}>
                  {animalData.characteristics.habitat}
                </p>{" "}
              </div>
              <div className={styles.fact}>
                {" "}
                <h1>STATUS</h1>{" "}
                <p className={styles.factInfo}>
                  {animalData.status}
                </p>{" "}
              </div>
              <div className={styles.fact}>
                {" "}
                <h1>DIET</h1>{" "}
                <p className={styles.factInfo}>
                  {animalData.characteristics.diet} -{" "}
                  {animalData.characteristics.prey
                    .split(", ")
                    .map((prey, index) => (
                      <span key={index}>{prey}, </span>
                    ))}
                  etc...
                </p>{" "}
              </div>
              <div className={styles.fact}>
                {" "}
                <h1>LOCATION</h1>{" "}
                <p className={styles.factInfo}>
                  {animalData.location}
                </p>{" "}
              </div>
              <div className={styles.fact}>
                {" "}
                <h1>LIFESPAN</h1>{" "}
                <p className={styles.factInfo}>
                  {animalData.characteristics.lifespan}
                </p>{" "}
              </div>
              <div className={styles.fact}>
                {" "}
                <h1>WEIGHT</h1>{" "}
                <p className={styles.factInfo}>
                  {animalData.characteristics.weight}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalPopUp;
