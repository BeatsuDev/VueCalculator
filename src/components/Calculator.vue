<script setup>
import { reactive, ref } from 'vue';
import Button from './Button.vue';
import CalculateButton from './CalculateButton.vue';

var displayingResult = false; // Whether the display is showing a result or an expression
const calculations_history = ref([]);
const display = ref("");

function addDisplay(value) {
    if (displayingResult) {
        if ("0123456789".includes(value)) {
            display.value = value;
        } else {
            display.value += value;
        }
        displayingResult = false;
    } else {
        display.value += value;
    }
}

function calculate() {
    let answer;
    try {
        answer = eval(display.value);
        if (answer == Infinity || answer == -Infinity) throw new Error("Cannot divide by zero.");
        if (answer == NaN) throw new Error("Invalid answer (NaN).");
        calculations_history.value.push({ expression: expression.innerText, answer});
    }
    catch (e) {
        // Extra alert if preferable
        // alert(e.message);
        answer = "Error";
    }

    display.value = answer;
    displayingResult = true;
}


const buttons = ref([
    { value: "C", callback: () => { display.value = ""; }},
    { value: "(", callback: addDisplay },
    { value: ")", callback: addDisplay },
    { value: "/", callback: addDisplay },
    { value: "7", callback: addDisplay },
    { value: "8", callback: addDisplay },
    { value: "9", callback: addDisplay },
    { value: "*", callback: addDisplay },
    { value: "4", callback: addDisplay },
    { value: "5", callback: addDisplay },
    { value: "6", callback: addDisplay },
    { value: "-", callback: addDisplay },
    { value: "1", callback: addDisplay },
    { value: "2", callback: addDisplay },
    { value: "3", callback: addDisplay },
    { value: "+", callback: addDisplay },
    { value: "0", callback: addDisplay },
    { value: ".", callback: addDisplay },
]);
</script>

<template>
    <div id="calculator">
        <div id="display" @click="() => { document.exc(copy); }">
            <span id="expression">{{ display }}</span>
        </div>
        <div id="buttons">
            <Button v-for="button in buttons" :key="button.value" :value="button.value" :callback="button.callback" />
            <CalculateButton value="=" :callback="calculate" />
        </div>
        <div id="history">
            <h3>History</h3>
            <span v-for="(calculation, index) in calculations_history">[{{ index }}] {{ calculation.expression }} = {{ calculation.answer }}<br></span>
        </div>
    </div>
</template>

<style scoped>
    * {
        user-select: none;
    }

    #history * {
        user-select: text;
    }

    #calculator {
        max-width: 700px;
        max-height: 500px;
    }

    #display {
        color: black;
        overflow: hidden;
        background-color: lightgray;
        border-radius: 5px;
        border: 0;
        font-size: 20px;
        padding: 10px;
        margin: 5px;
        line-height: 1.1;
        font-size: 30px;
        height: 30px;
        transition-duration: .2s;
    }

    #display:hover {
        cursor: pointer;
    }

    #buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 2px;
        height: 100%;
    }

    button {
        min-width: 100px;
        min-height: 70px;
    }
</style>
