import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-300 h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div className="w-full flex align-baseline justify-end">
        <Link to="/dashboard">
          <span class=" border-red-600 bg-red-600 px-12 py-3 text-white">
            Dashboard
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
