<script setup lang="ts">
import { useCalculationHistoryStore } from '@/stores/calculationHistory';

const calculationHistory = useCalculationHistoryStore().history;
</script>

<template>
  <div class="wrapper">
    <p v-for="calculation in calculationHistory">{{ calculation.task }} = {{ calculation.answer }}</p>
  </div>
</template>

<style scoped>

</style>