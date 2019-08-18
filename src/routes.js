import { Switch, Route } from "react-router-dom";
import Home from "pages/home";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
