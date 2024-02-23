<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

const model = ref(null);

const props = defineProps({
    displayName: String,
    category: String,
});

let obj = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books", {
            params: { category: props.category },
        });
        obj.value = await response.data;
        await console.log(obj.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>

<!-- Component to use on main page -->

<template>
    <NuxtLink :to="'/genre/' + category">
        <span class="mt-4 ml-13 pb-2 text-2xl font-semibold text-red-600">
            {{ displayName }}
        </span>
    </NuxtLink>
    <div class="ml-13 pa-2 border-b mb-4 text-[#da251c] border-t">
        <span class="m-2 pr-4 border-r">All</span>
        <span class="m-2 pr-4 border-r">FICTION</span>
        <span class="m-2 pr-4 border-r">NON FICTION</span>
        <span class="m-2 pr-4">CHILDREN'S BOOK</span>
    </div>
    <v-sheet max-width="1000">
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
