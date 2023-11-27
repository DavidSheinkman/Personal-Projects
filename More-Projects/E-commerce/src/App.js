import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/product/:productID">
        <SingleProductPage />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
