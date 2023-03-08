import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section class="bg-slate-50">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://www.ikea.com/images/5a/20/5a203f990f69e8aa551633548db4aa60.jpg?f=sg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div class="max-w-xl lg:max-w-3xl">
            <a class="block text-blue-600" href="/">
              <span class="sr-only">Home</span>
            </a>
            <div className="text-left">
              <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Cuzinhas Xavier Otávio
              </h1>
              <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bem-Vindo
              </h1>
            </div>

            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-6">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full h-12 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button class="block border hover:border-red-600 hover:bg-white px-10 py-3 hover:text-red-600 ml-2 font-medium border-red-600 bg-red-600 text-white">
                  Login
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Ainda não tem conta?
                  <Link to="/register">
                    <a href="#" class="text-gray-700 underline">
                      Criar Conta
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
