import { useDispatch } from 'react-redux';
import { mainCityActions } from '../../store/mainCity';
import { favoritesActions } from '../../store/favorites';
import  FavoriteCityUI  from '../UI/FavoriteCityUI';

const FavoriteCity = (props) => {
  
  const dispatch = useDispatch();
  
  const viewCity = () => {

    dispatch(mainCityActions.changeName(props.cityName))
    dispatch(mainCityActions.changeWeatherNow(props.city.weatherNow))
    dispatch(mainCityActions.changeFiveDays(props.city.fiveDays))
    dispatch(favoritesActions.checkButton(props.cityName))
    
  }

  return (
      <FavoriteCityUI gif={props.gif} cityName={props.cityName} temperatureC={props.temperatureC} temperatureF={props.temperatureF}  WeatherText={props.WeatherText} viewCity={viewCity} />
  );
    
};

export default FavoriteCity;
