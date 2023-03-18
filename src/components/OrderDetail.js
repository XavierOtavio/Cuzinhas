import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.data;

  console.log(location, " useLocation Hook");

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

  const statusHistory = () => {
    let statusHistory = [];
    const inProductionStatus = ["Corte", "Lixar", "Colagem", "Prensagem"];
    const status = [
      "PendingPayment",
      "InProduction",
      "Scheduling",
      "Scheduled",
      "Assembling",
      "Done",
    ];
    const canceledStatus = ["PendingPayment", "Canceled", "Refunded"];
    if (canceledStatus.includes(order?.status)) {
      //TODO: fill with random data till status
    } else if (status.includes(order?.status)) {
      if (order?.status === "InProduction") {
        //TODO: fill with random data till status (FOR LOOP)
      } else if (order?.status === "Scheduling") {
        //TODO: fill with random data till status
      }
    }
  };

  return (
    <>
      <div className="absolute left-32 right-16 top-0 bottom-32 ">
        <div className="inline-flex h-16 w-full items-center justify-start gap-4 align-baseline">
          <ArrowLeftCircleIcon
            className="h-8 w-8"
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
              <tbody className="divide-y divide-stone-300"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
