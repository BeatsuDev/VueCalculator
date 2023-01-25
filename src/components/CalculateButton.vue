<script setup>
const props = defineProps({
    value: String,
    callback: Function,
    expression: String,
})
console.log(props.callback);
</script>


<template>
    <button @click="callback()">{{ value }}</button>
</template>


<style scoped>
button {
    grid-column: span 2;
    background-color: var(--color-coquelicot);
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    padding: 10px;
}

button:hover {
    cursor: pointer;
}
</style>