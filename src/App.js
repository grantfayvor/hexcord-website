import React from "react";
import "./styles/App.css";
import "./styles/index.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import TermsAndCondition from "./pages/TermsAndCondition";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ComingSoon from "./pages/Coming_soon";
import Footer, { CommingSoonFooter } from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route path="/coming-soon" exact>
          <NavBar onlyLogo />
          <ComingSoon />
          <CommingSoonFooter />
        </Route>
        <Route path="/privacy-policy" exact>
          <NavBar />
          <Privacy />
          <Footer />
        </Route>
        <Route path="/terms-condition" exact>
          <NavBar />
          <TermsAndCondition />
          <Footer allowScroll />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
