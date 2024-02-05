<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const { id } = useRoute().params;
let data = ref([]);

onMounted(async () => {
    const response = await axios.get("http://localhost:8080/api/books/searchIsbn", {
        params: { query: id },
    });
    data.value = await response.data;
    await console.log(data.value);
});
</script>

<template>
    <div class="font-nunito font-light text-sm">
        <h1>Book Details {{ id }}</h1>
        <h2>{{ data["name"] }}</h2>
        <div class="flex flex-row border-t mt-4">            
            <!-- Details -->
            <div class="flex flex-col ml-[8rem]">
                <div class="flex flex-row flex-initial w-[50rem]">
                    <!-- Image -->
                    <div class="flex-initial border w-[16rem] mr-8 pl-2">
                        <img :src="data['image']" />
                    </div>
                    <!-- Information -->
                    <div class="flex-col flex-1 ">
                        <div class="border-b text-3xl font-nunito font-semibold">{{ data["name"] }}</div>
                        <div class="flex justify-between">
                            <div><span>By: </span><span class="text-red-500">{{ data["author"] }}</span></div>
                            <div><span>Category: </span><span class="text-red-500">{{ data["category"] }}</span></div>
                        </div>
                        <div>{{ data["price"] }}</div>

                        <div class="border-t"><span class="font-bold">Publisher: </span><span>{{ data["publisher"] }}</span></div>
                        <div><span class="font-bold">Release Date: </span><span>{{ data["release"] }}</span></div>
                        <div><span class="font-bold">ISBN: </span><span>{{ data["isbn"] }}</span></div>
                        <div class="flex justify-start">
                            <div class="flex flex-col mr-2">
                                <div>Format</div>
                                <div class="border-[3px] border-red-700 px-2 py-1">
                                    {{ data["format"] }}
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div>Condition</div>
                                <div class="border-[3px] border-red-700 px-3 py-1">
                                    {{ data["condition"] }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Overview -->
                <div class="flex-initial w-[50rem]">
                    <span class="text-red-600 text-2xl font-bold">BOOK OVERVIEW</span>
                    <pre class="font-nunito whitespace-pre-wrap text-justify">{{ data["overview"] }}</pre>
                </div>
            </div>
            <!-- Right-side -->
            <div class="flex-col flex-1 hidden-lg hidden-sm bg-slate-600"></div>
            <div class="flex-initial w-[26rem] bg-orange-400 hidden-sm hidden-md"></div>
        </div>
    </div>
</template>
