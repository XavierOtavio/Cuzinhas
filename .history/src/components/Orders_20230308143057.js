import React from "react";
import SideBar from "./SideBar";

export default function Orders() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-stone-500">
        <thead className="text-xs text-stone-900 uppercase bg-stone-50">
          <tr>
            <th className="px-4 py-">ID</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
