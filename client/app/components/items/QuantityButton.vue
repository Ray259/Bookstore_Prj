<script setup>
const props = defineProps({
    defaultQuantity: {
        type: Number,
        default: 1,
    },
});

const quantity = ref(props.defaultQuantity);
let changes = ref(0);

defineExpose({ quantity });
const emit = defineEmits(["quantity"]);
emit("quantity", { quantity, changes });

const subtract = () => {
    if (quantity.value > 1) {
        changes.value--;
        quantity.value--;
    }
};

const add = () => {
    changes.value++;
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
        <input v-model="quantity" class="p-2 border mx-2 text-center w-16" />
        <button
            @click="add()"
            class="hover:bg-red-600 hover:text-white border bg-slate-100 text-slate-500 font-bold p-2"
        >
            +
        </button>
    </span>
</template>
