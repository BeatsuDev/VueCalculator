import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Ref } from 'vue';

export const useCalculationHistoryStore = defineStore('calculationHistory', () => {
  const history: Ref<string[]> = ref([]);

  function addCalculation(calculation: string) {
    history.value.push(calculation);
  }

  return { history, addCalculation }
});
