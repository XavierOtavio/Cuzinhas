import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-300 h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div className="w-full flex align-baseline justify-end">
        <Link to="/dashboard">
          <button class="block border border-red-600 bg-red-600 px-10 py-3 text-white ml-2">
            Dashboard
          </button>
        </Link>
        <Link to="/dashboard">
          <button class="block border border-red-600 bg-stone-300 px-10 py-3 text-red-600 ml-2 ">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
