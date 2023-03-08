import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="backdrop-blur h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div className="w-full flex align-baseline justify-end ml-2 mr-3">
        <Link to="/">
          <button class="block border border-red-600  px-10 py-3 text-red-600 ml-2 font-medium hover:border-red-600 hover:bg-red-600 hover:text-white">
            Home
          </button>
        </Link>
        <Link to="/dashboard">
          <button class="block border border-red-600  px-10 py-3 text-red-600 ml-2 font-medium hover:border-red-600 hover:bg-red-600 hover:text-white">
            Dashboard
          </button>
        </Link>
        <Link to="/login">
          <button class="block border border-red-600  px-10 py-3 text-red-600 ml-2 font-medium hover:border-red-600 hover:bg-red-600 hover:text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
