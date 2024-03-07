<template>
    <Header></Header>
    <!-- Banner -->
    <div>
        <img
            class="w-full h-full object-cover mb-4"
            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/slider1-for.png?1702443694490'"
        />
    </div>
    <div class="flex flex-row border-t mt-4">
        <!-- Sidebar (Category) -->
        <div class="flex-initial w-32"></div>
        <div class="flex-initial w-72 min-w-64 pt-4 pl-2 hidden lg:block">
            <Categories />
        </div>

        <!-- Main Content -->
        <div class="flex-col flex-1 ml-4">
            
            <!-- <ItemList :obj="data" /> -->
            <ItemSlider :displayName="'NEW ARRIVAL'" :category="'all'" />
            <ItemSlider :displayName="'RARE & COLLECTIBLES'" :category="'all'" />

        </div>
    </div>
</template>
