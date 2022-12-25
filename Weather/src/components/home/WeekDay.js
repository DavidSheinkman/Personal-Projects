import  WeekDayUI  from '../UI/WeekDayUI';



const WeekDay = (props) => {
  
  const result = props.Date.slice(5, 10);
  const month = result.slice(0, 2);
  const day = result.slice(3, 5);
  const date = `${day}/${month}`; 
  return (  
      <WeekDayUI gif={props.gif} date={date} temperatureMax={props.temperatureMax} temperatureMin={props.temperatureMin}  />      
  );
};

export default WeekDay;