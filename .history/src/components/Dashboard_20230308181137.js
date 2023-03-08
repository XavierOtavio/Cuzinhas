import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="absolute top-0 left-0 right-0 ml-32">
      <h2 classname="w-full">Dashboard</h2>
      <div classname="grid grid-cols-12">
        <button class="flex flex-col col-start-1 col-end-3 rounded-lg border border-gray-100 bg-white p-6 w-full my-3">
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span class="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <h1 class="block text-left text-2xl font-medium text-gray-500">
              Lucro
            </h1>
            <p>
              <span class="text-2xl font-medium text-gray-900"> $404.32 </span>
            </p>
          </div>
        </button>

        <button class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 w-3/12 my-3">
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
