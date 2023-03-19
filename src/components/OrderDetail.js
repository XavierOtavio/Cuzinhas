import { useState, useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.data;

  useEffect(() => {
    setHistory(statusHistory(order));
  }, []);

  useEffect(() => {
    console.log(history);
  }, [history]);

  const showProducts = () => {
    const products = [
      "Peninsula",
      "Cadeira",
      "Mesa",
      "Ilha",
      "Armário de parede",
      "Balcão em Madeira",
      "Balcão em Pedra",
      "Balcão em granito",
      "Forno",
    ];
    return (
      <p>
        {Math.floor(Math.random() * 8) + 1}x{" "}
        {products[Math.floor(Math.random() * products.length)]}
      </p>
    );
  };
  const statusBadge = (status) => {
    switch (status) {
      case "Canceled":
        return (
          <span className="mr-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            Cancelado
          </span>
        );
      case "Refunded":
        return (
          <span className="mr-2 rounded bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
            Reembolsado
          </span>
        );
      case "InProduction":
        return (
          <span className="mr-2 rounded bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            Em produção
          </span>
        );
      case "PendingPayment":
        return (
          <span className="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
            À espera de pagamento
          </span>
        );
      case "Assembling":
        return (
          <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Em instalação
          </span>
        );
      case "Scheduling":
        return (
          <span className="mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
            A agendar
          </span>
        );
      case "Scheduled":
        return (
          <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
            Agendado
          </span>
        );
      case "Done":
        return (
          <span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Concluído
          </span>
        );
      case "Lixar":
        return (
          <span class="mr-2 rounded px-2.5 py-0.5 text-xs font-medium text-red-800 outline outline-red-100">
            Lixar
          </span>
        );
      case "Corte":
        return (
          <span class="mr-2 rounded px-2.5 py-0.5 text-xs font-medium text-blue-800 outline outline-blue-100">
            Corte
          </span>
        );
      case "Colagem":
        return (
          <span class="mr-2 rounded px-2.5 py-0.5 text-xs font-medium text-green-800 outline outline-green-800/25">
            Colagem
          </span>
        );
      case "Prensagem":
        return (
          <span class="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            Prensagem
          </span>
        );
      default:
        return (
          <span className="mr-2 rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            Não definido
          </span>
        );
    }
  };

  const addDays = (date, days, offset) => {
    let finalDate = new Date(date);
    return finalDate.setDate(
      finalDate.getDate() + Math.floor(Math.random() * days) + offset
    );
  };
  const statusHistory = (order) => {
    let aux = [];
    const inProductionStatus = ["Corte", "Lixar", "Colagem", "Prensagem"];
    const status = [
      "PendingPayment",
      "InProduction",
      "Scheduling",
      "Scheduled",
      "Assembling",
      "Done",
    ];
    const canceledStatus = ["Canceled", "Refunded"];
    if (canceledStatus.includes(order.status)) {
      if (order.status === "Canceled") {
        aux.push({
          statusDate: new Date(
            addDays(order.orderDate, 5, 1)
          ).toLocaleDateString(),
          status: "PendingPayment",
          machine: "--",
          operator: "--",
          observations: ["Error", ""],
        });
        aux.push({
          statusDate: new Date(
            addDays(order.orderDate, 10, 5)
          ).toLocaleDateString(),
          status: "Canceled",
          machine: "--",
          operator: "--",
          observations: [
            "Done",
            "Foi feita uma tentativa de contato sem sucesso",
          ],
        });
      } else if (order.status === "Refunded") {
        aux.push({
          statusDate: new Date(
            addDays(order.orderDate, 5, 1)
          ).toLocaleDateString(),
          status: "PendingPayment",
          machine: "--",
          operator: "--",
          observations: ["Done", ""],
        });
        aux.push({
          statusDate: new Date(
            addDays(order.orderDate, 10, 5)
          ).toLocaleDateString(),
          status: "Canceled",
          machine: "--",
          operator: "--",
          observations: [
            "Done",
            "Após vontade por parte do cliente, foi feita uma tentativa de contato sem sucesso",
          ],
        });
        aux.push({
          statusDate: new Date(
            addDays(order.orderDate, 5, 15)
          ).toLocaleDateString(),
          status: "Refunded",
          machine: "--",
          operator: "--",
          observations: ["Done", ""],
        });
      }
    } else if (status.includes(order?.status)) {
      for (let i = 0; i < status.length; i++) {
        if (status[i] === "InProduction") {
          for (let j = 0; j < inProductionStatus.length; j++) {
            aux.push({
              statusDate: new Date(
                addDays(order.orderDate, 2 * i + 5, 2 * i + 1)
              ).toLocaleDateString(),
              status: inProductionStatus[j],
              machine: "00" + Math.floor(Math.random() * 8 + 1),
              operator: "00" + Math.floor(Math.random() * 8 + 1),
              observations:
                order.status === "InProduction"
                  ? j === 3
                    ? ["InProgress", ""]
                    : [["Done", "InProgress"][Math.round(Math.random())], ""]
                  : ["Done", ""],
            });
            if (aux[aux.length - 1].observations[0] === "InProgress") break;
          }
        } else {
          aux.push({
            statusDate: new Date(
              addDays(order.orderDate, 10 * i + 5, 10 * i + 1)
            ).toLocaleDateString(),
            status: status[i],
            machine: "--",
            operator: "--",
            observations:
              status[i] === order.status ? ["InProgress", ""] : ["Done", ""],
          });
        }
        if (status[i] === order.status) break;
      }
    }
    return aux;
  };

  return (
    <>
      <div className="bototom-32 absolute left-32 right-16 top-0 ">
        <div className="inline-flex h-16 w-full items-center justify-start gap-4 align-baseline">
          <ArrowLeftCircleIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-2xl font-bold">Order ID: {order?.id}</h1>
        </div>
        <div className="grid h-full grid-cols-12 grid-rows-6">
          <div className="col-span-4 row-span-3 m-2 flex flex-col rounded-lg bg-stone-200 px-16 py-8">
            <img
              className="h-24 w-24 rounded-xl py-2"
              src={order?.profilePhoto}
              alt="profile"
            />
            <p className="pt-2 text-xl font-bold">{order?.name}</p>
            <p className="pb-2 text-sm font-light text-stone-500">
              @{order?.user}
            </p>
            <a
              href={`tel:${order?.phone}`}
              className="inline-flex gap-2 py-2 text-sm"
            >
              <PhoneIcon className="h-4 w-4" /> {order?.phone}
            </a>
            <a
              href={`mail:${order?.email}`}
              className="inline-flex gap-2 py-2 text-sm"
            >
              <EnvelopeIcon className="h-4 w-4" /> {order?.email}
            </a>
            <span className="inline-flex gap-2 py-2 text-sm">
              <HomeIcon className="h-4 w-4" /> {order?.address}
            </span>
          </div>
          <div className="col-span-8 row-span-3 m-2 flex flex-col rounded-lg bg-stone-200 px-16 py-8">
            <p className="pb-2 text-2xl font-bold">Detalhes da encomenda</p>
            <p className="py-2 text-base">Data: {order?.orderDate}</p>
            <div className="inline-flex gap-2 py-2">
              <label className=" text-base">Status: </label>
              <select
                className="rounded-lg border-2 border-stone-500 text-base"
                name="status"
                id="status"
                defaultValue={order?.status}
              >
                <option value="">Não definido</option>
                <option value="PendingPayment">À espera de pagamento</option>
                <option value="Canceled">Cancelado</option>
                <option value="Refunded">Reembolsado</option>
                <option value="InProduction">Em produção</option>
                <option value="Assembling">Em instalação</option>
                <option value="Scheduling">A agendar</option>
                <option value="Scheduled">Agendado</option>
                <option value="Done">Concluído</option>
              </select>
            </div>
            <p className="py-2 text-base">
              Valor: {(Math.random() * 2000 + 500).toFixed(2)} €
            </p>
            <p className="py-2 text-base">
              Método de pagamento:{" "}
              {
                [
                  "MbWay",
                  "Cheque",
                  "Bitcoin ",
                  "Paypal",
                  "Cartão de crédito",
                ].sort(() => Math.random() - 0.5)[0]
              }
            </p>
            <div className="flex flex-row gap-2 py-2">
              <label className=" text-base">Produtos: </label>
              <p className="flex flex-col">
                {[...Array(Math.floor(Math.random() * 3) + 1)].map((e) =>
                  showProducts()
                )}
              </p>
            </div>
          </div>
          <div className="col-span-12 row-span-3 m-2 flex flex-col rounded-lg bg-stone-200 px-16 py-8">
            <p className="pb-2 text-2xl font-bold">Histórico da encomenda</p>
            <table className="no-scrollbar w-full table-fixed overflow-scroll py-2 text-left text-sm text-stone-500">
              <thead className="text-xs uppercase text-stone-900">
                <tr>
                  <th className="px-6 py-3" scope="col">
                    Data
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Estado
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Máquina
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Operador
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Observações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-300">
                {history.map((status) => {
                  return (
                    <tr key={order.id} className="">
                      <td className="whitespace-nowrap px-6 py-3">
                        {status.statusDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {statusBadge(status.status)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {status.machine}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {status.operator}
                      </td>
                      <td className="flex flex-col gap-4 whitespace-nowrap px-6 py-3">
                        {status?.observations[0] === "Done" && (
                          <span className="h-8 w-24 rounded-2xl border border-green-500 py-1 px-2 text-center align-baseline text-xs text-green-500 ">
                            Com Sucesso
                          </span>
                        )}
                        {status?.observations[0] === "Error" && (
                          <span className="h-8 w-24 rounded-2xl border border-red-500 py-1 px-2 text-center align-baseline text-xs text-red-500 ">
                            Sem Sucesso
                          </span>
                        )}
                        {status?.observations[0] === "InProgress" && (
                          <span className="h-8 w-24 rounded-2xl border border-orange-500 py-1 px-2 text-center align-baseline text-xs text-orange-500 ">
                            Em progresso
                          </span>
                        )}
                        <p className=" whitespace-pre-wrap text-sm">
                          {status?.observations[1]}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
