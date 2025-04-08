import React from "react";
import Header from "./Header";

const Layout = ({ children, cartItemCount }) => {
  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <main className="container py-5">{children}</main>
    </>
  );
};

export default Layout;