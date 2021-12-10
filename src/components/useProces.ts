import { ref, reactive, toRefs } from "@vue/reactivity";
import TipeResult from './item'

const moneda = ref("S/.");
const estudios = ref(0);
const salud = ref(0);
const diversion = ref(0);
const aseo = ref(0);
const ahorros = ref(0);
const alimentos = ref(0);
const transporte = ref(0);
const alquiler = ref(0);
const cantidad = ref("0.00")

export default function (): any {
  const setmoneda = (value: string) => {
    moneda.value = value;
  };

  const getResults = () : TipeResult[] => {
    const results: TipeResult[] = [];

    const _cantidad = parseInt(cantidad.value)

    if(estudios.value > 0) {
        results.push({
            color : "warning",
            name : "ESTUDIOS",
            value : parseInt((_cantidad * (estudios.value / 100)).toFixed(2))
        })
    }

    if(salud.value > 0) {
        results.push({
            color : "accent",
            name : "SALUD",
            value : parseInt((_cantidad * (salud.value / 100)).toFixed(2))
        })
    }

    if(diversion.value > 0) {
        results.push({
            color : "primary",
            name : "DIVERSION",
            value : parseInt((_cantidad * (diversion.value / 100)).toFixed(2))
        })
    }

    if(aseo.value > 0) {
        results.push({
            color : "warning",
            name : "ASEO",
            value : parseInt((_cantidad * (aseo.value / 100)).toFixed(2))
        })
    }

    if(ahorros.value > 0) {
        results.push({
            color : "negative",
            name : "ahorros",
            value : parseInt((_cantidad * (ahorros.value / 100)).toFixed(2))
        })
    }

    if(alimentos.value > 0) {
        results.push({
            color : "accent",
            name : "ALIMENTOS",
            value : parseInt((_cantidad * (alimentos.value / 100)).toFixed(2))
        })
    }

    if(transporte.value > 0) {
        results.push({
            color : "secondary",
            name : "transporte",
            value : parseInt((_cantidad * (transporte.value / 100)).toFixed(2))
        })
    }

    if(alquiler.value > 0) {
        results.push({
            color : "warning",
            name : "alquiler",
            value : parseInt((_cantidad * (alquiler.value / 100)).toFixed(2))
        })
    }

    return results
  }


  const reset = () => {
    estudios.value = 0;
    salud.value = 0;
    diversion.value = 0;
    aseo.value = 0;
    ahorros.value = 0;
    alimentos.value = 0;
    transporte.value = 0;
    alquiler.value = 0;
    cantidad.value = "0.00";
  }

  return {
    moneda,
    cantidad,
    setmoneda,
    estudios,
    salud,
    diversion,
    aseo,
    ahorros,
    alimentos,
    transporte,
    alquiler,
    getResults,
    reset
  };
}
