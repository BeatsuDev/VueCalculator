<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const feedback = ref('');

const isValidSubmission = computed(() => {
  if (!email.value.length || !feedback.value.length) return false;
  if (feedback.value.length < 10) return false;
  if (email.value.length < 5 || !email.value.includes("@")) return false;
  return true;
});

const styleOnValid = computed(() => {
  return isValidSubmission.value ? 'submittable' : '';
});

const submitForm = () => {
  if (!isValidSubmission.value) return;
  axios.get("http://localhost:3000/feedback", {
    params: {
      name: name.value,
      email: email.value,
      feedback: feedback.value
    }
  }).then((response) => {    
    alert(JSON.stringify(response.data, null, 4));
  }).catch((error) => {
    alert(error);
  });
};
</script>

<template>
  <div class="wrapper">
    <div class="input-row">
      <label for="name">Name</label>
      <input v-model="name" type="text" id="name" />
    </div>
    <div class="input-row">
      <label class="required" for="email">Email</label>
      <input v-model="email" type="email" id="email" />
    </div>
    <div class="input-row">
      <label class="required" for="feedback">Feedback</label>
      <textarea v-model="feedback" id="feedback" rows="5"></textarea>
    </div>
    <button :class="styleOnValid" @click="submitForm">Submit</button>
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

.required::after {
  content: " *";
  color: #f55;
}

.submittable {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  cursor: pointer;
}
</style>