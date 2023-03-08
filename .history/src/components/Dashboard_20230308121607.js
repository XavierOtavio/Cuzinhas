import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* Side Bar */}
      <div className="flex h-screen w-16 flex-col justify-between border-r bg-stone-50">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <img
              alt="user"
              className="rounded-full h-12 w-12"
              src="https://media.licdn.com/dms/image/C5603AQE_OkbaLbh7aQ/profile-displayphoto-shrink_400_400/0/1516468325227?e=1678924800&v=beta&t=gFKj6uj14VT_28wjC24Iq2z5szYOcHMF6ZZyN7cwfvE"
            />
          </div>
          <span class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
            General
          </span>
        </div>
      </div>
    </>
  );
}
