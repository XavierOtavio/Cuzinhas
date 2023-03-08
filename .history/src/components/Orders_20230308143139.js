import React from "react";
import SideBar from "./SideBar";

export default function Orders() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-stone-500">
        <thead className="text-xs text-stone-900 uppercase bg-stone-50">
          <tr>
            <th className="px-6 py-3" scope="col">
              ID
            </th>
            <th className="px-6 py-3" scope="col">
              Nome
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
