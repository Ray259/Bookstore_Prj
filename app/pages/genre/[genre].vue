<script setup>

const { genre } = useRoute().params;

</script>

<template>
    <div>
        <Header :current=genre></Header>
        <ItemList :genre="genre" />
    </div>
</template>