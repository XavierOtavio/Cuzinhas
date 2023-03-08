import { EyeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Orders() {
  const [search, setSearch] = useState({ status: "" });

  return (
    <div className="w-full mx-32 overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between pb-4">
        <div className="relative mx-2 mt-1 flex-1">
          <select
            required
            value={search.admin}
            name="adminCheck"
            id="adminCheck"
            onChange={(e) =>
              setSearch((search) => ({ status: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
          >
            <option value={""}>Todos</option>
            <option value={"Delivered"}>Entregue</option>
            <option value={false}>Utilizadores</option>
          </select>
          <label
            htmlFor="adminCheck"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-500"
          >
            Tipo de utilizador
          </label>
        </div>
      </div>
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
            <td className="px-6 py-3 whitespace-nowrap inline-flex gap-8">
              <EyeIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
              <PhoneIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
