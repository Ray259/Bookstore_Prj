<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const model = ref(null);

const props = defineProps({
    displayName: String,
    category: String,
});

let books = ref([]);
let allbooks = ref([]);
let fictionbooks = ref([]);
let nonfictionbooks = ref([]);
let childrenbooks = ref([]);
onMounted(async () => {
    try {
        if (props.category === "all")
            allbooks = await axios.get("http://localhost:8080/api/books");
        else
            allbooks = await axios.get("http://localhost:8080/api/books/query", {
                params: { category: props.category },
            });    
        fictionbooks = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: "Fiction" },
        });
        nonfictionbooks = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: "Non Fiction" },
        });
        childrenbooks = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: "Kid's & Young Adult" },
        });
        books.value = await allbooks.data;
        // await console.log(books.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

const allbook = () => {
    books.value = allbooks.data;
};
const fiction = () => {
    books.value = fictionbooks.data;    
};
const nonfiction = () => {
    books.value = nonfictionbooks.data;
};
const children = () => {
    books.value = childrenbooks.data;
};
</script>

<!-- Component to use on main page -->

<template>
    <NuxtLink :to="'/genre/' + category">
        <span class="mt-4 ml-13 pb-2 text-2xl font-semibold hover:text-black text-red-600">
            {{ displayName }}
        </span>
    </NuxtLink>
    <div class="ml-13 pa-2 border-b mb-4 text-[#da251c] border-t">
        <span class="m-2 pr-4 border-r hover:cursor-pointer" @click="allbook">All</span>
        <span class="m-2 pr-4 border-r hover:cursor-pointer" @click="fiction">FICTION</span>
        <span class="m-2 pr-4 border-r hover:cursor-pointer" @click="nonfiction"
            >NON FICTION</span
        >
        <span class="m-2 pr-4 hover:cursor-pointer" @click="children">CHILDREN'S BOOK</span>
    </div>
    <v-sheet max-width="1000">
        <v-slide-group v-model="model" class="pb-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="item in books"
                ><v-card class="mr-2">
                    <Item
                        :name="item.name"
                        :price="item.price"
                        :author="item.author"
                        :image="item.image"
                        :isbn="item.isbn"
                    />
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>
