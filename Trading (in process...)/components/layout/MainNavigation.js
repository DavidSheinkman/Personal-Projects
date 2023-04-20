import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Trading Tips</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Todays Tips</Link>
          </li>
          <li>
            <Link href='/past'>Past 7 Days</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
