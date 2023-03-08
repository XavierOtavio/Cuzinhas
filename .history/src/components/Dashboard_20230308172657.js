import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="absolute top-0 left-0 ml-32">
        <button class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
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
        </button>

        <button class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <ArrowTrendingDownIcon className="h-4 w-4" />

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
        </button>
      </div>
    </div>
  );
}
