<script setup>
const { genre } = useRoute().params;

const filter = ref({
    format: [],
    condition: [],
})

</script>

<template>
    <div>
        <Header :current="genre"></Header>
        <Container>
            <template #left>
                <div class="flex flex-col side-item">
                    <span>FORMAT</span>
        <label class="font-light">
            <input type="checkbox" value="Hardcover" v-model="filter.format" />
            Hardcover
        </label>
        <label class="font-light">
            <input type="checkbox" value="Mass Market Paperback" v-model="filter.format" />
            Mass Market Paperback
        </label>
        <label class="font-light">
            <input type="checkbox" value="Paperback" v-model="filter.format" />
            Paperback
        </label>

        <span>CONDITION</span>
        <label class="font-light">
            <input type="checkbox" value="Acceptable" v-model="filter.condition" />
            Acceptable
        </label>
        <label class="font-light">
            <input type="checkbox" value="Good" v-model="filter.condition" />
            Good
        </label>
        <label class="font-light">
            <input
                type="checkbox"
                class="text-sm"
                value="Like New"
                v-model="filter.condition"
            />
            Like New
        </label>
        <label class="font-light">
            <input type="checkbox" value="New" v-model="filter.condition" />
            New
        </label>
        <label class="font-light">
            <input type="checkbox" value="Very Good" v-model="filter.condition" />
            Very Good
        </label>
                    <span>AUTHOR</span>
                    <span>SUB-CATEGORY</span>
                    <SubscribeBlock></SubscribeBlock>
                </div>
            </template>
            <div class="flex flex-col">
                <div class="font-bold text-lg">{{ genre.toUpperCase() }}</div>
                <div>genre description</div>
                <ItemList :filter="filter" :genre="genre" />
            </div>
        </Container>
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
