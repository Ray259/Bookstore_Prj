<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
let ProductID = 0;

let books = ref([]);

let searchedItem = ref("");
const props = defineProps({
    api: {
        type: String,
    },
    genre: String,
    category: String,
    name: String,
});

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: props.genre, category: props.category, name: props.name},
        });
        books.value = await response.data;
        await console.log(books.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>

<template>
    <div>
        <ul class="flex flex-wrap">
            <li
                v-for="b in books"
                :key="b['id']"
                class="mb-4 ml-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex"
            >
                <Item
                    :name="b['name']"
                    :price="b['price']"
                    :author="b['author']"
                    :image="b['image']"
                    :isbn="b['isbn']"
                />
            </li>
        </ul>
    </div>
</template>
