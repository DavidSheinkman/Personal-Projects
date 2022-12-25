import {  Fragment } from 'react';
import { useState } from 'react'

const TodayUI = (props) => {
 
    const [fahrenheit, setFahrenheit] = useState(true);

  return (
    <Fragment>

    <div className="container   w-screen">
        <div className="flex items-center justify-left h-full">
            <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                <div className="flex flex-col">
                    <div>
                        <h2 className=" text-2xl font-bold text-gray-700 text-center">{props.mainCity}</h2>
                    </div>
                    <div className="my-6">
                        <div className="flex flex-row space-x-4 items-center">
                            <div id="icon">
                                <span>
                                    {/* <svg className="w-20 h-20 fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                        </path>
                                    </svg> */}
                                    <img className="w-20 h-20 fill-stroke text-yellow-400" src={props.gif} alt="sunny" />
                                </span>
                            </div>
                            <div id="temp">
                                {/* <h4 className="text-4xl">{props.temperatureC}</h4> */}
                                
                                {fahrenheit && (
                                    <h4 className="text-4xl">{props.temperatureC} <span className="text-2xl font-bold">&deg;C</span>  <button onClick={() => setFahrenheit(false)} className="text-2xl" > | &deg;F</button></h4>
                                
                                )}
                                {!fahrenheit && (
                                    <h4 className="text-4xl">{props.temperatureF}   <button onClick={() => setFahrenheit(true)} className="text-2xl" >&deg;C | </button> <span className="text-2xl font-bold">&deg;F</span></h4>
                                
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className=" text-2xl font-bold text-gray-600 text-center">{props.WeatherText}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </Fragment>
  );
};

export default TodayUI;
