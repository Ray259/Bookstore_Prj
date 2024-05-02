<script setup>
import axios from "axios";
let categories = ref([]);
let data = ref(null);

const prop = defineProps({
    eventCategories: { type: Boolean, default: false },
});

onMounted(async () => {
    if (prop.eventCategories) {
        try {
            const response = await axios.get("http://localhost:8080/api/category/allEvents");
            categories.value = await response.data;
        } catch (error) {
            console.error("GET request error:", error);
        }
    } else {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/category/allCategories"
            );
            categories.value = await response.data;
        } catch (error) {
            console.error("GET request error:", error);
        }
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
