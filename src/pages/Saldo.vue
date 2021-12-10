<template>
  <div class="page_layout bg-primary column justify-center">
    <div class="row justify-center q-my-xl">
      <span style="font-size: 2rem;font-family: butler;" class="q-px-lg text-center">
        INGRESE SU SALDO ACTUAL
      </span>
    </div>
    <div class="q-mx-xl row justify-center items-center q-mb-xl">
      <div class="round_border row justify-center items-center">
        <q-input
          v-model="cantidad"
          :prefix="moneda"
          style="width: 200px"
          input-class="text-center"
          input-style="font-size: 2rem"
          mask="#.##"
          fill-mask="0"
          reverse-fill-mask
        />
      </div>
    </div>
    <div class="row justify-center">
      <q-btn
        @click="navigate"
        size="xl"
        push
        color="accent"
        label="CONTINUAR"
        text-color="black"
        class="border"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useProcess from "src/components/useProces";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageSelector",
  setup() {
    const process = useProcess();
    const router = useRouter();
    const $q = useQuasar()
    
    const navigate = () => {
      if(+process.cantidad.value <= 0){
       $q.notify({
          message: 'Ingrese un numero valido',
          color: 'negative'
        })
        return
      }

      router.push({
        name: 'tipos'
      })
    }
    
    return {
      moneda: process.moneda,
      cantidad: process.cantidad,
      navigate
    };
  },
});
</script>
