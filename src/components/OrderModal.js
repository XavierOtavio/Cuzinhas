import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function OrderModal(props) {
  const setOpenModal = props.openModal;
  const modalData = props.modalData;

  return (
    <div>
      <div class="fixed z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-stone-50/20 p-4 md:inset-0 md:h-full">
        <div class="h-full w-full max-w-4xl shadow-lg md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div class="flex  rounded-t border-b p-4 ">
              <h3 class="text-xl font-semibold text-gray-900">
                Encomenda: {modalData.id}
              </h3>{" "}
              <button
                type="button"
                class="ml-auto rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                onClick={() => setOpenModal(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="space-y-6 p-6">
              <form className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    Cliente
                  </h1>
                  <img
                    className="h-24 w-24 rounded-full"
                    src={modalData.profilePhoto}
                  />
                  <label class="mt-6 block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    class="form-input w-full rounded-md border p-2 text-lg"
                    defaultValue={modalData.name}
                  />
                  <label class="mt-6 block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    class="form-input w-full rounded-md border p-2 text-lg "
                    defaultValue={modalData.phone}
                  />
                  <label class="mt-6 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    class="form-input w-full rounded-md border p-2 text-lg "
                    defaultValue={modalData.email}
                  />
                </div>
                <div className="col-span-6">
                  <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    Detalhes da encomenda
                  </h1>
                  <label class="block text-sm font-medium text-gray-700">
                    ID: {modalData.id}
                  </label>
                  <label class="mt-6 block text-sm font-medium text-gray-700">
                    Descrição
                  </label>
                  <textarea
                    class="form-input h-32 w-full rounded-md border p-2 text-lg "
                    defaultValue="Cozinha modelo personalizável. Formato: 3.5x2.5m. Cor: Branco. Material: MDF. Acabamento: Brilhante. "
                  />
                  <label class="block text-sm font-medium text-gray-700">
                    Estado da encomenda
                  </label>
                  <select class="form-select w-full rounded-md border p-2 text-lg ">
                    <option value={""}>{modalData.status}</option>
                    <option value={"Canceled"}>Cancelado</option>
                    <option value={"Refunded"}>Reembolsado</option>
                    <option value={"PendingPayment"}>
                      À espera de pagamento
                    </option>
                    <option value={"InProduction"}>Em produção</option>
                    <option value={"Scheduling"}>
                      À espera de agendamento
                    </option>
                    <option value={"Scheduled"}>Agendado</option>
                    <option value={"Assembling"}>Em instalação</option>
                    <option value={"Done"}>Concluido</option>
                  </select>
                </div>
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="space-x-2 rounded-b border-t border-gray-200 p-6">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class=" ml-2 border border-red-600 bg-red-600 px-10 py-3 font-medium text-white hover:border-red-700 hover:bg-red-700"
                onClick={() => setOpenModal(false)}
              >
                Guardar
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                class=" ml-2 border border-red-600 px-10 py-3 font-medium text-red-600 hover:border-red-600 "
                onClick={() => setOpenModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
