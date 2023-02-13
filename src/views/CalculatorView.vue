<script setup lang="ts">
import SimpleCalculator from '@/components/SimpleCalculator.vue';
import CalculationsHistory from '@/components/CalculationsHistory.vue';

</script>

<template>
  <div class="wrapper">
    <h1>Test out my simple calculator!</h1>
    <SimpleCalculator />
    <CalculationsHistory />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wrapper > h1 {
  text-align: center;
}
</style>