<template>
  <div class="page_layout bg-accent column justify-center">
    <div class="row justify-center q-my-xl">
      <span style="font-size: 2rem;font-family: butler;" class="q-px-lg text-center">
        SELECCIONE EL TIPO DE MONEDA
      </span>
    </div>
    <div class="q-mx-xl column justify-center">
      <div class="text-center q-mb-xl">
        <q-btn
          size="xl"
          push
          color="warning"
          label="S/."
          text-color="black"
          class="border"
          style="width: 200px"
          @click="toNext(1)"
        />
      </div>
      <div class="text-center q-mb-xl">
        <q-btn
          size="xl"
          push
          color="warning"
          label="$"
          text-color="black"
          class="border"
          style="width: 200px"
          @click="toNext(2)"
        />
      </div>
      <div class="text-center q-mb-xl">
        <q-btn
          size="xl"
          push
          color="warning"
          label="€"
          text-color="black"
          class="border"
          style="width: 200px"
          @click="toNext(3)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useRouter } from "vue-router";
import useProcess from "src/components/useProces";

export default defineComponent({
  name: "PageSelector",
  setup() {
    const router = useRouter();
    const process = useProcess();

    const toNext = (value: number) => {
      const values = ["S/.", "$", "€"];
      
      process.setmoneda(values[value - 1]);

      router.push({
        name: "saldo",
      });
    };

    return {
      toNext,
    };
  },
});
</script>
