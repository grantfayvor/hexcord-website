import React from "react";
import "./App.css";
import "./index.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ComingSoon from "./coming_soon/Index";
import Header from "./header/Index";
import Footer from "./footer/Index";
import Privacy from './privacy'
import Home from "./home/Index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/coming-soon" exact>
          <Header />
          <ComingSoon />
          <Footer />
        </Route>
        <Route path="/privacy-policy" exact>
          <Header />
          <Privacy />
          <Footer allowScroll />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
