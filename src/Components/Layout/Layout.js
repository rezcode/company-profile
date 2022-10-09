import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", marginTop: "100px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
