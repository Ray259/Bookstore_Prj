<script setup>
const props = defineProps({
    defaultQuantity: {
        type: Number,
        default: 1,
    },
});

const quantity = ref(props.defaultQuantity);

const subtract = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const add = () => {
    quantity.value++;
};
</script>

<template>
    <span class="flex">
        <button
            @click="subtract()"
            class="hover:bg-red-600 hover:text-white border bg-slate-100 text-slate-500 font-bold p-2"
        >
            -
        </button>
        <span class="p-2 border mx-2 px-10">{{ quantity }}</span>
        <button
            @click="add()"
            class="hover:bg-red-600 hover:text-white border bg-slate-100 text-slate-500 font-bold p-2"
        >
            +
        </button>
    </span>
</template>
