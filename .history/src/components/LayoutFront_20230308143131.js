import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function LayoutFront() {
  return (
    <div className="bg-stone-50 h-screen">
      <Header />
      <div></div>
      <Outlet />
    </div>
  );
}
