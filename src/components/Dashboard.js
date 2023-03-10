import { useState } from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [search, setSearch] = useState({ status: "", orderId: "" });

  let orders = [
    {
      id: "-340,75",
      name: "Luz",
      profilePhoto: "https://cdn-icons-png.flaticon.com/512/4021/4021717.png",
      status: "Despesa",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "-573,56",
      name: "Aluguer do espaço",
      profilePhoto: "https://cdn-icons-png.flaticon.com/512/2329/2329140.png",
      status: "Despesa",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "1.037,65",
      name: "Encomenda 0004",
      profilePhoto:
        "https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "2.598,90",
      name: "Encomenda 0005",
      profilePhoto:
        "https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "7500,00",
      name: "Patrocínio - TMC Portugal",
      profilePhoto:
        "https://cdn.freebiesupply.com/logos/large/2x/tmc-13-logo-png-transparent.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "-15040,24",
      name: "Salários",
      profilePhoto: "https://static.thenounproject.com/png/1725977-200.png",
      status: "Despesa",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "50.000,00",
      name: "Ajuda do Sócrates",
      profilePhoto:
        "https://styles.redditmedia.com/t5_3bvj7q/styles/communityIcon_zcukcjwdjhp61.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "-774,00",
      name: "Manutenção Máquinas",
      profilePhoto: "https://cdn-icons-png.flaticon.com/512/1514/1514411.png",
      status: "Despesa",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "-760,00",
      name: "Limpeza do espaço",
      profilePhoto: "https://cdn-icons-png.flaticon.com/512/995/995053.png",
      status: "Despesa",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "3556,79",
      name: "Encomenda 0013",
      profilePhoto:
        "https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "2750,50",
      name: "Encomenda 0014",
      profilePhoto:
        "https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "5600,65",
      name: "Encomenda 0015",
      profilePhoto:
        "https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png",
      status: "Ganho",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "Despesa":
        return (
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <ArrowTrendingDownIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> Despesa </span>
          </div>
        );
      case "Ganho":
        return (
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> Ganho </span>
          </div>
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

  return (
    <div className="absolute inset-0 mx-32 my-16 grid grid-cols-12 grid-rows-6 gap-2">
      <div className="row-start-1 row-end-2 col-start-1 col-end-5">
        <button
          // class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4 hover:shadow-lg hover:border-stone-900 focus:border-stone-900 focus:shadow-lg"
          className={` ${
            search.status === ""
              ? "flex flex-col gap-4 rounded-lg border bg-white w-full h-full p-4 hover:shadow-lg hover:border-stone-900 border-stone-900 shadow-lg"
              : "flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4 hover:shadow-lg hover:border-stone-900 focus:border-stone-900 focus:shadow-lg"
          }`}
          onClick={(e) => setSearch((search) => ({ ...search, status: "" }))}
        >
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong class="block text-left text-2xl font-medium text-gray-500">
              Lucro
            </strong>
            <p>
              <span class="text-2xl font-medium text-gray-900"> 7595,49€ </span>
            </p>
          </div>
        </button>
      </div>
      <div className="row-start-2 row-end-3 col-start-1 col-end-5">
        <button
          class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4 hover:shadow-lg hover:border-stone-900 focus:border-stone-900 focus:shadow-lg"
          onClick={(e) =>
            setSearch((search) => ({ ...search, status: "Ganho" }))
          }
        >
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong class="block text-left text-2xl font-medium text-gray-500">
              Ganhos
            </strong>
            <p>
              <span class="text-2xl font-medium text-gray-900">
                {" "}
                24 470,96€
              </span>
            </p>
          </div>
        </button>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-5">
        <button
          class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4 hover:shadow-lg hover:border-stone-900 focus:border-stone-900 focus:shadow-lg"
          onClick={(e) =>
            setSearch((search) => ({ ...search, status: "Despesa" }))
          }
        >
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <ArrowTrendingDownIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong class="block text-left text-2xl font-medium text-gray-500">
              Despesas
            </strong>
            <p>
              <span class="text-2xl font-medium text-gray-900">
                {" "}
                16 875,47€
              </span>
            </p>
          </div>
        </button>
      </div>
      <div className="row-start-4 row-end-7 col-start-1 col-end-5 m-6 text-center">
        <p className="text-2xl font-medium">Performance de Vendas</p>
        <img
          className="relative bg-contain"
          alt="graphic"
          src="https://i.ibb.co/QcxN74x/piechart.jpg"
        />
      </div>
      <div className="row-start-1 row-end-7 col-start-6 col-end-13 overflow-y-scroll overscroll-y-auto">
        <div className=" inset-x-32 inset-y-16 overflow-x-auto shadow-md sm:rounded-lg bg-stone-200">
          <div className="flex align-baseline justify-between pb-4">
            <div className="relative mx-6 my-3 flex-[1]">
              <label htmlFor="orderIdCheck" className="font-semibold text-sm ">
                Filtrar por descrição:
              </label>
              <input
                name="orderIdCheck"
                id="orderIdCheck"
                onChange={(e) =>
                  setSearch((search) => ({
                    ...search,
                    orderId: e.target.value,
                  }))
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
                  Descrição
                </th>
                <th className="px-6 py-3" scope="col">
                  Valor
                </th>
                <th className="px-6 py-3" scope="col">
                  Tipo de Transação
                </th>
              </tr>
            </thead>
            <tbody className="bg-stone-50">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="bg-stone-100 border-b">
                  <td className="px-6 py-3 whitespace-nowrap cursor-pointer">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 aspect-square"
                          src={order.profilePhoto}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{order.name}</div>
                      </div>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-3 whitespace-nowrap cursor-pointer "
                  >
                    {order.id}€
                  </th>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {statusBadge(order.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
