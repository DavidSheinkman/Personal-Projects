import { useSelector } from 'react-redux';
import WeekDay from './WeekDay';

const FiveDays = (props) => {

  const fiveDays = useSelector((state) => state.mainCity.fiveDays) ;
  const gif = useSelector((state) => state.mainCity.gif) ;

  return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-left w-screen">
          {fiveDays.map((day) => (
              <WeekDay  
                key={day.EpochDate}
                Date = {day.Date}
                temperatureMax={day.Temperature.Maximum.Value}
                temperatureMin={day.Temperature.Minimum.Value}
                gif={gif}
              />
            ))}
        </div>    
  );
}; 

export default FiveDays;
