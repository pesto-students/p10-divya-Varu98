import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Output from "../components/Output";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div className="mt-12">
      <Layout>
        <Header />
        <Input />
        <Output />
      </Layout>
    </div>
  );
};

export default Home;
