import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout_Front() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout_Front;
