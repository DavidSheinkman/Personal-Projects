import {Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './Display.module.css';
import Today from './Today';
import FiveDays from './FiveDays';


const Displey = (props) => {
  
  const mainCity = useSelector((state) => state.mainCity.name);
  const temperatureC = useSelector((state) => state.mainCity.weatherNow.Temperature.Metric.Value) ;
  const temperatureF = useSelector((state) => state.mainCity.weatherNow.Temperature.Imperial.Value) ;
  const WeatherText = useSelector((state) => state.mainCity.weatherNow.WeatherText) ;
  const gif = useSelector((state) => state.mainCity.gif) ;
  

  return (
    <Fragment>
      <div className={classes.main}>
      <Today 
        gif={gif} 
        mainCity={mainCity} 
        temperatureC={temperatureC} 
        temperatureF={temperatureF} 
        WeatherText={WeatherText} />
      </div>
      <FiveDays />
    </Fragment>
  );
};

export default Displey;
