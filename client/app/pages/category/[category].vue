<script setup>
const { category } = useRoute().params;

const filter = ref(null);
</script>

<template>
    <div>
        <Header :current="genre"></Header>
        <Container>
            <template #left>
                <Filter @filter="(f) => (filter = f)"></Filter>
            </template>
            <div class="flex flex-col">
                <div class="font-bold text-lg">{{ category.toUpperCase() }}</div>
                <div>genre description</div>
                <ItemList :filter="filter" :category="category" />
            </div>
        </Container>
    </div>
</template>
