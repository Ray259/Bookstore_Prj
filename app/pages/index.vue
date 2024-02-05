<script setup lang="ts">
import axios from "axios";

let data = ref({});
let searchedItem = ref("");
async function search() {
    // if (searchedItem.value != null) {
    //     let postData = { productname: searchedItem.value };
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:8080/api/books",
    //             postData
    //         );
    //         data.value = response.data;
    //         console.log(response.data);
    //         console.log("POST request successful:");
    //     } catch (error) {
    //         console.error("POST request error:", error);
    //     }
    // }
}
</script>

<template>
    <!-- Banner -->
    <div>
        <img
            class="w-full h-full object-cover mb-4"
            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/slider1-for.png?1702443694490'"
        />
    </div>
    <div class="flex flex-row border-t mt-4">
        <!-- Sidebar (Category) -->
        <div class="flex-initial w-32"></div>
        <div class="flex-initial w-72 min-w-64 pt-4 pl-2 hidden lg:block">
            <Category />
        </div>

        <!-- Main Content -->
        <div class="flex-col flex-1 ml-4">
            <!-- <div class="flex w-full border-b mb-4">
                <form @submit.prevent="search" class="flex w-full">
                    <input
                        class="border flex-1"
                        type="text"
                        placeholder="Find a product..."
                        v-model="searchedItem"
                    />
                    <button @click="search" class="ml-2">Search</button>
                </form>
            </div> -->

            <h1 class="mt-4 ml-13 pb-2 border-b text-2xl font-semibold text-red-600">NEW ARRIVALS</h1>
            <div class="ml-13 pa-2 border-b mb-4 text-[#da251c]">
                <span class="m-2 pr-4 border-r">All</span>
                <span class="m-2 pr-4 border-r">FICTION</span>
                <span class="m-2 pr-4 border-r">NON FICTION</span>
                <span class="m-2 pr-4">CHILDREN'S BOOK</span>
            </div>
            
            <!-- <ItemList :obj="data" /> -->
            <ItemSlider />
            <ItemSlider />
            <ItemSlider />
        </div>
    </div>
</template>
