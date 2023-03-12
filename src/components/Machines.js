import React from "react";
import { EyeIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import OrderModal from "./OrderModal";

function Machines() {
  const [search, setSearch] = useState({ status: "", orderId: "" });
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  let orders = [
    {
      id: "0001",
      name: "SCM Group Si400EP Nova",
      profilePhoto:
        "https://www.scmgroup.com/website/var/tmp/image-thumbnails/40000/41917/thumb__SCM-imgProdotto/Nova%20si%20400@2x.jpeg",
      status: "Serra de painel",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0002",
      name: "Biesse Rover A Edge 13",
      profilePhoto:
        "https://www.biessecdn.com/media/immagini/2382_n_biesse_rover_b_edge_pin_background.jpg",
      status: "CNC",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0003",
      name: "SCM Group Si400EP Nova",
      profilePhoto:
        "https://www.scmgroup.com/website/var/tmp/image-thumbnails/40000/41917/thumb__SCM-imgProdotto/Nova%20si%20400@2x.jpeg",
      status: "Serra de painel",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0004",
      name: "Homag Optimat KL 78/A20/S2",
      profilePhoto: "https://gromar.de/wp-content/uploads/2018/01/14052.jpg",
      status: "Coladeira de borda",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0005",
      name: "Ganner Red Baron",
      profilePhoto:
        "https://www.gannomat.at/Bilder_0194-204/Gannomat_Beschlaege-Bohr-Einpress-Maschine_Red-Basica_pic00.jpg",
      status: "Furadeira",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0006",
      name: "Heesemann MFA 10",
      profilePhoto:
        "https://files.hoechsmann.com/lexikon/img/full/hee_osr_i_2016.jpg",
      status: "Lixadeira",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0007",
      name: "Orma NPC/A 25/14",
      profilePhoto:
        "https://cdn10.bigcommerce.com/s-hc3v7/products/602/images/1744/NPC_6_95_HOT_HYDRAULIC_PRESS_DIGIT_WITH_1_INTERMEDIATE_PLATENS__09796.1455532950.1280.1280.png?c=2",
      status: "Prensa hidráulica",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0008",
      name: "Holzma HPP 250",
      profilePhoto:
        "https://files.hoechsmann.com/lexikon/img/full/hoz_hpp_250_2015.jpg",
      status: "Serra de fita",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0009",
      name: "SCM Tech Z5",
      profilePhoto:
        "https://files.hoechsmann.com/lexikon/img/full/scm_tech_z5_2012.jpg",
      status: "CNC",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0010",
      name: "Italpresse XL/8",
      profilePhoto:
        "https://www.rjmachinery.co.uk/imager/www_rjmachinery_co_uk/uploads/product-images/Italpresse_XL8_1_ba70c53f73b486e4404b9862f59e6e07.jpeg",
      status: "Prensa hidráulica",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0011",
      name: "SCM Group Sandya 10 S",
      profilePhoto:
        "https://www.scmgroup.com/website/var/tmp/image-thumbnails/20000/27144/thumb__SCM-imgProdotto/557-dmc-sd-10_ROSSO_2017@2x.jpeg",
      status: "Lixadeira",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0012",
      name: "SCM Group Sigma 65",
      profilePhoto:
        "https://files.hoechsmann.com/lexikon/img/full/scm_sigma_prima_2015.jpg",
      status: "Serra de fita",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "Serra de painel":
        return (
          <span class="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            Serra de painel
          </span>
        );
      case "CNC":
        return (
          <span class="mr-2 rounded bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
            CNC
          </span>
        );
      case "Coladeira de borda":
        return (
          <span class="mr-2 rounded bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            Coladeira de borda
          </span>
        );
      case "Furadeira":
        return (
          <span class="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
            Furadeira
          </span>
        );
      case "Lixadeira":
        return (
          <span class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Lixadeira
          </span>
        );
      case "Prensa hidráulica":
        return (
          <span className="mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
            Prensa hidráulica
          </span>
        );
      case "Serra de fita":
        return (
          <span class="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
            Serra de fita
          </span>
        );
      case "Done":
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
    <div>
      <ul class="absolute inset-y-6 inset-x-32 flex w-56 border-b border-gray-100">
        <li class="flex-1">
          <a class="relative block p-4" href="">
            <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

            <div class="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>

              <span class="text-sm font-medium text-gray-900"> Máquinas </span>
            </div>
          </a>
        </li>

        <li class="flex-1">
          <a class="relative block p-4" href="">
            <div class="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 flex-shrink-0 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>

              <span class="text-sm font-medium text-gray-900"> Histórico</span>
            </div>
          </a>
        </li>
      </ul>
      <div className="absolute inset-x-32 inset-y-32 overflow-x-auto bg-stone-200 shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <div className="mx-6 my-3 flex-[1]">
            <label htmlFor="statusCheck" className="text-sm font-semibold ">
              Filtrar por tipo de Máquina:
            </label>
            <select
              name="statusCheck"
              id="statusCheck"
              onChange={(e) =>
                setSearch((search) => ({ ...search, status: e.target.value }))
              }
              className="peer w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 "
            >
              <option value={""}>Todos</option>
              <option value={"Serra de painel"}>Serra de painel</option>
              <option value={"CNC"}>CNC</option>
              <option value={"Coladeira de borda"}>Coladeira de borda</option>
              <option value={"Furadeira"}>Furadeira</option>
              <option value={"Lixadeira"}>Lixadeira</option>
              <option value={"Prensa hidráulica"}>Prensa hidráulica</option>
              <option value={"Serra de fita"}>Serra de fita</option>
            </select>
          </div>
          <button
            type="button"
            class="ml-2 inline-block border border-red-600 bg-red-600 px-10 py-4 font-medium text-white hover:border-red-700 hover:bg-red-700"
          >
            Guardar
          </button>
          <div className="flex-[2]" />
        </div>
        <table className="w-full table-fixed text-left text-sm text-stone-500">
          <thead className="text-xs uppercase text-stone-900 ">
            <tr>
              <th className="px-6 py-3" scope="col">
                ID
              </th>
              <th className="px-6 py-3" scope="col">
                Máquina
              </th>
              <th className="px-6 py-3" scope="col">
                Tipo
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
                  <button
                    className="hover:text-red-600"
                    onClick={() => {
                      setOpenModal(true);
                      setModalData(order);
                    }}
                  >
                    <u>{order.id}</u>
                  </button>
                </th>
                {openModal && (
                  <OrderModal openModal={setOpenModal} modalData={modalData} />
                )}
                <td className="whitespace-nowrap px-6 py-3">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="aspect-square h-10 w-10 "
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
                  {statusBadge(order.status)}
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
    </div>
  );
}

export default Machines;
