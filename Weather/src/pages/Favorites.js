import { useSelector } from 'react-redux';
import FavoriteCity from '../components/favorites/FavoriteCity';


const Favorites = () => {

  const cities = useSelector((state) => state.favorites.favoritesCities);
  
  return (
    
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
          <FavoriteCity
            
            key={city.name}
            cityName = {city.name}
            temperatureC={city.weatherNow.Temperature.Metric.Value}
            temperatureF={city.weatherNow.Temperature.Imperial.Value}
            WeatherText={city.weatherNow.WeatherText}
            gif={city.gif}

            city = {city}
            
          />
        ))}
        </div>
     
    
  );

};

export default Favorites;
