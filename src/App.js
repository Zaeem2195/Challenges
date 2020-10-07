import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainDisplay from "./Components/MainDisplay";
import SignUp from "./Components/SignUp";
import QueryAlreadySubmitted from "./Components/QueryAlreadySubmitted";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainDisplay} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/:challenge_id" component={QueryAlreadySubmitted} />
        </Switch>
        {/* footer*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
