import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginPage } from "./pages/login-page/login-page";
import "./app.scss";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
