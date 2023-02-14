<script setup lang="ts">
import { useCalculationHistoryStore } from '@/stores/calculationHistory';

const calculationHistory = useCalculationHistoryStore().history;
</script>

<template>
  <div class="wrapper">
    <h2>History</h2>
    <p v-for="calculation in calculationHistory">{{ calculation.task }} = {{ calculation.answer }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 320px;
  min-width: 320px;
  justify-content: flex-start !important;
  border-radius: 5px;
  box-shadow: 15px 15px 10px black,
              0 0 15px black;
  margin-top: 20px;
}

h2 {
  margin: 10px auto;
  border-bottom: 2px solid var(--vt-c-vue-green);
  width: 50%;
  text-align: center;
}

p {
  border-bottom: 2px solid var(--vt-c-divider-dark-2);
  text-align: center;
  width: 90%;
  margin: 5px auto 0 auto;
  padding-bottom: 5px;
}
</style>