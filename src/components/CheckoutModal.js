import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function CheckoutModal(props) {
  const setOpenModal = props.openModal;
  const modalData = props.modalData;

  return (
    <div>
      <div class="fixed z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-stone-50/60 p-4 md:inset-0 md:h-full">
        <div class="h-full w-full max-w-4xl shadow-lg md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div class="flex  rounded-t border-b p-4 ">
              <h3 class="text-xl font-semibold text-gray-900">
                Cozinha Modelo Personalizavel: {modalData}€
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
              <form class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                  <label
                    for="FirstName"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Primeiro Nome
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    for="LastName"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Último Nome
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    for="Email"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    for="Phone"
                    class="block text-xs font-medium text-gray-700"
                  >
                    Telemóvel
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Detalhes do Cartão
                  </legend>

                  <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label for="CardNumber" class="sr-only">
                        {" "}
                        Número do Cartão{" "}
                      </label>

                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Número do Cartão"
                        class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div class="flex -space-x-px">
                      <div class="flex-1">
                        <label for="CardExpiry" class="sr-only">
                          {" "}
                          Card Expiry{" "}
                        </label>

                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Data de Validade"
                          class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                        />
                      </div>

                      <div class="flex-1">
                        <label for="CardCVC" class="sr-only">
                          {" "}
                          Card CVC{" "}
                        </label>

                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="col-span-6">
                  <legend class="block text-sm font-medium text-gray-700">
                    Endereço de Entrega
                  </legend>

                  <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label for="Country" class="sr-only">
                        País
                      </label>

                      <select
                        id="Country"
                        class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                      >
                        <option>Portugal</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label class="sr-only" for="PostalCode">
                        {" "}
                        Código Postal{" "}
                      </label>

                      <input
                        type="text"
                        id="Código Postal"
                        placeholder="Código Postal"
                        class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white pl-3 text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                  </div>
                  <legend class="mt-5 block  text-xs text-gray-600">
                    (Tempo previsto de produção: 2 semanas. Após a produção da
                    encomenda, iremos contactá-lo para agendar a entrega e
                    instalação)
                  </legend>
                </fieldset>
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
                Encomendar
              </button>
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                class=" ml-2 border border-gray-300 bg-white px-10 py-3 font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50"
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

export default CheckoutModal;
