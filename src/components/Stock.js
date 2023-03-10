import {
  ExclamationTriangleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Stock() {
  const [stock, setStock] = useState(null);
  const changeStock = (material) => {
    if (stock === null || stock !== material) {
      setStock(material);
    } else {
      setStock(null);
    }
  };
  return (
    <div className="absolute left-32 right-16 inset-y-16 grid grid-cols-12 grid-rows-6">
      <div className="col-span-5 row-span-6 bg-stone-50 px-4 overflow-y-scroll scroll-smooth flex h-full gap-4 flex-col no-scrollbar">
        <div
          onClick={() => changeStock("Madeira Sólida")}
          className="flex flex-col justify-between rounded-lg shadow-xl transition-shadow hover:shadow-lg  bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Madeira Sólida
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock atual(kg): 354 <br />
                Stock recomendado(kg): 1000 <br />
                Stock Obrigatório(kg): 500
              </p>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-baseline">
              <div className="text-red-500 text-sm mt-8 font-medium uppercase align-baseline flex">
                <ExclamationTriangleIcon className="h-6 w-6 " />
                <p className="ml-2">Stock baixo</p>
              </div>
              {stock === "Madeira Sólida" ? (
                <ArrowLeftCircleIcon className="h-10 w-10 text-indigo-500" />
              ) : (
                <ArrowRightCircleIcon className="h-10 w-10 text-indigo-500" />
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("Laminados")}
          className="flex flex-col justify-between rounded-lg shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Laminados
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock atual(kg): 1354 <br />
                Stock recomendado(kg): 800 <br />
                Stock Obrigatório(kg): 343
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-baseline">
            <div className="text-red-500 text-sm mt-8 font-medium uppercase align-baseline flex"></div>
            {stock === "Laminados" ? (
              <ArrowLeftCircleIcon className="h-10 w-10 text-indigo-500" />
            ) : (
              <ArrowRightCircleIcon className="h-10 w-10 text-indigo-500" />
            )}
          </div>
        </div>
        <div
          onClick={() => changeStock("Madeira Veneer")}
          className="flex flex-col justify-between rounded-lg shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Madeira Veneer
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock recomendado(kg): 100 <br />
                Stock atual(kg): 98 <br />
                Stock Obrigatório(kg): 37
              </p>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-baseline">
              <div className="text-red-500 text-sm mt-8 font-medium uppercase align-baseline flex"></div>
              {stock === "Madeira Veneer" ? (
                <ArrowLeftCircleIcon className="h-10 w-10 text-indigo-500" />
              ) : (
                <ArrowRightCircleIcon className="h-10 w-10 text-indigo-500" />
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("PVC")}
          className="flex flex-col justify-between rounded-lg shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              PVC
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock recomendado(kg): 1000 <br />
                Stock atual(kg): 354 <br />
                Stock Obrigatório(kg): 500
              </p>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-baseline">
              <div className="text-red-500 text-sm mt-8 font-medium uppercase align-baseline flex">
                <ExclamationTriangleIcon className="h-6 w-6 " />
                <p className="ml-2">Stock baixo</p>
              </div>
              {stock === "PVC" ? (
                <ArrowLeftCircleIcon className="h-10 w-10 text-indigo-500" />
              ) : (
                <ArrowRightCircleIcon className="h-10 w-10 text-indigo-500" />
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("Alumínio")}
          className="flex flex-col justify-between rounded-lg shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Alumínio
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock recomendado(kg): 1000 <br />
                Stock atual(kg): 354 <br />
                Stock Obrigatório(kg): 500
              </p>
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-baseline">
              <div className="text-red-500 text-sm mt-8 font-medium uppercase align-baseline flex">
                <ExclamationTriangleIcon className="h-6 w-6 " />
                <p className="ml-2">Stock baixo</p>
              </div>
              {stock === "Alumínio" ? (
                <ArrowLeftCircleIcon className="h-10 w-10 text-indigo-500" />
              ) : (
                <ArrowRightCircleIcon className="h-10 w-10 text-indigo-500" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7 row-span-6 bg-stone-50 rounded-lg shadow-lg p-4">
        <div className="h-full">
          {stock === null ? (
            <section className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center">
                <p className="text-3xl font-sans">Stock em falta</p>
                <button className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-stone-50 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500">
                  Criar encomenda automática
                </button>
              </div>
              <div class="mx-2 text-sm mt-32 flex justify-between">
                <ul class="list-item ml-10">
                  <span className="inline-flex gap-2 justify-center">
                    <li className="font-bold text-lg pb-6">Quantidade(kg)</li>
                  </span>
                  <li>120</li>
                  <li>200</li>
                  <li>123</li>
                  <li>12</li>
                  <li>45</li>
                </ul>
                <ul class="list-item">
                  <span className="inline-flex gap-2 justify-center ">
                    <li className="font-bold text-lg pb-6">Matérias Primas</li>
                  </span>
                  <li>Madeira Sólida</li>
                  <li>Alumínio</li>
                  <li>PVC</li>
                  <li>Laminados</li>
                  <li>Madeira Veneer</li>
                </ul>
                <ul class="list-item font-light text-right">
                  <span className="inline-flex gap-2 justify-center">
                    <li className="font-bold text-lg pb-6">Preço/Kg(€)</li>
                  </span>
                  <li>12.020</li>
                  <li>9.054</li>
                  <li>1.001</li>
                  <li>22.220</li>
                  <li>12.321</li>
                </ul>
              </div>
              <div className="flex-grow w-full flex flex-col items-end align-bottom  gap-6 justify-end mx-2">
                <div className="inline-flex justify-between w-full">
                  <p className="font-bold text-xl">Total c/ IVA: </p>
                  <p className="font-light text-xl">2345.78 €</p>
                </div>
                <button className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm w-full font-medium text-stone-50 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500">
                  Encomendar
                </button>
              </div>
            </section>
          ) : (
            <div className="h-full grid m-6 grid-cols-6 grid-rows-6">
              <p className="font-bold row-start-1 row-end-2 col-start-1 col-end-5 pl-2 text-3xl">
                {stock}
              </p>
              <label
                forHtml="quantity"
                className="row-start-2 row-end-3 col-start-1 col-end-3 self-center text-lg font-bold"
              >
                Quantidade
              </label>
              <input
                name="quantity"
                type="number"
                min="0"
                max="1000"
                step="1"
                defaultValue="345"
                className="row-start-2 row-end-3 col-start-3 col-end-7 self-center text-center inline-block rounded border max-h-6 px-12 py-3 text-sm font-medium focus:outline-none focus:ring "
              />
              <label
                forHtml="price"
                className="row-start-3 row-end-4 col-start-1 col-end-3 self-center text-lg font-bold"
              >
                Preço
              </label>
              <input
                name="price"
                type=""
                min="0"
                max="1000"
                step="0.01"
                defaultValue="12.43"
                className="row-start-3 row-end-4 col-start-3 col-end-7 self-center text-center inline-block rounded border max-h-6 px-12 py-3 text-sm font-medium focus:outline-none focus:ring "
              />
              <label
                forHtml="price"
                className="row-start-4 row-end-5 col-start-1 col-end-3 self-center text-lg font-bold"
              >
                Preço * Quantidade (€)
              </label>
              <p className="row-start-4 row-end-5 col-start-4 col-end-7 self-center text-lg font-bold">
                345 * 12.43 = 4295.45 €
              </p>
              <button className="row-start-6 row-end-7 col-start-1 col-end-7 self-center inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-stone-50 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500">
                Atualizar lista
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
