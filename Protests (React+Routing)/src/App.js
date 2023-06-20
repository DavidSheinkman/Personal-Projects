import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import NewQuote from './pages/NewQuote';
import AuthPage from './pages/AuthPage';
import AllQuotes from './pages/AllQuotes';
import AuthContext from './store/auth-context';
import QuoteDetail from './pages/QuoteDetail';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        
        <Route path='/' exact>
          
          {authCtx.isLoggedIn && <AllQuotes />}
          {!authCtx.isLoggedIn && <AuthPage />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/quotes/:quoteId'>
          {authCtx.isLoggedIn && <QuoteDetail />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/new-protest'>
          {authCtx.isLoggedIn && <NewQuote />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
