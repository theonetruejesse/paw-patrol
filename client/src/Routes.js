import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ReportForm from "./containers/ReportForm";
import PrivateRoute from "./utils/PrivateRoute.js";
import Cases from "./containers/Cases";
import Vid from "./containers/Vid";

export default function Routes() {
  return (
    <Switch>

      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/report-form" render={() => <ReportForm />} />
      <Route exact path="/cases" render={() => <Cases />} />
      <PrivateRoute exact path="/vid/:id" component={Vid} />
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  );
}
