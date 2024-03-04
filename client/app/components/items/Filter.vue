<script setup>
import { ref, defineEmits } from "vue";

const filter = ref({
    format: [],
    condition: [],
    author: [],
});

const props = defineProps({
    books: Object,
});

const emit = defineEmits(["filter"]);
emit("filter", { filter });
const updateFormat = (event) => {
    const value = event.target.value;
    const index = filter.value.format.indexOf(value);
    if (index === -1) {
        filter.value.format.push(value);
    } else {
        filter.value.format.splice(index, 1);
    }
};

const updateCondition = (event) => {
    const value = event.target.value;
    const index = filter.value.condition.indexOf(value);
    if (index === -1) {
        filter.value.condition.push(value);
    } else {
        filter.value.condition.splice(index, 1);
    }
};

const updateAuthor = (event) => {
    const value = event.target.value;
    const index = filter.value.author.indexOf(value);
    if (index === -1) {
        filter.value.author.push(value);
    } else {
        filter.value.author.splice(index, 1);
    }
};
</script>

<template>
    <div class="flex flex-col side-item">
        <span>FORMAT</span>
        <label class="font-light">
            <input type="checkbox" value="Hardcover" @change="updateFormat" />
            Hardcover
        </label>
        <label class="font-light">
            <input type="checkbox" value="Mass Market Paperback" @change="updateFormat" />
            Mass Market Paperback
        </label>
        <label class="font-light">
            <input type="checkbox" value="Paperback" @change="updateFormat" />
            Paperback
        </label>

        <span class="mt-4">CONDITION</span>
        <label class="font-light">
            <input type="checkbox" value="Acceptable" @change="updateCondition" />
            Acceptable
        </label>
        <label class="font-light">
            <input type="checkbox" value="Good" @change="updateCondition" />
            Good
        </label>
        <label class="font-light">
            <input type="checkbox" value="Like New" @change="updateCondition" />
            Like New
        </label>
        <label class="font-light">
            <input type="checkbox" value="New" @change="updateCondition" />
            New
        </label>
        <label class="font-light">
            <input type="checkbox" value="Very Good" @change="updateCondition" />
            Very Good
        </label>
        <span class="mt-4">AUTHOR</span>
        <!-- <select class="border font-light text-sm p-2">
            <option
                v-for="b in books"
                :value="b.author"
                @change="updateAuthor"
                class="form-control"
            >
                {{ b.author }}
            </option>
        </select> -->
        <label class="font-light" v-for="b in books">
            <input type="checkbox" :value="b.author" @change="updateAuthor" />
            {{ b.author }}
        </label>
        <span class="mt-4">SUB-CATEGORY</span>
        <SubscribeBlock></SubscribeBlock>
    </div>
</template>

<style>
.side-item span {
    font-weight: 700;
    font-size: 18px;
}

label.font-light {
    margin: 2px;
    font-weight: 100;
    font-size: 14px;
}
</style>
