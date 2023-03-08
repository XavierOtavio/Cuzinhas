import React from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/solid";

export default function Dashboard() {
  return (
    <div className="absolute top-0 left-0 ml-32">
      <h2>Dashboard</h2>
      <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
        <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
          <ArrowTrendingUpIcon className="h-4 w-4" />
          <span class="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong class="block text-sm font-medium text-gray-500">
            {" "}
            Profit{" "}
          </strong>

          <p>
            <span class="text-2xl font-medium text-gray-900"> $404.32 </span>

            <span class="text-xs text-gray-500"> from $240.94 </span>
          </p>
        </div>
      </article>

      <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
        <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>

          <span class="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong class="block text-sm font-medium text-gray-500">
            {" "}
            Profit{" "}
          </strong>

          <p>
            <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

            <span class="text-xs text-gray-500"> from $404.32 </span>
          </p>
        </div>
      </article>
    </div>
  );
}
