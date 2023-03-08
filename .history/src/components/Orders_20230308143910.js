import React from "react";
import SideBar from "./SideBar";

export default function Orders() {
  return (
    <div className="w-full mx-32 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-stone-500">
        <thead className="text-xs text-stone-900 uppercase bg-stone-200">
          <tr>
            <th className="px-6 py-3" scope="col">
              Encomenda
            </th>
            <th className="px-6 py-3" scope="col">
              Cliente
            </th>
            <th className="px-6 py-3" scope="col">
              Estado
            </th>
            <th className="px-6 py-3" scope="col">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-stone-100 border-b">
            <th scope="row" className="px-6 py-4 whitespace-nowrap">
          </tr>
        </tbody>
      </table>
    </div>
  );
}
