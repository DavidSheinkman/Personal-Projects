import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>הפגנות ישראל</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>התחברות</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/new-protest'>הוספת הפגנה חדשה</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>פרופיל</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>התנתק</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
