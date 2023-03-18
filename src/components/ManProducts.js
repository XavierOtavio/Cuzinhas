import React from "react";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

function ManProducts() {
  const [search, setSearch] = useState({ status: "", orderId: "" });
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  let orders = [
    {
      id: "0001",
      name: "Bancada",
      profilePhoto:
        "https://www.ikea.com/pt/pt/images/products/knoxhult-arm-baix-c-portas-e-gaveta-branco__0630760_pe694888_s5.jpg?f=s",
      status: "Serra de painel",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0002",
      name: "Carro de cozinha",
      profilePhoto:
        "https://cdn.sklum.com/pt/wk/1156869/sutton-bamboo-kitchen-carrinho.jpg?cf-resize=gallery",
      status: "CNC",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0003",
      name: "Armários",
      profilePhoto:
        "https://www.vidaxl.pt/dw/image/v2/BFNS_PRD/on/demandware.static/-/Sites-vidaxl-catalog-master-sku/default/dw2512f5d2/hi-res/436/6356/6934/3100520/image_2_3100520.jpg?sw=400",
      status: "Serra de painel",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0004",
      name: "Balcão",
      profilePhoto:
        "https://www.mobilifiver.com/eu/media/catalog/product/cache/c372f91d8c0e0b34b70d1c6157029c71/0/2/02EV2000M9_prodotto_princ_01_web_3d6e.jpeg",
      status: "Coladeira de borda",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

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
      <ul class="absolute inset-y-6 inset-x-32 flex w-56 border-b border-gray-100"></ul>
      <div className="absolute inset-x-32 inset-y-32 overflow-x-auto bg-stone-200 shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <div className="mx-6 my-3 flex-[1]">
            <label htmlFor="statusCheck" className="text-sm font-semibold ">
              Filtrar por tipo de Móvel:
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

              <option value={"CNC"}>Bancada</option>
              <option value={"Coladeira de borda"}>Carro cozinha</option>
              <option value={"Furadeira"}>Amários</option>
              <option value={"Lixadeira"}>Balcão</option>
            </select>
          </div>
          <button
            type="button"
            class="ml-2 inline-block border border-red-600 bg-red-600 px-10 py-4 font-medium text-white hover:border-red-700 hover:bg-red-700"
          >
            Adicionar Móvel
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
                Móvel
              </th>
              <th className="px-6 py-3" scope="col">
                Detalhes/Apagar
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
                  <th>
                    <Link to="/dashboard/detailproducts">
                      <EyeIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                    </Link>
                  </th>
                  <th>
                    <TrashIcon className="w-6 cursor-pointer text-indigo-600 hover:text-indigo-900" />
                  </th>
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

          {/* {calculateRange(filteredOrders).length > 1 && (
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
          )} */}
        </table>
      </div>
    </div>
  );
}

export default ManProducts;
