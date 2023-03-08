import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="absolute inset-0 mx-32 my-16 grid grid-cols-12 grid-rows-6 gap-2">
      <div className="row-start-1 row-end-2 col-start-1 col-end-5">
        <button class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4">
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong class="block text-left text-2xl font-medium text-gray-500">
              Lucro
            </strong>
            <p>
              <span class="text-2xl font-medium text-gray-900">
                {" "}
                8 500.94€{" "}
              </span>
            </p>
          </div>
        </button>
      </div>
      <div className="row-start-2 row-end-3 col-start-1 col-end-5">
        <button class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4">
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong class="block text-left text-2xl font-medium text-gray-500">
              Vendas
            </strong>
            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
            </p>
          </div>
        </button>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-5">
        <button class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white w-full h-full p-4">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <ArrowTrendingDownIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong class="block text-left text-2xl font-medium text-gray-500">
              Despesas
            </strong>
            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
