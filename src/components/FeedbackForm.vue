<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="input-row">
      <label for="name">Name</label>
      <input type="text" id="name" />
    </div>
    <div class="input-row">
      <label for="email">Email</label>
      <input type="email" id="email" />
    </div>
    <div class="input-row">
      <label for="feedback">Feedback</label>
      <textarea id="feedback" rows="5"></textarea>
    </div>
    <button class="submittable">Submit</button>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 720px;
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-row {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  font-size: 1.2rem;
}

button {
  background-color: red;
  color: var(--color-text);
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  transition-duration: 200ms;
  cursor: not-allowed;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  cursor: pointer;
}

.submittable {
}
</style>