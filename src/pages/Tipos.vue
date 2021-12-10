<template>
  <div class="page_layout bg-negative column items-center justify-around" style="max-height: 100vh">
    <div class="row justify-center q-my-lg">
      <span
        style="font-size: 2rem; font-family: butler"
        class="q-px-lg text-center"
      >
        ESPECIFICAR TIPO DE GASTOS
      </span>
    </div>

    <q-scroll-area
      style="height: 40vh; width: 98vw; max-width: 98vw"
      class="q-mb-lg"
      visible
    >
      <div class="row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn
            flat
            color="white"
            label="Estudios"
            stack
            icon="school"
            style="width: 100%"
          />
        </div>
        <div class="col-6">
          <q-slider v-model="estudios" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ estudios }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn
            flat
            color="white"
            label="Salud"
            stack
            icon="health_and_safety"
            style="width: 100%"
          />
        </div>
        <div class="col-6">
          <q-slider v-model="salud" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ salud }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn
            flat
            color="white"
            label="Diversion"
            stack
            icon="celebration"
          />
        </div>
        <div class="col-6">
          <q-slider v-model="diversion" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ diversion }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn flat color="white" label="Aseo" stack icon="bathtub" />
        </div>
        <div class="col-6">
          <q-slider v-model="aseo" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ aseo }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn flat color="white" label="Ahorros" stack icon="savings" />
        </div>
        <div class="col-6">
          <q-slider v-model="ahorros" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ ahorros }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn
            flat
            color="white"
            label="Alimentos"
            stack
            icon="local_dining"
          />
        </div>
        <div class="col-6">
          <q-slider v-model="alimentos" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ alimentos }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn
            flat
            color="white"
            label="Transporte"
            stack
            icon="directions_bus_filled"
          />
        </div>
        <div class="col-6">
          <q-slider v-model="transporte" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ transporte }} %
        </div>
      </div>
      <div class="q-mx-sm row items-center q-mb-md">
        <div class="col-4 text-center">
          <q-btn flat color="white" label="Alquiler" stack icon="home" />
        </div>
        <div class="col-6">
          <q-slider v-model="alquiler" :min="0" :max="100" color="black" />
        </div>
        <div class="col-2 text-right" style="font-size: 1.2rem">
          {{ alquiler }} %
        </div>
      </div>
    </q-scroll-area>

    <div style="width: 90vw" class="row">
      <p class="q-mb-none" style="font-size: 1.5rem">Total: {{ total }} %</p>
      <q-slider
        v-model="total"
        :min="0"
        :max="100"
        :color="total > 100 ? 'info' : 'primary'"
        readonly
      />
    </div>

    <div class="row justify-center">
      <q-btn
        @click="navigate"
        size="xl"
        push
        color="warning"
        label="COMENZAR A CALCULAR"
        text-color="black"
        class="border"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, onMounted, onUnmounted } from "vue";
import useProcess from "src/components/useProces";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageSelector",
  setup() {
    const {
      estudios,
      salud,
      diversion,
      aseo,
      ahorros,
      alimentos,
      transporte,
      alquiler,
    } = useProcess();
    const number = ref(0.0);
    const total = ref(0.0);
    const standart = ref(0.0);
    const router = useRouter();
    const $q = useQuasar();

    let interval: NodeJS.Timeout;

    onMounted(() => {
      interval = setInterval(() => {
        total.value =
          estudios.value +
          salud.value +
          diversion.value +
          aseo.value +
          ahorros.value +
          alimentos.value +
          transporte.value +
          alquiler.value;
      }, 50);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    const navigate = () => {
      if (+total.value != 100) {
        $q.notify({
          message: "Debe sumar un 100% en total",
          color: "info",
        });
        return;
      }

      router.push({
        name: "load",
      });
    };

    return {
      number,
      standart,
      estudios,
      salud,
      diversion,
      aseo,
      ahorros,
      alimentos,
      transporte,
      alquiler,
      total,
      navigate,
    };
  },
});
</script>
