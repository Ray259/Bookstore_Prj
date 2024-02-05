<template>
    <div
        class="w-full flex flex-col shadow border"
    >
        <div class="font-semibold p-[0.5rem] text-l bg-gray-200"> CATEGORIES</div>
        <div class="px-[1rem] text-xs text-gray-500 hover:text-yellow-200">All product</div>
        <div>
            <div class="px-[1rem]" v-for="cat in categories">{{ cat.Category }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
let categories = ref<any[]>([]);
try {
    const res = await fetch("http://localhost:8080/menu/getAllCategory");
    const data = await res.json();
    categories.value = data;
} catch (error) {
    console.error("POST request error:", error);
}
</script>
