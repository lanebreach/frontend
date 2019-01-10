import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../components/pages/Landing";
import PageNotFound from "../components/pages/PageNotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;