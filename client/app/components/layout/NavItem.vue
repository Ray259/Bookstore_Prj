<template>
    <span v-if="isHeaderItem">
        <NuxtLink :to="link">
            <span
                v-if="current != name"
                class="flex p-4 h-[3rem] text-white text-sm hover:bg-yellow-400"
                >{{ name }}</span
            >
            <span v-else class="flex p-4 h-[3rem] text-white text-sm bg-yellow-400">{{
                name
            }}</span>
        </NuxtLink>
    </span>
    <span v-else-if="isCategoryItem">
        <NuxtLink :to="'/category' + link">
            <span class="hover:text-yellow-200 m-1">
                {{ name }}
            </span>
        </NuxtLink>
    </span>
    <span v-else-if="isVendorItem">
        <NuxtLink :to="'/vendor' + link">
            <span class="hover:text-yellow-200 m-1">
                {{ name }}
            </span>
        </NuxtLink>
    </span>
    <span v-else>
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
    isHeaderItem: { type: Boolean, default: false },
    isCategoryItem: { type: Boolean, default: false },
    isVendorItem: { type: Boolean, default: false },
});
</script>
