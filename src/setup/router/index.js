import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Layout from "./Layout";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default Router;
