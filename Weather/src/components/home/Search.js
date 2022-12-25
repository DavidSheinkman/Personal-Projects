import {Fragment } from 'react';
import { useState , useEffect , useRef} from 'react'
import { Combobox } from '@headlessui/react'
import { useDispatch } from 'react-redux';
import { mainCityActions } from '../../store/mainCity';
import { favoritesActions } from '../../store/favorites';
import classes from './Search.module.css';


function Search() {

  const dispatch = useDispatch();
  const cityInputRef = useRef();
  const [searchAuto, setSearchAuto] = useState([])
  const [query, setQuery] = useState('')  
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredCityTouched, setEnteredCityTouched] = useState(false);

  //only english check:
  const english = /^[A-Za-z0-9\s]*$/;
  const enteredCityIsValid = english.test(enteredCity)
  const nameInputIsInvalid = !enteredCityIsValid && enteredCityTouched;
 

  useEffect(() => {
    
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qEchxDSAfDVslu7kfOOpCtVHW7CZfseJ&q=${query}`)
    .then((response) => response.json())
    .then((json ) => setSearchAuto(json))
  }, [query])
  

  const nameInputChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    setQuery(event.target.value)
  };

  const nameInputBlurHandler = event => {
    setEnteredCityTouched(true);
  };


  const changeMain = () => {
    setEnteredCityTouched(true);

    if (!enteredCityIsValid) {
      return;
    }

    const enteredCity = cityInputRef.current.value;
    const cityKey = searchAuto.filter(city => city.LocalizedName === enteredCity)[0].Key

    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=qEchxDSAfDVslu7kfOOpCtVHW7CZfseJ`)
    .then((response) => response.json())
    .then((json ) => dispatch(mainCityActions.changeWeatherNow(json[0])))
    

    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=qEchxDSAfDVslu7kfOOpCtVHW7CZfseJ`)
    .then((response) => response.json())
    .then((json ) => dispatch(mainCityActions.changeFiveDays(json.DailyForecasts)))
    


    dispatch(mainCityActions.changeName(enteredCity));
    dispatch(favoritesActions.checkButton(enteredCity))

    setEnteredCity('');
    setEnteredCityTouched(false);
  };

  return (
    <Fragment >
      <div className={classes.main} >
      <div className=" mb-2 text-sm font-medium text-gray-900 dark:text-white relative ">
      <Combobox  >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <Combobox.Input 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredCity}
          className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search City..."ref={cityInputRef}  />
        
        <Combobox.Options className="bg-gray-100 overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200" >
          {searchAuto?.map((city) => (
            <Combobox.Option key={city.Key} value={city.LocalizedName}>
              {city.LocalizedName}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        
        <button onClick={() => changeMain(false)} className=" text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>  
      </Combobox>

      </div>
      {nameInputIsInvalid && (
          <p className="text-red-600">Text must be English.</p>
        )}
      </div>
    </Fragment>
    
  )
}

export default Search;
