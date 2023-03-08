import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Layout_Backend() {
  return (
    <>
      <div className="absolute h-screen w-screen">
        <TopBar sideBarState={[sidebarOpen, setSidebarOpen]} />
        <Transition
          as={Fragment}
          show={sidebarOpen}
          enter="transform transition duration-[400ms]"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform duration-[400ms] transition ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <SideBar sidebar={sidebarOpen} />
        </Transition>
        <div className="relative flex h-full items-center justify-center bg-gray-200">
          <Outlet />
        </div>
      </div>
    </>
  );
}
