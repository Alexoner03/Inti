<template>
  <div class="page_layout bg-primary column items-center" ref="domd">
    <q-scroll-area
      style="height: 100vh; width: 90vw; max-width: 90vw"
      class="q-mb-lg"
      visible
    >
      <div class="row justify-center q-my-xl">
        <span style="font-size: 2rem; font-family: butler;" class="q-px-lg text-center">
          RESULTADOS <br />
          Total : {{ moneda }} {{ cantidad }}
        </span>
      </div>

      <div class="flex q-mb-lg" v-for="(item, index) in results" :key="index">
       <q-btn
          :color="item.color"
          :label="`${item.name}: ${moneda} ${item.value}`"
          class="full-width"
          text-color="black border"
          style="border-radius: 15px"
          size="xl"
        />
      </div>

      <div class="row justify-center">
        <q-btn
          :to="{ name: 'index' }"
          size="xl"
          label="VOLVER AL INICIO"
          text-color="black"
          flat
        />
        <!-- <q-btn
          @click="share"
          size="xl"
          label="compartir"
          text-color="black"
          flat
        /> -->
      </div>
    </q-scroll-area>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import useProcess from "src/components/useProces";
import TipeResult from "src/components/item";
import { useRouter } from "vue-router";
import { Share } from "@capacitor/share";

import domToImage from "dom-to-image-more";

export default defineComponent({
  name: "PageFinal",
  setup() {
    const { getResults, moneda, cantidad } = useProcess();
    const domd = ref(null);
    const results = ref<TipeResult[]>(getResults());

    const share = () => {
      domToImage
        .toPng(domd.value as unknown as Node)
        .then(async (daturl: any) => {
          await Share.share({
            title: "See cool stduff",
            text: "Really awesome thing you need to see right meow",
            url: "http://ionicframewosrk.com/",
            dialogTitle: "Share with buddiess",
          });
        })
        .catch((error: any) => {
          console.error("oops, swomething went wrong!", error);
        });
    };
    return {
      moneda,
      results,
      cantidad,
      share,
      domd,
    };
  },
});
</script>
