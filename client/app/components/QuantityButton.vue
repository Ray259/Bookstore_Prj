<script setup>
let quantity = ref(1);
</script>

<template>
    <span>
        <button
            @click="quantity--"
            class="hover:bg-red-600 hover:text-white border bg-slate-100 text-slate-500 font-bold p-2"
        >
            -
        </button>
        <span class="p-2 border mx-2 px-10">{{ quantity }}</span>
        <button
            @click="quantity++"
            class="hover:bg-red-600 hover:text-white border bg-slate-100 text-slate-500 font-bold p-2"
        >
            +
        </button>
    </span>
</template>
