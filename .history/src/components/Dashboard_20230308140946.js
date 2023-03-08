import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
