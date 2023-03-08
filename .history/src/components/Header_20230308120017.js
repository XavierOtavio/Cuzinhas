import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-300 h-24 justify-center items-center flex">
      <h1>Header</h1>
      <div>
        <Link to="/dashboard/orders">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
