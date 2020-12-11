import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ComingSoon from "./coming_soon/Index";
import Header from "./header/Index";
import Footer from "./footer/Index";
import Privacy from './privacy'
import NavBar from "./components/NavBar/NavBar";
import TermsAndCondition from "./TermsAndCondition";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          <ComingSoon />
          <Footer />
        </Route>
        <Route path="/privacy_policy" exact>
          <NavBar />
          <Privacy />
        </Route>
        <Route path="/terms_condition" exact>
          <NavBar />
          <TermsAndCondition />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
