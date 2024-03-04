<script setup>
const { keyword } = useRoute().params;
</script>

<template>
    <div>
        <Header></Header>
        <Container>
            <div class="font-bold">SEARCH RESULT</div>
            <div>Search results with keywords "{{ keyword }}:"</div>
            <ItemList :name="keyword" />
        </Container>
    </div>
</template>
