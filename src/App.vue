<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Calculator</RouterLink>
        <RouterLink to="/feedback">Feedback</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100vw;
  height: 50px;
  background-color: var(--vt-c-vue-green);
}

nav > * {
  line-height: 50px;
  height: 100%;
  margin-left: 20px;
  color: #555;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition-duration: 80ms;
}

nav > *:hover {
  color: white;
}

main {
  max-width: 1280px;
  margin: auto;
  margin-top: calc(50px + 20px); /* 50px for header */
  display: flex;
  justify-content: center;
}
</style>
