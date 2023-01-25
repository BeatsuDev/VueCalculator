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
    display: flex;
    height: 500px;
    padding: 40px;
}

#calculator-area > * {
    flex: 1;
}

header {
    background-color: var(--color-wintergreen-dream);
    text-align: center;
    height: calc(1rem + 5vw + 10vw);
}

h1 {
    margin: 0;
    font-size: calc(1rem + 5vw);
    padding: 5vw;
    line-height: calc(1rem + 5vw);
}

@media (max-width: 850px) {
    #calculator-area {
        flex-direction: column;
        height: 1000px;
    }
}
</style>
