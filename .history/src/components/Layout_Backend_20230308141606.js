import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout_Backend() {
  return (
    <>
      <div className="absolute h-screen w-screen">
        <SideBar />
        <div className="relative flex h-full items-center justify-center bg-gray-200">
          <Outlet />
        </div>
      </div>
    </>
  );
}
