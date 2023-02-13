import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Ref } from 'vue';
import type Calculation from '@/types/Calculation';

export const useCalculationHistoryStore = defineStore('calculationHistory', () => {
  const history: Ref<Calculation[]> = ref([]);

  function addCalculation(calculation: Calculation) {
    history.value.push(calculation);
  }

  return { history, addCalculation }
});
