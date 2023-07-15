import React from "react";
import AboutUs from "./components/AboutUs";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <div className="w-full px-4 md:px-0 md:max-w-[70vw] mx-auto">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<AboutUs />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </Layout>
      {/* <AboutUs /> */}
    </>
  );
};

export default App;
