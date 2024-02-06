<script setup>
const { keyword } = useRoute().params;


</script>

<template>
    <div>
        <Header></Header>
        <div>Search results with keywords: "{{ keyword }}"</div>
        <ItemList :name="keyword" />
    </div>
</template>