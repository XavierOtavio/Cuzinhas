import React from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Register() {
  return (
    <section class="bg-stone-50">
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
          <Link to="/">
            <button>
              <XMarkIcon className="absolute top-12 left-12 h-8 w-8 text-stone-900" />
            </button>
          </Link>{" "}
          <div class="max-w-xl lg:max-w-3xl">
            <div className="text-left">
              <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Cuzinhas Xavier Otávio
              </h1>
              <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bem-Vindo
              </h1>
            </div>

            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="FirstName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Primeiro Nome
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="LastName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Sobrenome
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

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
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
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
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="PasswordConfirmation"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirmação Password
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  class="mt-1 h-12 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label for="MarketingAccept" class="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span class="text-sm text-gray-700">
                    Desejo receber e-mails sobre eventos, atualizações de
                    produtos e anúncios da empresa.
                  </span>
                </label>
              </div>

              <div class="col-span-6">
                <p class="text-sm text-gray-500">
                  Ao criar uma conta, você concorda com nossos
                  <Link to="#" class="text-gray-700 underline">
                    termos e condições
                  </Link>
                  e
                  <Link to="#" class="text-gray-700 underline">
                    política de privacidade
                  </Link>
                  .
                </p>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button class="ml-2 block border border-red-600 bg-red-600 px-10 py-3 font-medium text-white hover:border-red-600 hover:bg-white hover:text-red-600">
                  Criar Conta
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Já tem um conta?
                  <Link to="/login">
                    <Link to="/login" class="text-gray-700 underline">
                      Log in
                    </Link>
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

export default Register;
