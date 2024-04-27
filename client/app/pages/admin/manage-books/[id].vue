<script setup>
import axios from "axios";
definePageMeta({
    layout: "admin",
});

const { id } = useRoute().params;
const book = ref([]);
const origin = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { isbn: id },
        });
        book.value = await response.data;
        origin = book;
    } catch (error) {
        console.error(error);
    }
});

const saveChanges = async () => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/books/update",
            book.value,
            {
                withCredentials: true,
            }
        );
    } catch (error) {
        console.error("Error saving changes:", error);
    }
};
</script>
<template>
    <div class="flex flex-row">
        <div class="w-80">
            <div class="flex items-center justify-center">
                <img class="object-contain border" :src="book.image" />
            </div>
            <div class="font-bold mt-2">URL:</div>
            <textarea
                v-model="book.image"
                rows="2"
                class="border text-xs w-full p-2"
            ></textarea>
        </div>
        <div class="flex flex-col m-4">
            <div class="font-bold">ISBN: {{ book.isbn }}</div>
            <div class="font-bold">Name:</div>
            <input v-model="book.name" class="border px-2" />
            <div class="flex justify-between">
                <div>
                    <div class="text-sm font-bold mt-5">Author:</div>
                    <input v-model="book.author" class="border px-2" />
                    <div class="text-sm font-bold mt-5">Price:</div>
                    <input v-model="book.price" class="border px-2" />
                    <div class="text-sm font-bold mt-5">Publisher:</div>
                    <input v-model="book.publisher" class="border px-2" />
                </div>
                <div>
                    <div class="text-sm font-bold mt-5">Release Date:</div>
                    <input v-model="book.release" class="border px-2" />
                    <div class="text-sm font-bold mt-5">Format:</div>
                    <input v-model="book.format" class="border px-2" />
                    <div class="text-sm font-bold mt-5">Condition:</div>
                    <input v-model="book.condition" class="border px-2" />
                </div>
            </div>
            <div class="text-sm font-bold mt-5">AMOUNTS:</div>
            <input v-model="book.amounts" class="border px-2" />
            <div class="font-bold mt-6">Overview:</div>
            <textarea
                v-model="book.overview"
                rows="10"
                cols="50"
                class="border p-2"
            ></textarea>
            <br />
            <button
                class="text-white bg-yellow-400 text-lg font-bold px-4 py-2 rounded hover:bg-red-600"
                @click="saveChanges"
            >
                Save changes
            </button>
        </div>
    </div>
</template>
