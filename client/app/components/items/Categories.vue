<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
let categories = ref([]);
let data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/categories");
        categories.value = await response.data;
        console.log(categories);
        console.log(categories.value);
    } catch (error) {
        console.error("GET request error:", error);
    }
});
</script>

<template>
    <div class="w-full flex flex-col shadow border">
        <div class="font-bold p-[0.5rem] text-lg text-center border-b">CATEGORIES</div>
        <div v-for="c in categories" :key="c['id']">
            <div class="px-[1rem] text-xs mt-1">
                <NavItem
                    :isCategoryItem="true"
                    :name="c['category']"
                    :link="'/' + c['category']"
                />
            </div>
        </div>
    </div>
</template>
