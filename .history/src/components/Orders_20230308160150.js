import { EyeIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Orders() {
  const [search, setSearch] = useState({ status: "" });
  let orders = [
    {
      id: "0001",
      name: "José",
      profilePhoto:
        "https://fd230791b4.cbaul-cdnwnd.com/6573da65277e34d2c8f10c32c9f32cbf/200000001-4c1aa4d753/1246700716628_f.jpg",
      status: "Canceled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0002",
      name: "Maria",
      status: "Refunded",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0003",
      name: "Pedro",
      profilePhoto:
        "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
      status: "PendingPayment",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0004",
      name: "Ana",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Aseel%20Profile%20Pic.jpg?h=96281f56&itok=_XvylDKQ",
      status: "Assembling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0005",
      name: "Joana",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/YutianAn0919_0004.jpg?h=6bb51d0e&itok=D-1_EYgw",
      status: "Scheduling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0006",
      name: "Rui",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
      status: "Scheduled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0007",
      name: "Sofia",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Elizabeth-Bachman_092721_0003.jpg?h=102c6dce&itok=uL0Sbls1",
      status: "Canceled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0008",
      name: "Miguel",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/GordonArsenoff_072721_0014-edit%20%281%29.jpg?h=39a78a6d&itok=hgDXBQsE",
      status: "Refunded",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0009",
      name: "Inês",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-4.jpeg?h=6d5fbd74&itok=UAzUQXdO",
      status: "PendingPayment",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0010",
      name: "Rita",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Al-Shami.jpeg?h=227444a7&itok=hmE_Lctk",
      status: "Assembling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0011",
      name: "Luís",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Alkhawaldeh_Headshot.jpg?h=6a43611b&itok=RFd3qC78",
      status: "Scheduling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0012",
      name: "João",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Greg%20Amusu%20Department%20Photo%20%28002%29%202.jpeg?itok=lqtdmKJB",
      status: "Scheduled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    if (search.status === "") {
      return order;
    } else if (order.status === search.status) {
      return order;
    }
  });

  const calculateRange = (data, ) 

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
          {filteredOrders.map((order) => (
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
