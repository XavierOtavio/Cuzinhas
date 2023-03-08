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
            <td className="px-6 py-3 whitespace-nowrap cursor-pointer">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://fd230791b4.cbaul-cdnwnd.com/6573da65277e34d2c8f10c32c9f32cbf/200000001-4c1aa4d753/1246700716628_f.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium">José Estacionâncio</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-3 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Entregue
              </span>
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
              >
                Ver
              </a>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
