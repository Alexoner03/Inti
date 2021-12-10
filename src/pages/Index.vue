<template>
  <div class="page_layout bg-warning column justify-around">
    <div class="row justify-center">
      <span class="chip_main" style="font-family: butler;"> ¡ HOLA SOY INTI ! </span>
    </div>
    <div class="row justify-center">
      <q-img
        width="200px"
        src="../assets/icon.png"
        spinner-color="white"
      />
    </div>
    <div class="row justify-center">
      <span class="q-mx-lg q-px-lg" style="font-size:1.5rem; font-family: quick;">
        Tu nuevo asesor que te ayudará a administrar bien tu dinero...
      </span>
    </div>

    <div class="row justify-center">
      <q-btn
      :to="{name : 'selector'}"
      size="xl"
        push
        color="accent"
        label="Empezar"
        text-color="black"
        class="border"
         style="font-family: quick;"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useProcess from 'src/components/useProces'
export default defineComponent({
  name: "PageIndex",
  mounted(){
    const process = useProcess();
    process.reset()
  }
});
</script>
