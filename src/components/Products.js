import { he } from "date-fns/locale";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Products() {
  const [price, setPrice] = useState(3600);
  var width;
  var height;
  var quantity;

  const handleClick = (event) => {
    switch (event.target.id) {
      case "escura":
        setPrice(width * height * 0.03);
        break;
      case "clara":
        setPrice(width * height * 0.03 + 150);
        break;
      case "branca":
        setPrice(width * height * 0.03 + 300);
        break;
    }
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case "width":
        setPrice(event.target.value * height * 0.03);
        break;
      case "height":
        setPrice(event.target.value * width * 0.03);
        break;
      case "quantity":
        setPrice(event.target.value * width * height * 0.03);
        break;
      default:
        setPrice(price);
    }
  };

  useEffect(() => {
    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
  }, [handleChange]);

  return (
    <div className="pt-24">
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://www.cleanipedia.com/images/00d1hxgfwfa6/3goN74r2fGeXMcEA58kSCi/016e52560652299b1ef53425c26c71f7/Q19waWFfZGVfQ0xQXy1fMl9fN18uanBn/944w-629h/cozinha-de-madeira.jpg"
                class="aspect-square w-full rounded-xl object-cover"
              />

              <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src="https://www.homa.pt/dw/image/v2/BFDH_PRD/on/demandware.static/-/Sites-homa-catalog/default/dwffd6dc1e/images/large/441231_movel_de_apoio_em_bambu_com_3_cestos_homa_1.jpg?sw=1020&sh=1020&sm=fit"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://product-hub-prd.madeiramadeira.com.br/711515/images/a56513c8-6cc6-46f2-ada7-54455785e859moveismpo1653419316200zoom.jpg"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://www.bvmagazine.com.br/media/catalog/product/cache/8b9a8a1271119b77f7d4e69afa08959b/b/a/balc_o_de_pia__bv_4__4.jpeg"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://www.madersilva.com.br/porteiras-de-madeira/imagens/moveis-madeira-cozinha-precos.jpg"
                  class="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div class="sticky top-0">
              <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pré encomenda
              </strong>

              <div class="mt-8 flex justify-between">
                <div class="max-w-[35ch] space-y-2">
                  <h1 class="text-xl font-bold sm:text-2xl">
                    Cozinha modelo personalizavel
                  </h1>

                  <p class="text-sm"></p>

                  <div class="-ml-0.5 flex">
                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      class="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p class="text-lg font-bold">{price}€</p>
              </div>

              <div class="mt-4">
                <div class="prose max-w-none">
                  <p>
                    Aqui podera pesonalizar a sua cozinha atravez de uma cozinha
                    modelo! Desta maneira consegue adaptar os moveis ao seu
                    espaço e escolher como vai ficar a sua disposição para
                    melhor satisfazer as suas necessidades e as da sua casa.{" "}
                  </p>
                </div>

                <button class="mt-2 text-sm font-medium underline">
                  Ler mais
                </button>
              </div>

              <form class="mt-8">
                <fieldset>
                  <legend class="mb-1 text-sm font-medium">Medidas</legend>
                  <span class="text-sm text-gray-500">
                    <label for="height">Comprimento: </label>
                    <input
                      type="number"
                      name="width"
                      id="width"
                      min="0"
                      value={width}
                      defaultValue="400"
                      className="mt-1 h-9 w-32 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-sm"
                      onChange={handleChange}
                    />{" "}
                    cm
                  </span>
                </fieldset>
                <fieldset class="text-sm text-gray-500">
                  <label for="height" className="">
                    Largura:{" "}
                  </label>
                  <input
                    type="number"
                    name="height"
                    id="height"
                    min="0"
                    value={height}
                    defaultValue="300"
                    className="mt-1 h-9 w-32 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-sm"
                    onChange={handleChange}
                  />{" "}
                  cm
                </fieldset>
                <fieldset>
                  <legend class="mb-1 text-sm font-medium">Cor</legend>

                  <div class="flex flex-wrap gap-1">
                    <label for="color_tt" class="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        class="peer sr-only"
                      />

                      <span
                        class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        id="escura"
                        onClick={handleClick}
                      >
                        Escura
                      </span>
                    </label>

                    <label for="color_fr" class="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        class="peer sr-only"
                      />

                      <span
                        class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        id="clara"
                        onClick={handleClick}
                      >
                        Clara
                      </span>
                    </label>

                    <label for="color_cb" class="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        class="peer sr-only"
                      />

                      <span
                        class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                        id="branca"
                        onClick={handleClick}
                      >
                        Branco
                      </span>
                    </label>
                  </div>
                </fieldset>

                <fieldset class="mt-4">
                  <legend class="mb-1 text-sm font-medium">
                    Tipo de cozinha
                  </legend>

                  <div class="flex flex-wrap gap-1">
                    <label for="size_xs" class="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        class="peer sr-only"
                      />

                      <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        U
                      </span>
                    </label>

                    <label for="size_s" class="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        class="peer sr-only"
                      />

                      <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        L
                      </span>
                    </label>

                    <label for="size_m" class="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        class="peer sr-only"
                      />

                      <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        G
                      </span>
                    </label>

                    <label for="size_l" class="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        class="peer sr-only"
                      />

                      <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Ilha
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div class="mt-8 flex gap-4">
                  <div>
                    <label for="quantity" class="">
                      Quantidade{" "}
                    </label>
                    <input
                      type="number"
                      name="width"
                      id="quantity"
                      min="1"
                      value={quantity}
                      defaultValue="1"
                      className="mt-1 h-9 w-16 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    class="block rounded bg-red-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Encomendar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
