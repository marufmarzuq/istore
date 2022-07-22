import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
