import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="absolute inset-0 ml-32 m-y-16 grid grid-cols-12 grid-rows-6">
      <div classname="">
        {/* <div className="row-start-2 row-end-3 col-start-6 col-end-9 bg-green-600">
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
                <span class="text-2xl font-medium text-gray-900">
                  {" "}
                  $240.94{" "}
                </span>
              </p>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
}
