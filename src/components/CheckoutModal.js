import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function CheckoutModal(props) {
  const setOpenModal = props.openModal;
  const modalData = props.modalData;

  const progressBar = (data) => {
    switch (data.name) {
      case "Corte":
        return (
          <>
            <div class="col-span-12 mb-1 flex justify-between">
              <span class="text-sm font-medium ">Corte</span>
              <span class="text-sm font-medium">Lixar</span>
              <span class="text-sm font-medium">Colagem</span>
              <span class="text-sm font-medium">Prensagem</span>
              <span class="text-sm font-medium">Instalação</span>
            </div>
            <div class="col-span-12 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-2.5 w-12 rounded-full bg-blue-600"></div>
            </div>
          </>
        );
      case "Lixar":
        return (
          <>
            <div class="col-span-12 mb-1 flex justify-between">
              <span class="text-sm font-medium ">Corte</span>
              <span class="text-sm font-medium">Lixar</span>
              <span class="text-sm font-medium">Colagem</span>
              <span class="text-sm font-medium">Prensagem</span>
              <span class="text-sm font-medium">Instalação</span>
            </div>
            <div class="col-span-12 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-2.5 w-56 rounded-full bg-blue-600"></div>
            </div>
          </>
        );
      case "Colagem":
        return (
          <>
            <div class="col-span-12 mb-1 flex justify-between">
              <span class="text-sm font-medium ">Corte</span>
              <span class="text-sm font-medium">Lixar</span>
              <span class="text-sm font-medium">Colagem</span>
              <span class="text-sm font-medium">Prensagem</span>
              <span class="text-sm font-medium">Instalação</span>
            </div>
            <div class="col-span-12 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-2.5 w-3/6 rounded-full bg-blue-600"></div>
            </div>
          </>
        );
      case "Prensagem":
        return (
          <>
            <div class="col-span-12 mb-1 flex justify-between">
              <span class="text-sm font-medium ">Corte</span>
              <span class="text-sm font-medium">Lixar</span>
              <span class="text-sm font-medium">Colagem</span>
              <span class="text-sm font-medium">Prensagem</span>
              <span class="text-sm font-medium">Instalação</span>
            </div>
            <div class="col-span-12 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-2.5 w-9/12 rounded-full bg-blue-600"></div>
            </div>
          </>
        );
      case "Agendar Instalação":
        return (
          <>
            <div class="col-span-12 mb-1 flex justify-between">
              <span class="text-sm font-medium ">Corte</span>
              <span class="text-sm font-medium">Lixar</span>
              <span class="text-sm font-medium">Colagem</span>
              <span class="text-sm font-medium">Prensagem</span>
              <span class="text-sm font-medium">Instalação</span>
            </div>
            <div class="col-span-12 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-2.5 w-full rounded-full bg-blue-600"></div>
            </div>
          </>
        );
    }
  };

  return (
    <div>
      <div class="fixed z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-stone-50/20 p-4 md:inset-0 md:h-full">
        <div class="h-full w-full max-w-4xl shadow-lg md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div class="flex  rounded-t border-b p-4 ">
              <h3 class="text-xl font-semibold text-gray-900">
                Processo: {modalData.id} - {modalData.name}
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
              <form className="grid grid-cols-12  gap-4">
                <div className="col-span-4 mb-12 mt-10 ml-10">
                  <label className="block text-lg font-medium text-gray-700">
                    Encomenda:
                  </label>
                  <h3 className="text-3xl text-gray-900">
                    {modalData.encomenda}
                  </h3>
                </div>
                <div className="col-span-4 mb-12 mt-10 ">
                  <label className="block text-lg font-medium text-gray-700">
                    Material:
                  </label>
                  <h3 className="text-3xl text-gray-900">
                    {modalData.material}
                  </h3>
                </div>
                <div className="col-span-4 mb-12 mt-10 ml-10">
                  <label className="block text-lg font-medium text-gray-700">
                    Custo do Processo:
                  </label>
                  <h3 className=" text-3xl text-gray-900">
                    {modalData.custoProcesso}
                  </h3>
                </div>

                <div className="col-span-12">{progressBar(modalData)}</div>
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
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
