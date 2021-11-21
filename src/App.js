import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/app" />
      </Route>
      <Route path="/app">
        <MainPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
