<script setup>
const { genre } = useRoute().params;

const filter = ref(null);
const books = ref(null);
</script>

<template>
    <div>
        <Header :current="genre"></Header>
        <Container>
            <template #left>
                <Filter :books="books"  @filter="(f) => (filter = f)"></Filter>
            </template>

            <div class="flex flex-col">
                <div class="font-bold text-lg">{{ genre.toUpperCase() }}</div>
                <div>genre description</div>
                <ItemList :filter="filter" @books="(b) => (books = b)" :genre="genre" />
            </div>
        </Container>
    </div>
</template>
