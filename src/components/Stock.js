import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Stock() {
  const [stock, setStock] = useState(null);
  const changeStock = (material) => {
    if (stock === null || stock !== material) {
      setStock(material);
    } else {
      setStock(null);
    }
  };
  return (
    <div className="absolute left-32 right-16 inset-y-16 grid grid-cols-12 grid-rows-6">
      <div className="col-span-5 row-span-6 bg-stone-50 rounded-lg shadow-lg p-4 overflow-y-scroll cursor-pointer">
        <div
          onClick={() => changeStock("solidWood")}
          className="m-2 flex flex-col justify-between rounded-sm shadow-xl transition-shadow hover:shadow-lg  bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Madeira Sólida
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock atual(kg): 354 <br />
                Stock recomendado(kg): 1000 <br />
                Stock Obrigatório(kg): 500
              </p>
            </div>
          </div>
          <div>
            <div className="text-sm mt-8 font-medium uppercase text-red-500 align-baseline inline-flex">
              <ExclamationTriangleIcon className="h-6 w-6 " />
              <p className="ml-2">Stock baixo</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("laminates")}
          className="m-2 flex flex-col justify-between rounded-sm shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Laminados
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock atual(kg): 1354 <br />
                Stock recomendado(kg): 800 <br />
                Stock Obrigatório(kg): 343
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("woodVeneers")}
          className="m-2 flex flex-col justify-between rounded-sm shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Madeira Veneer
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock recomendado(kg): 100 <br />
                Stock atual(kg): 98 <br />
                Stock Obrigatório(kg): 37
              </p>
            </div>
          </div>
          <div>
            <div className="text-sm mt-8 font-medium uppercase text-red-500 align-baseline inline-flex">
              <ExclamationTriangleIcon className="h-6 w-6 " />
              <p className="ml-2">Stock baixo</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("pvc")}
          className="m-2 flex flex-col justify-between rounded-sm shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              PVC
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock recomendado(kg): 1000 <br />
                Stock atual(kg): 354 <br />
                Stock Obrigatório(kg): 500
              </p>
            </div>
          </div>
          <div>
            <div className="text-sm mt-8 font-medium uppercase text-red-500 align-baseline inline-flex">
              <ExclamationTriangleIcon className="h-6 w-6 " />
              <p className="ml-2">Stock baixo</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => changeStock("aluminium")}
          className="m-2 flex flex-col justify-between rounded-sm shadow-xl transition-shadow hover:shadow-lg bg-stone-200 p-4 sm:p-6 lg:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-indigo-600 sm:text-3xl">
              Alumínio
            </h3>
            <div className="mt-4 border-t-2 border-stone-100 pt-4">
              <p className="text-sm font-medium uppercase text-stone-500 whitespace-pre-wrap">
                Stock recomendado(kg): 1000 <br />
                Stock atual(kg): 354 <br />
                Stock Obrigatório(kg): 500
              </p>
            </div>
          </div>
          <div>
            <div className="text-sm mt-8 font-medium uppercase text-red-500 align-baseline inline-flex">
              <ExclamationTriangleIcon className="h-6 w-6 " />
              <p className="ml-2">Stock baixo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7 row-span-6 bg-stone-50 rounded-lg shadow-lg p-4">
        <h1>{stock === null ? "NULL" : stock}</h1>
      </div>
    </div>
  );
}
