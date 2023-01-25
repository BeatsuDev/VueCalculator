<script setup>
import Calculator from './components/Calculator.vue'
</script>

<template>
  <header>
    <h1>Calculator</h1>
  </header>
  <div id="calculator-area">
      <Calculator />
  </div>
</template>

<style scoped>
#calculator-area {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
