<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
let ProductID = 0;

let obj = ref([]);

let searchedItem = ref("");
const props=defineProps({
    api: {
        type: String,
        required: true,
    },
});


onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/"+props.api);
        obj.value = await response.data;
        await console.log(obj.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

</script>

<template>
    <div>
        <ul class="flex flex-wrap">
            <li
                v-for="item in obj"
                :key="item['id']"
                class="mb-4 ml-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex"
            >
                <Item
                    :name="item['name']"
                    :price="item['price']"
                    :author="item['author']"
                    :image="item['image']"
                    :isbn="item['isbn']"
                />
            </li>
        </ul>
    </div>
</template>
