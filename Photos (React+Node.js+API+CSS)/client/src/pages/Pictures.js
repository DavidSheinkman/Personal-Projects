import React, { Fragment, useEffect } from "react";
import styles from "./Pictures.module.css";
import PictureItem from "./PictureItem";
import PictureInfo from "./PictureInfo";
import Category from "./Category";
import { useSelector, useDispatch } from "react-redux";
import { pictureSettingsActions } from "../store/pictures-slice";

const Pictures = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.picturesettings.isModalOpen);
  const backendData = useSelector((state) => state.picturesettings.backendData);
  const selectedCategory = useSelector(
    (state) => state.picturesettings.selectedCategory
  );
  const pageNumber = useSelector((state) => state.picturesettings.pageNumber);
  const selectedPicture = useSelector(
    (state) => state.picturesettings.selectedPicture
  );
  const selectedPictureModul = useSelector(
    (state) => state.picturesettings.selectedPictureModul
  );
  const idSort = useSelector((state) => state.picturesettings.idSort);

  const handleOpenModal = () => {
    dispatch(pictureSettingsActions.changeIsModalOpen(true));
  };
  const handleClosePicModal = () => {
    dispatch(pictureSettingsActions.changeSelectedPictureModul(false));
  };

  const handleIncrementPage = () => {
    dispatch(pictureSettingsActions.changePageNumberPlus());
  };

  const handleDecrementPage = () => {
    if (pageNumber > 1) {
      dispatch(pictureSettingsActions.changePageNumberMinus());
    }
  };

  const handlePictureItemClick = (picture) => {
    dispatch(pictureSettingsActions.changeSelectedPicture(picture));
    dispatch(pictureSettingsActions.changeSelectedPictureModul(true));
  };

  const handleSortChange = () => {
    if (idSort === "ascending") {
      dispatch(pictureSettingsActions.changeIdSort("descending"));
    }

    if (idSort === "descending") {
      dispatch(pictureSettingsActions.changeIdSort("ascending"));
    }
  };

  useEffect(() => {
    if (selectedCategory !== "") {
      fetch(`/api?q=${selectedCategory}&pageNumber=${pageNumber}&idSort=${idSort}`) //fetching Pictures
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            dispatch(pictureSettingsActions.changeBackendData(data));
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
          dispatch(pictureSettingsActions.changeBackendData([]));
        });
    }
  }, [idSort, pageNumber, selectedCategory, dispatch]);

  return (
    <Fragment>
      
      <div className={styles.row}  >  
        <button className={styles.redbutton} onClick={handleDecrementPage}>
          Prev
        </button>
        <button className={styles.whitebutton} onClick={handleOpenModal}>
          Select Category
        </button>
        <button className={styles.greenbutton} onClick={handleIncrementPage}>
          Next
        </button>
      </div>

      <div className={styles.row}>
        <button className={styles.whitebutton} onClick={handleSortChange}>
          Sort by ID
        </button>
      </div>

      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.gridContainer}>
          {backendData.map((item) => (
            <div className={styles.pictureItem}>
              
              <PictureItem // One of the 3*3 Pictures
                key={item.id}
                item={item}
                onClick={() => handlePictureItemClick(item)}
              />
            </div>
          ))}
        </div>
      )}
      {selectedPictureModul && (
        <PictureInfo // Picture with more info:  views, downloads, comments etc
          picture={selectedPicture}
          onClose={() => handleClosePicModal(false)}
        />
      )}
      {isModalOpen && <Category />}
    </Fragment>
  );
};

export default Pictures;
