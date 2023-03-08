import {
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Orders() {
  const [search, setSearch] = useState({ role: "", name: "" });
  const [page, setPage] = useState(1);

  let orders = [
    {
      id: "0001",
      name: "Inacio",
      profilePhoto:
        "https://fd230791b4.cbaul-cdnwnd.com/6573da65277e34d2c8f10c32c9f32cbf/200000001-4c1aa4d753/1246700716628_f.jpg",
      role: "ManagerProd",
      earningsHour: "12",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0002",
      name: "Marco",
      earningsHour: "12",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/AalaAbdelgadir_profile%20resized.jpg?itok=oZMvPNBe",
      role: "EngineerProd",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0003",
      name: "Pedro",
      earningsHour: "12",
      profilePhoto:
        "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
      role: "MenegerQual",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0004",
      name: "Ana",
      earningsHour: "10",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Aseel%20Profile%20Pic.jpg?h=96281f56&itok=_XvylDKQ",
      role: "ManagerSales",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0005",
      name: "Joana",
      earningsHour: "8",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/YutianAn0919_0004.jpg?h=6bb51d0e&itok=D-1_EYgw",
      role: "TecInst",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0006",
      name: "Rui",
      earningsHour: "8",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
      role: "TecInst",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0007",
      name: "Sofia",
      earningsHour: "7",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Elizabeth-Bachman_092721_0003.jpg?h=102c6dce&itok=uL0Sbls1",
      role: "Sales",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0008",
      name: "Miguel",
      earningsHour: "7",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/GordonArsenoff_072721_0014-edit%20%281%29.jpg?h=39a78a6d&itok=hgDXBQsE",
      role: "Sales",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0009",
      name: "Inês",
      earningsHour: "6",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-4.jpeg?h=6d5fbd74&itok=UAzUQXdO",
      role: "ProdWorker",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0010",
      name: "Rita",
      earningsHour: "6",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Al-Shami.jpeg?h=227444a7&itok=hmE_Lctk",
      role: "ProdWorker",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0011",
      name: "Luís",
      earningsHour: "12",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Alkhawaldeh_Headshot.jpg?h=6a43611b&itok=RFd3qC78",
      role: "ProdWorker",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0012",
      name: "João",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Greg%20Amusu%20Department%20Photo%20%28002%29%202.jpeg?itok=lqtdmKJB",
      role: "ProdWorker",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

  const statusBadge = (role) => {
    switch (role) {
      case "ManagerProd":
        return (
          <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Gerente de Produção
          </span>
        );
      case "EngineerProd":
        return (
          <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Engenheiro de Produção
          </span>
        );
      case "MenegerQual":
        return (
          <span class="bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Gerente de qualidade
          </span>
        );
      case "ManagerSales":
        return (
          <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Gerente de vendas
          </span>
        );
      case "TecInst":
        return (
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Tecnico de instalação
          </span>
        );
      case "Sales":
        return (
          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Atendimento ao cliente
          </span>
        );
      case "ProdWorker":
        return (
          <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Trabalhador de produção
          </span>
        );
      default:
        return (
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            Não definido
          </span>
        );
    }
  };
  const filteredOrders = orders.filter((order) => {
    if (search.role === "" && search.name === "") return order;
    if (search.role === "" && search.name !== "") {
      if (order.id.includes(search.name)) return order;
    } else if (search.role !== "" && search.name === "") {
      if (order.role === search.role) return order;
    } else {
      if (order.role === search.role && order.name.includes(search.name))
        return order;
    }
  });

  const calculateRange = (data) => {
    const range = [];
    const num = Math.ceil(data.length / 8);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page) => {
    return data.slice((page - 1) * 8, page * 8);
  };
  return (
    <div className="absolute inset-x-32 inset-y-16 overflow-x-auto shadow-md sm:rounded-lg bg-stone-200">
      <div className="flex align-baseline justify-between pb-4">
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="statusCheck" className="font-semibold text-sm ">
            Filtrar por Cargo:
          </label>
          <select
            name="statusCheck"
            id="statusCheck"
            onChange={(e) =>
              setSearch((search) => ({ ...search, status: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          >
            <option value="">Todos</option>
            <option value={"Manager"}>Gerente de produção</option>
            <option value={"Canceled"}>Engenheiro de produção</option>
            <option value={"Refunded"}>Gerente de qualidade</option>
            <option value={"PendingPayment"}>Gerente de vendas</option>
            <option value={"InProduction"}>Técnicos de instalação</option>
            <option value={"Scheduling"}>
              Equipe de atendimento ao cliente
            </option>
            <option value={"Scheduled"}>Trabalhadores de produção</option>
          </select>
        </div>
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="orderIdCheck" className="font-semibold text-sm ">
            Filtrar por Nome:
          </label>
          <input
            name="orderIdCheck"
            id="orderIdCheck"
            onChange={(e) =>
              setSearch((search) => ({ ...search, orderId: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          />
        </div>
        <div className="flex-[2]" />
      </div>
      <table className="table-fixed w-full text-sm text-left text-stone-500">
        <thead className="text-xs text-stone-900 uppercase ">
          <tr>
            <th className="px-6 py-3" scope="col">
              Nº Identificação
            </th>
            <th className="px-6 py-3" scope="col">
              Nome
            </th>
            <th className="px-6 py-3" scope="col">
              Cargo
            </th>

            <th className="px-6 py-3" scope="col">
              Ações
            </th>
            <th className="px-6 py-3" scope="col">
              Custo/h
            </th>
          </tr>
        </thead>
        <tbody>
          {sliceData(filteredOrders, page).map((order) => (
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
                {statusBadge(order.role)}
              </td>
              <td className="px-6 py-3">
                <div className="inline-grid grid-cols-4 gap-4">
                  <a>
                    <EyeIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  </a>
                  <a>
                    <CalendarDaysIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  </a>
                  <a href={`tel:${order.phone}`}>
                    <PhoneIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  </a>
                  <a href={`mail:${order.email}`}>
                    <EnvelopeIcon className="text-indigo-600 hover:text-indigo-900 cursor-pointer w-6" />
                  </a>
                </div>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
        {calculateRange(filteredOrders).length > 1 && (
          <tfoot>
            <tr className="">
              <td colSpan={4}>
                <div className="relative flex justify-center items-center">
                  <div className="flex items-center bottom-0 fixed bg-stone-200 w-full justify-center ">
                    <button
                      className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                    >
                      Anterior
                    </button>
                    {calculateRange(filteredOrders).map((num) => (
                      <button
                        key={num}
                        className={`${
                          page === num
                            ? "bg-indigo-500 text-white"
                            : "bg-white text-gray-700"
                        } px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50`}
                        onClick={() => setPage(num)}
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      onClick={() => setPage(page + 1)}
                      disabled={page === calculateRange(filteredOrders).length}
                    >
                      Seguinte
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
