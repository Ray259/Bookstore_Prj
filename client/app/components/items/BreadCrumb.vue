<script setup>
const props = defineProps({
    first: String,
    second: String,
    name: String,
});
</script>

<template>
    <div class="mx-[8rem] my-[1rem]">
        <span><NavItem :name="'Home'" :link="'/'" /></span>

        <span v-if="props.first">
            <font-awesome-icon
                icon="fa fa-angle-right"
                class="mx-2 w-1.5"
                style="vertical-align: middle" /><NavItem
                :isCategoryItem="true"
                :name="props.first || ''"
                :link="'/' + props.first"
        /></span>
        <span v-if="props.second">
            <font-awesome-icon
                icon="fa fa-angle-right"
                class="mx-2 w-1.5"
                style="vertical-align: middle" /><NavItem
                :isCategoryItem="true"
                :name="props.second"
                :link="'/' + props.second"
        /></span>
        <font-awesome-icon
            icon="fa fa-angle-right"
            class="mx-2 w-1.5"
            style="vertical-align: middle"
        />
        <span class="text-xs">{{ props.name }}</span>
    </div>
</template>
