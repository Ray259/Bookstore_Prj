<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
let ProductID = 0;

const props = defineProps({
    api: {
        type: String,
    },
    genre: String,
    category: String,
    name: String,
    filter: Object,
});

const filteredBooks = computed(() => {
    return props.filter.format.length === 0 && props.filter.condition.length === 0
        ? books.value
        : books.value.filter((b) => {
              return (
                  props.filter.format.some((f) => f === b.format) ||
                  props.filter.condition.some((c) => c === b.condition)
              );
          });
});

let books = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: props.genre, category: props.category, name: props.name },
        });
        books.value = await response.data;
        numberOfBooks.value = books.value.length;
        console.log(books.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>

<template>
    <div>
        <span class="flex justify-center"
            ><ProductsNumber :number="filteredBooks.length"></ProductsNumber
        ></span>
        <ul class="flex flex-wrap">
            <li v-for="b in filteredBooks" :key="b['id']" class="mb-4 ml-1">
                <Item
                    :name="b.name"
                    :price="b.price"
                    :author="b.author"
                    :image="b.image"
                    :isbn="b.isbn"
                />
            </li>
        </ul>
    </div>
</template>
