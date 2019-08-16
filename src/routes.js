import { Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Enemies from "pages/enemies";
import Weapons from "pages/weapons";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/enemies" component={Enemies} />
    <Route exact path="/weapons" component={Weapons} />
  </Switch>
);

export default Routes;
