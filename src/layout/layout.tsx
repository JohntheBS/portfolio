import React from "react";
import Navbar from "../components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{/* <Route path='/' element={<Home />}/> */}</Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Layout;
