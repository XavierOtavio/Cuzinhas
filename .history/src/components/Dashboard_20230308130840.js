import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChartBarIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  const location = useLocation();
  return (
    <>
      {/* Side Bar */}
      <div className="flex h-screen w-16 flex-col justify-between border-r bg-stone-50">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <Link
              to="/profile"
              className="group relative flex justify-center rounded"
            >
              <img
                alt="user"
                className="rounded-lg h-10 w-10"
                src="https://media.licdn.com/dms/image/C5603AQE_OkbaLbh7aQ/profile-displayphoto-shrink_400_400/0/1516468325227?e=1678924800&v=beta&t=gFKj6uj14VT_28wjC24Iq2z5szYOcHMF6ZZyN7cwfvE"
              />
              <span className="absolute left-full text-left whitespace-nowrap top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                Profile <p className="font-light">Xavier Otávio</p>
              </span>
            </Link>
          </div>
          <div className="border-t border-stone-300">
            <nav aria-label="Main" className="flex flex-col p-2">
              <div className="py-4">
                <Link
                  to="/dashboard"
                  className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                    location.pathname === "/dashboard"
                      ? "bg-stone-900 text-stone-50"
                      : "bg-stone-50 text-stone-900"
                  }`}
                >
                  <ChartBarIcon className="h-6 w-6" />
                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </Link>
              </div>
              <div className="py-4">
                <Link
                  to="/dashboard"
                  className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                    location.pathname === "/employees"
                      ? "bg-stone-900 text-stone-50"
                      : "bg-stone-50 text-stone-900"
                  }`}
                >
                  <UserGroupIcon className="h-6 w-6" />
                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                    Empregados
                  </span>
                </Link>
              </div>
              <div className="py-4">
                <Link
                  to="/dashboard"
                  className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                    location.pathname === "/orders"
                      ? "bg-stone-900 text-stone-50"
                      : "bg-stone-50 text-stone-900"
                  }`}
                >
                  <ChartBarIcon className="h-6 w-6" />
                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </Link>
              </div>
              <div className="py-4">
                <Link
                  to="/dashboard"
                  className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                    location.pathname === "/dashboard"
                      ? "bg-stone-900 text-stone-50"
                      : "bg-stone-50 text-stone-900"
                  }`}
                >
                  <ChartBarIcon className="h-6 w-6" />
                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </Link>
              </div>
              <div className="py-4 bottom-0 absolute">
                <Link
                  to="#"
                  className="group relative flex  justify-center rounded bg-stone-50 px-2 py-1.5 text-stone-900 active:bg-stone-900 active:text-stone-50"
                >
                  <ChartBarIcon className="h-6 w-6" />
                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
