<script setup lang="ts">
import { ref } from "vue";

let id = 0;
const items = ref([{ id: id++, content: "Init" }]);

const adding = ref("");

function addItem() {
    if (adding.value !== "") {
        items.value.push({ id: id++, content: adding.value });
        adding.value = "";
    }
}

function removeItem(item: object) {
    items.value = items.value.filter((i) => i != item);
    id--;
    items.value.forEach((item, index) => {
        item.id = index;
    });
}
</script>

<template>
    <div class="flex flex-col w-[500px] mx-auto border">
        <div class="text-[2rem] font-bold text-green-400 text-center">Todo</div>
        <form class="flex" @submit.prevent>
            <input
                class="w-full"
                type="text"
                placeholder="input"
                v-model="adding"
            />
            <button
                class="border bg-green-400 text-white px-2 rounded-md"
                type="submit"
                @click="addItem"
            >
                Submit
            </button>
        </form>
        <div>Trying to add: {{ adding }}</div>
        <ul class="text-left">
            <div>List:</div>
            <div v-for="item in items" :key="item.id">
                <li>
                    {{ item.id }} . {{ item.content }}
                    <button @click="removeItem(item)">x</button>
                </li>
            </div>
        </ul>
    </div>
</template>
