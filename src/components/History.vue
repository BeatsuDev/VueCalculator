<script setup>
import { calculations_history } from '../store.js';
</script>

<template>
    <div id="history">
        <h1>History</h1>
        <span v-for="(calculation, index) in calculations_history">[{{ index }}] {{ calculation.expression }} = {{ calculation.answer }}<br></span>
    </div>
</template>

<style scoped>
#history {
    border: 3px solid black;
    background-color: rgba(250, 250, 250, 0.2);
    padding: 10px;
    margin: 0 15px;
    overflow-y: scroll;
}

@media (max-width: 850px) {
    #history {
        max-width: calc(700px - 25px - 25px - 3px - 3px);
    }
}

h1 {
    text-align: center;
    font-size: calc(1rem + 2vw);
}

/* Style the scrollbar */
#history::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: calc(rgba(250, 250, 250, 0.2) + var(--color-coquelicot));
}

::-webkit-scrollbar-thumb {
    background: var(--color-coquelicot);
    border-radius: 5px;
}
</style>
