import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Layout_Backend() {
  return (
    <>
      <div className="absolute h-screen w-screen">
        <SideBar />
        <div className="relative flex h-full items-center justify-center bg-stone-50">
          <Outlet />
        </div>
      </div>
    </>
  );
}
