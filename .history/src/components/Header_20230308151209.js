import React from "react";
import { Link } from "react-router-dom";
import Logotipo from "./Logotipo";

function Header() {
  return (
    <div className="backdrop-blur-lg h-24 justify-center items-center flex bg-stone-50/50">
      <div className="w-auto h-24 flex align-baseline justify-start ml-2 mr-3 text-black">
        <Logotipo className="fill-black" />
      </div>
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
