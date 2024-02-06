<template>
    <span v-if="isHeaderItem">
        <NuxtLink :to="'/genre'+link">
            <span v-if="current!=name" class="flex p-4 h-[3rem] text-white text-sm hover:bg-yellow-400">{{ name }}</span>
            <span v-else class="flex p-4 h-[3rem] text-white text-sm bg-yellow-400">{{ name }}</span>
        </NuxtLink>
    </span>
    <span v-if="isCategoryItem">
        <NuxtLink :to="'/category'+link">
            <span class=" hover:text-yellow-200 m-1">
                {{ name }}
            </span>
        </NuxtLink>
    </span>
    <span v-if="!isCategoryItem&&!isHeaderItem">
        <NuxtLink :to="link">
            <span>{{ name }}</span>
        </NuxtLink>
    </span>
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
    current: String,
    isHeaderItem: {type: Boolean, default: false},
    isCategoryItem: {type: Boolean, default: false},
});

</script>
