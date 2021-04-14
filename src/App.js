import React from "react";

//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

//router
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

//Animation
import { AnimatePresence } from "framer-motion";

import ScrollTop from "./components/ScroolTop";

function App() {
  const location = useLocation();
  //adjust scroll behavior
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
