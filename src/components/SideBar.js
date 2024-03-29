import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  CubeIcon,
  TruckIcon,
  UserGroupIcon,
  CogIcon,
  ListBulletIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

export default function SideBar() {
  const location = useLocation();
  return (
    <div className="absolute inset-y-0 left-0 z-10 w-16 bg-stone-50 shadow-sm">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <Link
            to="profile"
            className="group relative flex justify-center rounded"
          >
            <img
              alt="user"
              className="h-10 w-10 rounded-lg"
              src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
            />
            <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded bg-stone-900 px-2 py-1.5 text-left text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
              Perfil <p className="font-light">Xavier Otávio</p>
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
                to="/dashboard/employees"
                className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                  location.pathname === "/dashboard/employees"
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
                to="/dashboard/orders"
                className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                  location.pathname === "/dashboard/orders"
                    ? "bg-stone-900 text-stone-50"
                    : "bg-stone-50 text-stone-900"
                }`}
              >
                <TruckIcon className="h-6 w-6" />
                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                  Encomendas
                </span>
              </Link>
            </div>
            <div className="py-4">
              <Link
                to="/dashboard/stock"
                className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                  location.pathname === "/dashboard/stock"
                    ? "bg-stone-900 text-stone-50"
                    : "bg-stone-50 text-stone-900"
                }`}
              >
                <CubeIcon className="h-6 w-6" />
                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                  Matérias-primas
                </span>
              </Link>
            </div>
            <div className="py-4">
              <Link
                to="/dashboard/manproducts"
                className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                  location.pathname === "/dashboard/manproducts"
                    ? "bg-stone-900 text-stone-50"
                    : "bg-stone-50 text-stone-900"
                }`}
              >
                <ListBulletIcon className="h-6 w-6" />
                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                  Lista de Produtos
                </span>
              </Link>
            </div>
            <div className="py-4">
              <Link
                to="/dashboard/machineslist"
                className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                  location.pathname === "/dashboard/machineslist"
                    ? "bg-stone-900 text-stone-50"
                    : "bg-stone-50 text-stone-900"
                }`}
              >
                <CogIcon className="h-6 w-6" />
                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                  Máquinas
                </span>
              </Link>
            </div>
            <div className="py-4">
              <Link
                to="/dashboard/productionmanagement"
                className={`group relative flex  justify-center rounded  px-2 py-1.5  ${
                  location.pathname === "/dashboard/productionmanagement"
                    ? "bg-stone-900 text-stone-50"
                    : "bg-stone-50 text-stone-900"
                }`}
              >
                <TableCellsIcon className="h-6 w-6" />
                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                  Gestão de Produção
                </span>
              </Link>
            </div>
            <div className="absolute bottom-0 py-4">
              <Link
                to="/"
                className="group relative flex  justify-center rounded bg-stone-50 px-2 py-1.5 text-stone-900"
              >
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-stone-900 px-2 py-1.5 text-xs font-medium text-stone-50 opacity-0 group-hover:opacity-100">
                  Sair
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
