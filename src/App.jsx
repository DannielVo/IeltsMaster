import React from "react";
import Header from "./components/header/Header";
import Hero from "./pages/home/hero/Hero";
import Recent from "./pages/home/recent/Recent";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Recent></Recent>
    </>
  );
};

export default App;
