<template>
    <v-sheet
    max-width="1000">
        <v-slide-group v-model="model" class="pb-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item
                v-for="item in obj" 
                :key="item['id']"
                v-slot="{ isSelected, toggle, selectedClass }"                
            ><v-card class="mr-2">
                
                    <Item
                        :name="item['name']"
                        :price="item['price']"
                        :author="item['author']"
                        :image="item['image']"
                        :isbn="item['isbn']"
                    />
            </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const model = ref(null);

let obj = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books");
        obj.value = await response.data;
        await console.log(obj.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>

<script>
export default {
    data: () => ({
        model: "abcd",
    }),
};
</script>
