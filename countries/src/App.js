import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
      <Footer />
    </>
  );
}

export default App;
