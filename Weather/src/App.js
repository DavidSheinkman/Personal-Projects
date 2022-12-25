import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
import { useSelector } from 'react-redux';

function App() {

  
  const nightMode = useSelector((state) => state.nightMode.bgClass) ;

  return (
    <div className={nightMode}>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='*'>
        <Redirect to='/home' />
        </Route>
      </Switch>
    </Layout>
    </div>
  );
}

export default App;
