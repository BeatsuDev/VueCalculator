<script setup>
import Calculator from './components/Calculator.vue'
import History from './components/History.vue'
</script>

<template>
  <header>
    <h1>Calculator</h1>
  </header>
  <div id="calculator-area">
      <Calculator :history="calculations_history"/>
      <History :history="calculations_history"/>
  </div>
</template>

<style scoped>
#calculator-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 500px;
}
</style>
