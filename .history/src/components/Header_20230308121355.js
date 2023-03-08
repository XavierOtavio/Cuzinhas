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
        <a
          class="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
          href="/download"
        >
          <span class="absolute inset-0 border border-current"></span>
          <span class="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
            Download
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
