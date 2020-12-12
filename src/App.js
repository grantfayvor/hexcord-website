import React from "react";
import "./App.css";
import "./index.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Index";
import CommingSoonFooter from "./footer/Index";
import NavBar from "./components/NavBar/NavBar";
import TermsAndCondition from "./pages/TermsAndCondition";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ComingSoon from "./pages/Coming_soon";
import Footer from './components/footer'

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
          <CommingSoonFooter />
        </Route>
        <Route path="/privacy_policy" exact>
          <NavBar />
          <Privacy />
          <Footer />
        </Route>
        <Route path="/terms_condition" exact>
          <NavBar />
          <TermsAndCondition />
          <Footer allowScroll />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
