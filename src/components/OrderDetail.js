import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.data;

  console.log(location, " useLocation Hook");

  return (
    <>
      <div className="absolute left-32 right-16 top-0 bottom-16 ">
        <div className="inline-flex h-16 w-full items-center justify-start gap-4 align-baseline">
          <ArrowLeftCircleIcon
            className="h-8 w-8"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-2xl font-bold">Order ID: {order?.id}</h1>
        </div>
        <div className="absolute grid h-full w-full grid-cols-12 grid-rows-6">
          <div className="col-span-4 row-span-3 m-2 rounded-lg bg-red-500">
            <p className="relative h-full text-center text-white">
              Client Details
            </p>
          </div>
          <div className="col-span-8 row-span-3 m-2 rounded-lg bg-green-500">
            <p className="relative h-full text-center text-white">
              Order Details
            </p>
          </div>
          <div className="col-span-12 row-span-3 m-2 rounded-lg bg-blue-500">
            <p className="relative h-full text-center text-white">
              Order Status History
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
