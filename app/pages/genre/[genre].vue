<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const { genre } = useRoute().params;
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: genre },
        });
        obj.value = await response.data;
        await console.log(obj.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

</script>

<template>
    <div>
        <ItemList :api="'api/books/query?genre='+genre" />
    </div>
</template>