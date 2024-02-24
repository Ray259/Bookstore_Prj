<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    isbn: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

let isRotating = ref(false);
const router = useRouter();

const startRotation = () => {
    isRotating.value = true;
};

const stopRotation = () => {
    isRotating.value = false;
};

const goToBookDetails = () => {
    router.push(`/book-details/${props.isbn}`);
};
</script>

<template>
    <div class="bg-white text-gray-700 w-[10rem] h-[20rem] border border-gray-200 p-1">
        <div
            class="h-[12rem] w-full flex justify-center items-center cursor-pointer"
            @click="goToBookDetails"
            @mouseover="startRotation"
            @mouseout="stopRotation"
        >
            <img
                class="h-full object-cover"
                :src="image"
                :class="{
                    'transition-all duration-[1500ms] [transform-style:preserve-3d] hover:[transform:rotateY(360deg)]':
                        isRotating,
                }"
            />
        </div>
        <div
            class="overflow-hidden text-sm mt-1 line-clamp-2 cursor-pointer"
            @click="goToBookDetails"
        >
            {{ name }}
        </div>
        <span class="text-xs text-gray-400">{{ author }}</span>
        <span class="text-xl text-red-600 block">{{ price }}₫</span>
    </div>
</template>
