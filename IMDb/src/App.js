
import { Switch, Route,Redirect } from 'react-router-dom';


import HomePage from "./pages/HomePage";
import SingleMooviePage from "./pages/SingleMooviePage";


// function App() {
//   return <HomePage />;
// }

function App() {
 

  return (
    
      <Switch>
        
        <Route path='/' exact>
            <HomePage />
        </Route>
        
        <Route path='/movie/:imdbID'>
          <SingleMooviePage />
          
        </Route>
        
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    
  );
}

export default App;
