<script setup>
import { ref, defineEmits } from "vue";

const filter = ref({
    format: [],
    condition: [],
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

        <span>CONDITION</span>
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
        <span>AUTHOR</span>
        <span>SUB-CATEGORY</span>
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
