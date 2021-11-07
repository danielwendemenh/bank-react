import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages";
import Signin from "../Pages/Signin";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
