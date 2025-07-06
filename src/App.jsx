import React from "react";
import Header from "./components/header/Header";
import Hero from "./pages/home/hero/Hero";
import Recent from "./pages/home/recent/Recent";
import PopularDocuments from "./pages/home/popularDocuments/PopularDocuments";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Recent></Recent>
      <PopularDocuments></PopularDocuments>
    </>
  );
};

export default App;
