import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container py-5">{children}</main>
    </>
  );
};

export default Layout;
