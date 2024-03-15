<script setup>
defineProps({
    content: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "yellow",
    },
});
</script>

<template>
    <span class="font-normal text-white text-xs">
        <span v-if="color == 'yellow'" class="bg-yellow-400 rounded-lg px-2">{{
            content
        }}</span>
        <span v-else-if="color == 'red'" class="bg-red-600 rounded-lg px-2">{{
            content
        }}</span>
        <span v-else-if="color == 'green'" class="bg-green-500 rounded-lg px-2">{{
            content
        }}</span>
    </span>
</template>
