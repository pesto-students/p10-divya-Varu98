import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  return (
    <div className="max-w-[70vw] mx-auto">
      <Header />
      <Input />
      <Output />
    </div>
  );
};

export default App;
