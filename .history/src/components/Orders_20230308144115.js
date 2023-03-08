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
            <th
              scope="row"
              className="px-6 py-3 whitespace-nowrap cursor-pointer"
            >
              #00012021
            </th>
            <td className="px-6 py-3 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium">Xavier Otávio</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
