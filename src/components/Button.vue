<script setup>
const props = defineProps({
    value: String,
    callback: Function,
})
console.log(props.callback);
</script>


<template>
    <button @click="callback(value)">{{ value }}</button>
</template>


<style scoped>
button {
    background-color: var(--color-heliotrope-gray);
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    padding: 10px;
    transition-duration: .2s;
}

button:hover {
    cursor: pointer;
    color: white;
}
</style>