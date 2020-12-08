import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ComingSoon from "./coming_soon/Index";
import Header from "./header/Index";
import Footer from "./footer/Index";
import Privacy from './privacy'

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
          <Header />
          <Privacy />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
