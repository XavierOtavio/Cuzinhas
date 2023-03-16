import React from "react";

export default function DetailProducts() {
  return (
    <div className="py-50px pt-0">
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://www.ikea.com/pt/pt/images/products/knoxhult-arm-baix-c-portas-e-gaveta-branco__0630760_pe694888_s5.jpg?f=s"
                class="aspect-square w-full rounded-xl object-cover"
              />
            </div>

            <div class="sticky top-0">
              <div class="mt-8 flex justify-between">
                <div class="max-w-[35ch] space-y-2">
                  <h1 class="text-xl font-bold sm:text-2xl">Bancada</h1>

                  <p class="text-sm"></p>
                </div>
              </div>

              <div class="mt-4">
                <div class="prose max-w-none">
                  <p>
                    Está disponivel para montagem com os seguintes materiais:
                    Madeira sólida, laminados madeira veneer, contraplacado,
                    melamínico, marmore e aglomerado{" "}
                  </p>
                </div>
              </div>

              <form class="mt-8">
                <fieldset>
                  <legend class="mb-1 text-sm font-medium">Medidas</legend>

                  <div class="flex flex-wrap gap-1">
                    

                    
                    <label for="color_cb" class="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        class="peer sr-only"
                      />

                      <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Personalizavel
                      </span>
                    </label>
                  </div>
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

                      <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Madeira
                      </span>
                    </label>

                    <label for="color_fr" class="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        class="peer sr-only"
                      />

                      <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Azul
                      </span>
                    </label>

                    <label for="color_cb" class="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        class="peer sr-only"
                      />

                      <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Branco
                      </span>
                    </label>
                  </div>
                </fieldset>

                

                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
