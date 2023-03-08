import React from "react";
import SideBar from "./SideBar";

export default function Orders() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-stone-600">
        <thead className="text-xs text-stone">
          <tr>
            <th className="px-4 py-2 bg-stone-50">ID</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
