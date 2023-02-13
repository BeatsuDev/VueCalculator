<script setup lang="ts">
function addSymbol(event: MouseEvent) {
  if (!event.target) return;
  if (!(event.target instanceof HTMLElement)) return;
  if (display.innerText === 'Error') {
    display.innerText = '';
  }
  display.innerText += event.target.innerText;
}

function calculate() {
  // Replace ^ with **
  let toCalculate = display.innerText.replace('^', '**');
  let answer;
  
  // If there are only numbers, don't try to calculate
  if (/^\d+$/.test(toCalculate)) {
    return;
  }
  try {
    answer = eval(toCalculate);
  } catch {
    display.innerText = 'Error';
    return;
  }

  // Check if answer is valid
  if (isNaN(answer) || !isFinite(answer)) {
    display.innerText = 'Error';
    return;
  }

  // Add to history
  

  // Set the display to show the answer
  display.innerText = answer;
}

function clear() {
  display.innerText = '';
}
</script>

<template>
  <main>
    <div id="display" ref="display">{{ display }}</div>
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
}

.button {
  text-align: center;
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