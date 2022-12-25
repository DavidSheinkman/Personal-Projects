import { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { mainCityActions } from "../store/mainCity";
import Search from "../components/home/Search";
import Displey from "../components/home/Displey";
import useHttp from "../hooks/use-http";
import { getTelAviv } from "../lib/api";
import { getFiveDays } from "../lib/api";

const Home = () => {
  const dispatch = useDispatch();

  const {
    sendRequest,
    status,
    data: loadedTelAviv,
    error,
  } = useHttp(getTelAviv, true);

  const {
    sendRequest: sendRequest2,
    status: status2,
    data: loadedFiveDays,
    error: error2,
  } = useHttp(getFiveDays, true);

  useEffect(() => {
    sendRequest();
    sendRequest2();
  }, [sendRequest, sendRequest2]);

  if (status === "pending" || status2 === "pending") {
    return (
      <div className="centered">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error && error2) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && status2 === "completed") {
    dispatch(mainCityActions.changeWeatherNow(loadedTelAviv[0]));
    dispatch(mainCityActions.changeFiveDays(loadedFiveDays.DailyForecasts));
  }

  return (
    <Fragment>
      <Search />
      <Displey />
    </Fragment>
  );
};

export default Home;
