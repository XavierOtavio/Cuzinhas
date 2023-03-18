import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {
  return (
    <section className="pt-24">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Coleção de produtos
          </h2>

          <p class="mt-4 max-w-md text-gray-500">
            <b>Aqui tem uma Lista de alguns dos nossos produtos</b>
          </p>
        </header>

        <div class="mt-8 block lg:hidden">
          <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div class="hidden space-y-4 lg:block">
            <div>
              <label
                for="SortBy"
                class="block text-xs font-medium text-gray-700"
              >
                Ordenar por
              </label>

              <select id="SortBy" class="mt-1 rounded border-gray-300 text-sm">
                <option>Ordenar por</option>
                <option value="Title, DESC">Titulo, DESC</option>
                <option value="Title, ASC">Titulo, ASC</option>
                <option value="Price, DESC">Preço, DESC</option>
                <option value="Price, ASC">Preço, ASC</option>
              </select>
            </div>

            <div>
              <p class="block text-xs font-medium text-gray-700">Filtros</p>

              <div class="mt-1 space-y-2">
                <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span class="text-sm font-medium"> Disponibilidade </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="border-t border-gray-200 bg-white">
                    <header class="flex items-center justify-between p-4">
                      <span class="text-sm text-gray-700">
                        {" "}
                        0 Selecionados{" "}
                      </span>

                      <button
                        type="button"
                        class="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          for="FilterInStock"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Em Stock (5+)
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterPreOrder"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Pre encomenda (3+)
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterOutOfStock"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Sem Stock (10+)
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>

                <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span class="text-sm font-medium"> Price </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="border-t border-gray-200 bg-white">
                    <div class="border-t border-gray-200 p-4">
                      <div class="flex justify-between gap-4">
                        <label
                          for="FilterPriceFrom"
                          class="flex items-center gap-2"
                        >
                          <span class="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>

                        <label
                          for="FilterPriceTo"
                          class="flex items-center gap-2"
                        >
                          <span class="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </details>

                <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span class="text-sm font-medium"> Tipo de Material </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="border-t border-gray-200 bg-white">
                    <header class="flex items-center justify-between p-4">
                      <span class="text-sm text-gray-700">
                        {" "}
                        0 Selecionados{" "}
                      </span>

                      <button
                        type="button"
                        class="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          for="FilterRed"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterRed"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Pinho
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterBlue"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterBlue"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Osb
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterGreen"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterGreen"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Marmore
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterOrange"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOrange"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Cerejeira
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterPurple"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPurple"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Madeira de demolição
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterTeal"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterTeal"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Cedro
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3">
            <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <Link to="product1">
                  <div class="group block overflow-hidden">
                    <img
                      src="https://www.cleanipedia.com/images/00d1hxgfwfa6/3goN74r2fGeXMcEA58kSCi/016e52560652299b1ef53425c26c71f7/Q19waWFfZGVfQ0xQXy1fMl9fN18uanBn/944w-629h/cozinha-de-madeira.jpg"
                      alt=""
                      class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div class="relative bg-white pt-3">
                      <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Cozinha modelo
                      </h3>

                      <p class="mt-2">
                        <span class="sr-only"> Regular Price </span>

                        <span class="tracking-wider text-gray-900"></span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <a href="#" class="group block overflow-hidden">
                  <img
                    src="https://tudenconta.pt/wp-content/uploads/2020/06/armario-cozinha-branco.jpg"
                    alt=""
                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div class="relative bg-white pt-3">
                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Banca{" "}
                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-gray-900"> </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block overflow-hidden">
                  <img
                    src="https://rufermoveis.com.br/wp-content/uploads/armario-de-cozinha-jaspe-carvalho-grafite-salleto-1-e1659617140254.jpg"
                    alt=""
                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div class="relative bg-white pt-3">
                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Armário
                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-gray-900"></span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
