import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Country from "./components/Country";
function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries />
      </Route>
      <Route path="/countries/:capital" exact component={Country} />
      <Footer />
    </Router>
  );
}

export default App;
