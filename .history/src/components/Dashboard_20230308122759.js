import React from "react";
import { NavLink } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <>
      {/* Side Bar */}
      <div className="flex h-screen w-16 flex-col justify-between border-r bg-stone-50">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <img
              alt="user"
              className="rounded-lg h-10 w-10"
              src="https://media.licdn.com/dms/image/C5603AQE_OkbaLbh7aQ/profile-displayphoto-shrink_400_400/0/1516468325227?e=1678924800&v=beta&t=gFKj6uj14VT_28wjC24Iq2z5szYOcHMF6ZZyN7cwfvE"
            />
          </div>
          <div className="border-t border-stone-300">
            <nav aria-label="Main" className="flex flex-col p-2">
              <div className="py-4">
                <NavLink to="#">
                  <UserIcon />
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
