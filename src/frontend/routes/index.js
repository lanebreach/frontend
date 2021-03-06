import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../components/pages/Landing";
import PageNotFound from "../components/pages/PageNotFound";
import { About } from "../components/pages/about";
import { Statistics } from "../components/pages/statistics";
import AppsPage from "../components/pages/AppsPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/explore" component={Statistics} />
    <Route exact path="/apps" component={AppsPage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
