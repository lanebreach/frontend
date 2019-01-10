import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

// No need to remove for production... Minimal dependency overhead
// In production hot passes Routes straight through
const HotReloadedRoutes = hot(module)(Routes);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <HotReloadedRoutes />
        </Fragment>
      </Router>
    );
  }
}
export default App;
