import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import { usePostUrl } from "./context/UrlContext";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[70vw] mx-auto">
        <Header />
        <Input />
        <Output />
      </div>
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
