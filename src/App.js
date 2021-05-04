import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/userSlice";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {!userName ? <Redirect to="/login" /> : <Home />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
