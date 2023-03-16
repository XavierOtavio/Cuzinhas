import {
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

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
      hab: "Supervisonar operações, gerir staff",
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
      hab: "Planejar, desenvolver e implementar",
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
      hab: "Controlar qualidade de MP e PF",
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
      hab: "Gerir vendas",
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
      hab: "Responsavel pela instalação domestica",
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
      hab: "Responsavel pela instalação domestica",
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
      hab: "Relação cliente/processo de produção",
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
      hab: "Relação cliente/processo de produção",
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
      hab: "Serras e Coladeira",
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
      hab: "Furadeira e lixadeira",
    },
    {
      id: "0011",
      name: "Luís",
      earningsHour: "6",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Alkhawaldeh_Headshot.jpg?h=6a43611b&itok=RFd3qC78",
      role: "ProdWorker",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
      hab: "Prensa hidraulica e CNC",
    },
    {
      id: "0012",
      name: "João",
      earningsHour: "6",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Greg%20Amusu%20Department%20Photo%20%28002%29%202.jpeg?itok=lqtdmKJB",
      role: "ProdWorker",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
      hab: "Serras",
    },
  ];

  const statusBadge = (role) => {
    switch (role) {
      case "ManagerProd":
        return (
          <span class="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            Gerente de Produção
          </span>
        );
      case "EngineerProd":
        return (
          <span class="mr-2 rounded bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
            Engenheiro de Produção
          </span>
        );
      case "MenegerQual":
        return (
          <span class="mr-2 rounded bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            Gerente de qualidade
          </span>
        );
      case "ManagerSales":
        return (
          <span class="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
            Gerente de vendas
          </span>
        );
      case "TecInst":
        return (
          <span class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Tecnico de instalação
          </span>
        );
      case "Sales":
        return (
          <span className="mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
            Atendimento ao cliente
          </span>
        );
      case "ProdWorker":
        return (
          <span class="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
            Trabalhador de produção
          </span>
        );
      default:
        return (
          <span class="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
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
    return null;
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
    <div className="absolute inset-x-32 inset-y-16 overflow-x-auto bg-stone-200 shadow-md sm:rounded-lg">
      <div className="flex justify-between pb-4 align-baseline">
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="statusCheck" className="text-sm font-semibold ">
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
            <option value={"ManagerProd"}>Gerente de produção</option>
            <option value={"EngineerProd"}>Engenheiro de produção</option>
            <option value={"MenegerQual"}>Gerente de qualidade</option>
            <option value={"ManagerSales"}>Gerente de vendas</option>
            <option value={"TecInst"}>Técnicos de instalação</option>
            <option value={"Sales"}>Equipe de atendimento ao cliente</option>
            <option value={"ProdWorker"}>Trabalhadores de produção</option>
          </select>
        </div>
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="orderIdCheck" className="text-sm font-semibold ">
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
        <div>
          <button
            type="button"
            class="ml-2 inline-block border border-red-600 bg-red-600 px-10 py-4 font-medium text-white hover:border-red-700 hover:bg-red-700"
          >
            Adicionar funcionario
          </button>
        </div>
        <div className="flex-[2]" />
      </div>
      <table className="w-full table-fixed text-left text-sm text-stone-500">
        <thead className="text-xs uppercase text-stone-900 ">
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
              Habilitado para:
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
            <tr key={order.id} className="border-b bg-stone-100">
              <th
                scope="row"
                className="cursor-pointer whitespace-nowrap px-6 py-3"
              >
                {order.id}
              </th>
              <td className="cursor-pointer whitespace-nowrap px-6 py-3">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
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
              <td className="whitespace-nowrap px-6 py-3">
                {statusBadge(order.role)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">{order.hab}</td>
              <td className="px-6 py-3">
                <div className="inline-grid grid-cols-5 gap-4">
                  <EyeIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  <PencilIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  <CalendarDaysIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  <a href={`tel:${order.phone}`}>
                    <PhoneIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  </a>
                  <a href={`mail:${order.email}`}>
                    <EnvelopeIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  </a>
                </div>
              </td>
              <td>{`${order.earningsHour}.00€`}</td>
            </tr>
          ))}
        </tbody>
        {calculateRange(filteredOrders).length > 1 && (
          <tfoot className="absolute bottom-0 mb-4 inline-flex w-full items-center justify-center bg-stone-200">
            <td>
              <tr>
                <button
                  className="rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
                    } border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50`}
                    onClick={() => setPage(num)}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setPage(page + 1)}
                  disabled={page === calculateRange(filteredOrders).length}
                >
                  Seguinte
                </button>
              </tr>
            </td>
          </tfoot>
        )}
      </table>
    </div>
  );
}
