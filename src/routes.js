import Home from "pages/home";
import NotFound from "pages/404";
import Purchases from "pages/purchases";
import { Switch, Route } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
