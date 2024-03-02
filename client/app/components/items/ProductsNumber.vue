<script setup>
defineProps({
    number: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <span class="bg-yellow-400 rounded-lg text-white text-xs px-2"
        >Have {{ number }} product(s).</span
    >
</template>
