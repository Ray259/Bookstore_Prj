<script setup>
import axios from "axios";
const { category } = useRoute().params;

const filter = ref(null);
const description = ref();
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/category/description", {
            params: { category: category },
        });
        description.value = await response.data;
        console.log(description.value);
    } catch (error) {
        console.error("GET request error:", error);
    }
});
</script>

<template>
    <div>
        <Header :current="genre"></Header>
        <Container>
            <template #left>
                <Filter @filter="(f) => (filter = f)"></Filter>
            </template>
            <div class="flex flex-col">
                <div class="font-bold text-lg">{{ category.toUpperCase() }}</div>
                <div class="text-sm font-light mt-2">{{ description }}</div>
                <ItemList :filter="filter" :category="category" />
            </div>
        </Container>
    </div>
</template>
