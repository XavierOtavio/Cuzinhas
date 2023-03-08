import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <>
      {/* Side Bar */}
      <div className="flex h-screen w-16 flex-col justify-between border-r bg-stone-50">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <Link
              to="#"
              className="group relative flex  justify-center rounded"
            >
              <img
                alt="user"
                className="rounded-lg h-10 w-10"
                src="https://media.licdn.com/dms/image/C5603AQE_OkbaLbh7aQ/profile-displayphoto-shrink_400_400/0/1516468325227?e=1678924800&v=beta&t=gFKj6uj14VT_28wjC24Iq2z5szYOcHMF6ZZyN7cwfvE"
              />
              <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                Profile
                <p className="font-extralight">Xavier Otávio</p>
              </span>
            </Link>
          </div>
          <div className="border-t border-stone-300">
            <nav aria-label="Main" className="flex flex-col p-2">
              <div className="py-4">
                <NavLink
                  to="#"
                  className="group relative flex  justify-center rounded bg-stone-900 px-2 py-1.5 text-stone-50"
                >
                  <ChartBarIcon className="h-6 w-6" />
                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                    Dashboard
                  </span>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
