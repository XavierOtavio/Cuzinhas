import { EyeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Orders() {
  const [search, setSearch] = useState({ status: "" });
  let orders = [
    {
      id: 1,
      name: "José",
      profilePhoto:
        "https://fd230791b4.cbaul-cdnwnd.com/6573da65277e34d2c8f10c32c9f32cbf/200000001-4c1aa4d753/1246700716628_f.jpg",
      status: "Canceled",
      phone: "912345678",
    },
    {
      id: 2,
      name: "Maria",
      status: "Refunded",
      phone: "912345678",
    },
    {
      id: 3,
      name: "Pedro",
      profilePhoto:
        "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
      status: "PendingPayment",
      phone: "912345678",
    },
    {
      id: 4,
      name: "Ana",
      status: "Assembling",
      phone: "912345678",
    },
    {
      id: 5,
      name: "Joana",
      status: "Scheduling",
      phone: "912345678",
    },
    {
      id: 6,
      name: "Rui",
      profilePhoto:
        "data:image/jpeg;base64,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",
      status: "Scheduled",
      phone: "912345678",
    },
    {
      id: 7,
      name: "Sofia",
      status: "Canceled",
      phone: "912345678",
    },
    {
      id: 8,
      name: "Miguel",
      status: "Refunded",
      phone: "912345678",
    },
    {
      id: 9,
      name: "Inês",
      status: "PendingPayment",
      phone: "912345678",
    },
    {
      id: 10,
      name: "Rita",
      status: "Assembling",
      phone: "912345678",
    },
    {
      id: 11,
      name: "Luís",
      status: "Scheduling",
      phone: "912345678",
    },
    {
      id: 12,
      name: "Mariana",
      status: "Scheduled",
      phone: "912345678",
    },
  ];

  return (
    <div className="w-full mx-32 overflow-x-auto shadow-md sm:rounded-lg bg-stone-200">
      <div className="flex items-center justify-between pb-4">
        <div className="relative mx-6 my-3 flex-1">
          <select
            required
            value={search.admin}
            name="adminCheck"
            id="adminCheck"
            onChange={(e) =>
              setSearch((search) => ({ status: e.target.value }))
            }
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
      <table className="w-full text-sm text-left text-stone-500">
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
