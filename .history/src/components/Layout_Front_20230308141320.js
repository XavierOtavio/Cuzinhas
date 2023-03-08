import React from "react";
import Header from "./Header";

function Layout_Front() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout_Front;
