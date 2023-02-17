<script setup lang="ts">
import { useCalculationHistoryStore } from '@/stores/calculationHistory';
import { ref } from 'vue';

const display = ref<HTMLElement | null>(null);

var lastClickedWasSum = false;

function addSymbol(event: MouseEvent) {
  if (!event.target) return;
  if (!(event.target instanceof HTMLElement)) return;
  // Reset the display when a button is pressed IF:
  // 1. The display is currently showing an error
  // 2. The last button pressed was a sum button AND the current button is a number
  if (display.value!.innerHTML === 'Error' || (lastClickedWasSum && /^\d+$/.test(event.target.innerHTML))) {
    display.value!.innerHTML = '';
  }
  lastClickedWasSum = false;
  display.value!.innerHTML += event.target.innerHTML;
}

function calculate() {
  // Replace ^ with **
  let unchangedTask = display.value!.innerHTML;
  let toCalculate = display.value!.innerHTML.replace('^', '**');
  let answer;
  
  // If there are only numbers, don't try to calculate
  if (/^\d+$/.test(toCalculate)) {
    return;
  }
  try {
    answer = eval(toCalculate);
  } catch {
    display.value!.innerHTML = 'Error';
    return;
  }

  // Check if answer is valid
  if (isNaN(answer) || !isFinite(answer)) {
    display.value!.innerHTML = 'Error';
    return;
  }

  // Set the display to show the answer
  display.value!.innerHTML = answer;
  lastClickedWasSum = true;

  // Add to history
  useCalculationHistoryStore().addCalculation({
    task: unchangedTask,
    answer: answer.toString(),
  });
}

function clear() {
  display.value!.innerHTML = '';
}
</script>

<template>
  <main>
    <div id="display" ref="display">{{ display?.innerHTML }}</div>
    <div id="buttons">
      <div @click="addSymbol" class="button">(</div>
      <div @click="addSymbol" class="button">)</div>
      <div @click="addSymbol" class="button">^</div>
      <div @click="addSymbol" class="button">*</div>
      <div @click="addSymbol" class="button number">7</div>
      <div @click="addSymbol" class="button number">8</div>
      <div @click="addSymbol" class="button number">9</div>
      <div @click="addSymbol" class="button">/</div>
      <div @click="addSymbol" class="button number">4</div>
      <div @click="addSymbol" class="button number">5</div>
      <div @click="addSymbol" class="button number">6</div>
      <div @click="addSymbol" class="button">+</div>
      <div @click="addSymbol" class="button number">1</div>
      <div @click="addSymbol" class="button number">2</div>
      <div @click="addSymbol" class="button number">3</div>
      <div @click="addSymbol" class="button">-</div>
      <div @click="clear" class="button">cls</div>
      <div @click="addSymbol" class="button number">0</div>
      <div @click="calculate" class="button" id="ans-btn">Ans</div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #373652;
  border-radius: 10px;
  overflow: auto;
  border: 5px solid black;
  box-shadow: rgba(10, 10, 10, 0.8) 15px 15px 10px;
  resize: both;
  min-height: 320px;
  min-width: 320px;
}

#display {
  background-color: #bbb;
  color: var(--vt-c-white);
  border-radius: 10px;
  font-size: 25px;
  line-height: calc(40px - 2 * 5px);
  height: 40px;
  width: 95%;
  padding: 5px;
  margin: 10px auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

#buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 2px;
  height: calc(100% - 40px - 10px - 10px);
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 5px;
  transition-duration: 100ms;
  user-select: none;
}

.button:hover {
  background-color: rgba(200, 200, 200, 0.5);
  cursor: pointer;
}

.number {
  background-color: #43426b;
}

#ans-btn {
  background-color: darkorange;
  grid-column: 3 / 5;
}

#ans-btn:hover {
  background-color: orange;
  color: white;
}
</style>