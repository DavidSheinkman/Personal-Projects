import { NavLink } from 'react-router-dom';
import classes from './MainNavigation2.module.css';
import { useDispatch } from 'react-redux';
import { nightModeActions } from '../../store/nightMode';
import { useState } from 'react'

const MainNavigation2 = () => {
  
  const [hamburger, setHamburger] = useState("hidden lg:show w-full block flex-grow lg:flex lg:items-center lg:w-auto");

  const dispatch = useDispatch();
  const changeNightMode = () => {
    dispatch(nightModeActions.toggleNight())
    
  }

  const changeHamburger = () => {
    if (hamburger === "hidden lg:show w-full block flex-grow lg:flex lg:items-center lg:w-auto")
    setHamburger("lg:show w-full block flex-grow lg:flex lg:items-center lg:w-auto")
    else {
      setHamburger("hidden lg:show w-full block flex-grow lg:flex lg:items-center lg:w-auto")
    }
  }


  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-900 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      
      <img alt="logo" className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" src="https://www.abra-it.com/wp-content/uploads/2022/01/Abra-logo-FullColor-white-1.svg" />
      <span className="font-semibold text-xl tracking-tight">Weather Task</span>
    </div>
    <div className="block lg:hidden">
      <button onClick={() => changeHamburger()} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        
      </button>
    </div>
    <div className={hamburger}>
      <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        <NavLink to='/home' activeClassName={classes.active} >
              Home
        </NavLink>

        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        
        <NavLink to='/favorites' activeClassName={classes.active} >
              Favorites
        </NavLink>
        
        </a>
      </div>
      <div>
        <button onClick={() => changeNightMode()} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Night-Mode</button>
      </div>
    </div>
  </nav>
  );
};

export default MainNavigation2;
