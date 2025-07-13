import React from "react";
import Header from "./components/header/Header";
import Hero from "./pages/home/hero/Hero";
import Recent from "./pages/home/recent/Recent";
import PopularDocuments from "./pages/home/popularDocuments/PopularDocuments";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import SettingPage from "./pages/SettingPage";

const App = () => {
  const settingPages = [
    {
      path: "/login",
      component: <Login></Login>,
    },

    {
      path: "/signup",
      component: <SignUp></SignUp>,
    },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Hero></Hero>
              <Recent></Recent>
              <PopularDocuments></PopularDocuments>
              <Footer></Footer>
            </>
          }
        ></Route>
        {settingPages.map((item, index) => (
          <Route
            key={item.path}
            path={item.path}
            element={<SettingPage>{item.component}</SettingPage>}
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
