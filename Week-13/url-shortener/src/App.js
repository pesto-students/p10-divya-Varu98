import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import { usePostUrl } from "./context/UrlContext";
import { Switch, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 md:px-0 md:max-w-[70vw] mx-auto">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<AboutUs />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </div>
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
};

export default App;
