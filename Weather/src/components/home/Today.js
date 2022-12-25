import { useDispatch } from "react-redux";
import { favoritesActions } from "../../store/favorites";
import { useSelector } from "react-redux";
import TodayUI from "../UI/TodayUI";

const Today = (props) => {
  const dispatch = useDispatch();
  const mainCityName = useSelector((state) => state.mainCity.name);
  const weatherNow = useSelector((state) => state.mainCity.weatherNow);
  const fiveDays = useSelector((state) => state.mainCity.fiveDays);
  const gif = useSelector((state) => state.mainCity.gif);
  const buttonStatus = useSelector((state) => state.favorites.buttonStatus);
  const imgsrc = useSelector((state) => state.favorites.imgsrc);
  const btnText = useSelector((state) => state.favorites.btnText);
  const btnTextClass = useSelector((state) => state.nightMode.btnTextClass);
  const nightMode = useSelector((state) => state.nightMode.nightMode);

  const addFavorite = () => {
    dispatch(
      favoritesActions.addCity({
        name: mainCityName,
        weatherNow: weatherNow,
        fiveDays: fiveDays,
        gif: gif,
      })
    );
    dispatch(favoritesActions.checkButton(mainCityName));
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
      <TodayUI
        gif={props.gif}
        mainCity={props.mainCity}
        temperatureC={props.temperatureC}
        temperatureF={props.temperatureF}
        WeatherText={props.WeatherText}
      />

      <div>
        {!(!buttonStatus && nightMode) && (
          <button>
            <img src={imgsrc} alt={btnText} onClick={() => addFavorite()} />
          </button>
        )}
        {!buttonStatus && nightMode && (
          <button>
            <img
              src={
                "https://img.icons8.com/pastel-glyph/128/FFFFFF/hearts--v1.png"
              }
              alt={btnText}
              onClick={() => addFavorite()}
            />
          </button>
        )}
        <br />
        <div className={btnTextClass}>{btnText}</div>
      </div>
    </div>
  );
};

export default Today;
