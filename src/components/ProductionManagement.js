import React from "react";
import { EyeIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import OrderModal from "./OrderModal";

function ProductionManagement() {
  const [search, setSearch] = useState({ status: "", orderId: "" });
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  let orders = [
    {
      id: "0001",
      encomenda: "0001",
      name: "Corte",
      profilePhoto:
        "https://fd230791b4.cbaul-cdnwnd.com/6573da65277e34d2c8f10c32c9f32cbf/200000001-4c1aa4d753/1246700716628_f.jpg",
      status: "pendente",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0002",
      encomenda: "0002",
      name: "Corte",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/AalaAbdelgadir_profile%20resized.jpg?itok=oZMvPNBe",
      status: "pendente",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0003",
      encomenda: "0003",
      name: "Lixar",
      profilePhoto:
        "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
      status: "em progresso",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0004",
      encomenda: "0004",
      name: "Colagem",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Aseel%20Profile%20Pic.jpg?h=96281f56&itok=_XvylDKQ",
      status: "concluido",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0005",
      encomenda: "0005",
      name: "Prensagem",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/YutianAn0919_0004.jpg?h=6bb51d0e&itok=D-1_EYgw",
      status: "em progresso",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0006",
      encomenda: "0006",
      name: "Corte",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
      status: "pendente",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0007",
      encomenda: "0004",
      name: "Sofia",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Elizabeth-Bachman_092721_0003.jpg?h=102c6dce&itok=uL0Sbls1",
      status: "concluido",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0008",
      encomenda: "0004",
      name: "Miguel",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/GordonArsenoff_072721_0014-edit%20%281%29.jpg?h=39a78a6d&itok=hgDXBQsE",
      status: "concluido",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0009",
      encomenda: "0009",
      name: "Inês",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-4.jpeg?h=6d5fbd74&itok=UAzUQXdO",
      status: "em progresso",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0010",
      encomenda: "0010",
      name: "Rita",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Al-Shami.jpeg?h=227444a7&itok=hmE_Lctk",
      status: "em progresso",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0011",
      encomenda: "0011",
      name: "Luís",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Alkhawaldeh_Headshot.jpg?h=6a43611b&itok=RFd3qC78",
      status: "concluido",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0012",
      encomenda: "0012",
      name: "João",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Greg%20Amusu%20Department%20Photo%20%28002%29%202.jpeg?itok=lqtdmKJB",
      status: "concluido",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "pendente":
        return (
          <span class="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            Pendente
          </span>
        );
      case "em progresso":
        return (
          <span class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Em progresso
          </span>
        );
      case "concluido":
        return (
          <span class="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Concluído
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

  const processColor = (order) => {
    switch (order.status) {
      case "pendente":
        return (
          <span class="mr-2 rounded px-2.5 py-0.5 text-xs font-medium text-red-800 outline outline-red-100">
            {order.name}
          </span>
        );
      case "em progresso":
        return (
          <span class="mr-2 rounded px-2.5 py-0.5 text-xs font-medium text-blue-800 outline outline-blue-100">
            {order.name}
          </span>
        );
      case "concluido":
        return (
          <span class="mr-2 rounded px-2.5 py-0.5 text-xs font-medium text-green-800 outline outline-green-800/25">
            {order.name}
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

  const machine = (order) => {
    switch (order.status) {
      case "pendente":
        return (
          <select>
            <option value="0">--</option>
            <option value="1">Máquina 1</option>
            <option value="2">Máquina 2</option>
            <option value="3">Máquina 3</option>
          </select>
        );
      case "em progresso":
        return (
          <select>
            <option value="1">Máquina 1</option>
            <option value="2">Máquina 2</option>
            <option value="3">Máquina 3</option>
          </select>
        );
      case "concluido":
        return (
          <select>
            <option value="1">Máquina 1</option>
            <option value="2">Máquina 2</option>
            <option value="3">Máquina 3</option>
          </select>
        );
      default:
        return (
          <select>
            <option value="0">Selecione uma máquina</option>
            <option value="1">Máquina 1</option>
            <option value="2">Máquina 2</option>
            <option value="3">Máquina 3</option>
          </select>
        );
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (search.status === "" && search.orderId === "") return order;
    if (search.status === "" && search.orderId !== "") {
      if (order.id.includes(search.orderId)) return order;
    } else if (search.status !== "" && search.orderId === "") {
      if (order.status === search.status) return order;
    } else {
      if (order.status === search.status && order.id.includes(search.orderId))
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
            Filtrar por Estado:
          </label>
          <select
            name="statusCheck"
            id="statusCheck"
            onChange={(e) =>
              setSearch((search) => ({ ...search, status: e.target.value }))
            }
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
          >
            <option value={""}>Todos</option>
            <option value={"pendente"}>Pendente</option>
            <option value={"em progresso"}>Em Progresso</option>
            <option value={"concluido"}>Concluído</option>
          </select>
        </div>
        <div className="relative mx-6 my-3 flex-[1]">
          <label htmlFor="orderIdCheck" className="text-sm font-semibold ">
            Filtrar por encomenda:
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
      <table className="w-full table-fixed text-left text-sm text-stone-500">
        <thead className="text-xs uppercase text-stone-900 ">
          <tr>
            <th className="px-6 py-3" scope="col">
              ID Processo
            </th>
            <th className="px-6 py-3" scope="col">
              Encomenda
            </th>
            <th className="px-6 py-3" scope="col">
              Processo
            </th>
            <th className="px-6 py-3" scope="col">
              Estado
            </th>
            <th className="px-6 py-3" scope="col">
              Máquina
            </th>
            <th className="px-6 py-3" scope="col">
              Data de Início
            </th>
            <th className="px-6 py-3" scope="col">
              Data de Fim
            </th>
            {/* <th className="px-6 py-3" scope="col">
              Ações
            </th> */}
          </tr>
        </thead>
        <tbody className="bg-stone-50">
          {sliceData(filteredOrders, page).map((order) => (
            <tr key={order.id} className="border-b bg-stone-100">
              <th
                scope="row"
                className="cursor-pointer whitespace-nowrap px-6 py-3"
              >
                {order.id}
              </th>

              <td className="whitespace-nowrap px-6 py-3">
                <button
                  className="hover:text-red-600"
                  onClick={() => {
                    setOpenModal(true);
                    setModalData(order);
                  }}
                >
                  <u>{order.encomenda}</u>
                </button>
              </td>
              {openModal && (
                <OrderModal openModal={setOpenModal} modalData={modalData} />
              )}
              <td className="whitespace-nowrap px-6 py-3">
                <div className="flex items-center">
                  {/* <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={order.profilePhoto}
                      alt=""
                    />
                  </div> */}
                  <div className="ml-4">
                    <div className="text-sm font-medium">
                      {processColor(order)}
                    </div>

                    {/* <div className="text-sm font-medium">{order.name}</div> */}
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {statusBadge(order.status)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">{machine(order)}</td>
              <td className="whitespace-nowrap px-6 py-3">
                <div className="inline-grid grid-cols-3 gap-4">data teste</div>
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <div className="inline-grid grid-cols-3 gap-4">data teste</div>
              </td>
              {/* <td className="px-6 py-3">
                <div className="inline-grid grid-cols-3 gap-4">
                  <EyeIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  <a href={`tel:${order.phone}`}>
                    <PhoneIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  </a>
                  <a href={`mail:${order.email}`}>
                    <EnvelopeIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  </a>
                </div>
              </td> */}
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

export default ProductionManagement;
