import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-50 h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div className="w-full flex align-baseline justify-end">
        <Link to="/dashboard">
          <button className="">Dashboard</button>
        </Link>

        <a
          class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          href="/download"
        >
          <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
          <span class="block border border-red-600 bg-red-600 px-12 py-3 active:border-red-500 active:bg-red-500">
            Download
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
