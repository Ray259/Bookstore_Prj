<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const {category} = useRoute().params;

onMounted(async() => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {params: {category: categories}});
        data.value = response.data;
        console.log(data.value);
    } catch (error) {
        console.error("GET request error:", error);
    }
});
</script>

<template>
    <Header></Header>
    <ItemList :category="category"/>
</template>
