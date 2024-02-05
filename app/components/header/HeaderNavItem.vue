<template>
    <div>
        <NuxtLink :to="link">
            <div class="p-4 h-[3.5rem] text-white hover:bg-yellow-400">{{ name }}</div>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>
