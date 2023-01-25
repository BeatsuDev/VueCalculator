<script setup>
import { calculations_history } from '../store.js';
</script>

<template>
    <div id="history">
        <h3>History</h3>
        <span v-for="(calculation, index) in calculations_history">[{{ index }}] {{ calculation.expression }} = {{ calculation.answer }}<br></span>
    </div>
</template>

<style scoped>
</style>
