import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-300 h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div className="w-full flex align-baseline justify-end">
        <Link to="/dashboard">
          <span class="block border border-red-600 bg-red-600 px-10 py-3 text-white">
            Dashboard
          </span>
        </Link>
        <a class="group relative inline-block  focus:outline-none focus:ring active:text-red-500">
          <span class="block border border-current bg-white px-10 py-3 text-sm font-medium text-red-600">
            Download
          </span>
        </a>
        <Link to="/dashboard">
          <span class="block border border-red-600 bg-stone-50 px-10 py-3 text-white">
            Dashboard
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
