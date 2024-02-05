<template>
    <div>
        <NuxtLink :to="link">
            <div class="p-4 h-[3rem] text-white text-sm hover:bg-yellow-400">{{ name }}</div>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
const props=defineProps({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
console.log(props.link);
</script>
