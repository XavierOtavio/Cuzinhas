import { useState, useEffect } from "react";
import { EyeIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function useTable(data, page) {
  return (
    <div className="absolute inset-x-32 inset-y-16 overflow-x-auto shadow-md sm:rounded-lg bg-stone-200">
      <div className="flex items-center justify-between pb-4">
        <div className="relative mx-6 my-3 flex-1">
          <select
            required
            value={search.admin}
            name="adminCheck"
            id="adminCheck"
            onChange={(e) => setSearch({ status: e.target.value })}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          >
            <option value={""}>Todos</option>
            <option value={"Canceled"}>Cancelado</option>
            <option value={"Refunded"}>Reembolsado</option>
            <option value={"PendingPayment"}>À espera de pagamento</option>
            <option value={"Assembling"}>Em produção</option>
            <option value={"Scheduling"}>À espera de agendamento</option>
            <option value={"Scheduled"}>Agendado</option>
            <option value={"Assembling"}>Em instalação</option>
            <option value={"Done"}>Concluido</option>
          </select>
          <label
            htmlFor="adminCheck"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-orange-500"
          >
            Tipo de utilizador
          </label>
        </div>
        <div className="flex-[4]" />
      </div>
      <table className="table-fixed w-full text-sm text-left text-stone-500">
        <thead className="text-xs text-stone-900 uppercase ">
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
          {data.map((order) => (
            <tr key={order.id} className="bg-stone-100 border-b">
              <th
                scope="row"
                className="px-6 py-3 whitespace-nowrap cursor-pointer"
              >
                {order.id}
              </th>
              <td className="px-6 py-3 whitespace-nowrap cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={order.profilePhoto}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium">{order.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Entregue
                </span>
              </td>
              <td className="px-6 py-3">
                <div className="inline-grid grid-cols-3 gap-4">
                  <EyeIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  <a href={`tel:${order.phone}`}>
                    <PhoneIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  </a>
                  <a href={`mail:${order.email}`}>
                    <EnvelopeIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
