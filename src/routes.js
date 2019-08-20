import Home from "pages/home";
import Purchases from "pages/purchases";
import { Switch, Route } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/my-purchases" component={Purchases} />
  </Switch>
);

export default Routes;
