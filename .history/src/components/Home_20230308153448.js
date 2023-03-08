function Home() {
  return (
    <div>
      <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-stone-50/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-700">
                Forever Home.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div class="bg-white">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <h2 class="text-base font-semibold text-rose-600 tracking-wide uppercase">
                Trusted by over 26,000 homes
              </h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                A better way to spend money
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div class="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Cozinhas
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" class="block group">
                    <img
                      src="https://www.gower-furniture.co.uk/wp-content/uploads/2021/05/Capri-Dark-Grey.jpg"
                      alt=""
                      class="object-cover w-full rounded aspect-square"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Deluxe
                      </h3>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="block group">
                    <img
                      src="https://www.eshoper.in/wp-content/uploads/2021/12/best-kitchen-furniture-latest-design-low-price-furnitures-store-panvel-kamothe-navi-mumbai.jpg"
                      alt=""
                      class="object-cover w-full rounded aspect-square"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Cozinha Cerâmica
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
