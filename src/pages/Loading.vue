<template>
  <div class="page_layout bg-warning column justify-around">
    <div class="row justify-center">
      <q-img width="200px" src="../assets/icon.png" spinner-color="white" />
    </div>
    <div class="row justify-center">
      <q-spinner-ios color="black" size="5em" />
    </div>
    <div class="row justify-center">
      <span class="q-mx-lg q-px-lg" style="font-size: 1.5rem">
        CARGANDO...
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageLoad",
  setup() {
    const router = useRouter();
    onMounted(() => {
      setTimeout(() => {
        router.push({ name: "final" });
      }, 1000);
    });

    return {};
  },
});
</script>
