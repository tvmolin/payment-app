import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
