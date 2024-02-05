<script setup lang="ts">
import axios from "axios";

const isScrolled = ref(false);

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
    isScrolled.value = window.scrollY > 10;
}
let data = ref({});
let searchedItem = ref("");
async function search() {
    // if (searchedItem.value != null) {
    //     let postData = { productname: searchedItem.value };
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:8080/menu/api/searchProductName",
    //             postData
    //         );
    //         data.value = response.data;
    //         console.log(response.data);
    //         console.log("POST request successful:");
    //     } catch (error) {
    //         console.error("POST request error:", error);
    //     }
    // }
}
</script>

<template>
    <div>
        <div class="flex flex-row items-center">
            <!-- Logo -->
            <div class="h-full object-cover">
                <NuxtLink to="/">
                    <img
                        :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/logo.png?1702443694490'"
                    />
                </NuxtLink>
            </div>
            <!-- Search Bar -->
            <div class="flex ml-4 w-full">
                <form @submit.prevent="search" class="flex bg-red-600 rounded w-full">
                    <input
                        class="border p-3 bg-white flex-1"
                        type="text"
                        placeholder="Search by title..."
                        v-model="searchedItem"
                    />
                    <button @click="search" class="text-white ml-[3rem] mr-[3rem]">
                        Search
                    </button>
                </form>
            </div>
            <!-- Icon -->
            <div class="flex flex-row w-2/3 col-lg-3 col-md-3 col-sm-4 hidden-xs hidden-sm hidden-md">
                <div class="m-4 text-sm">
                    <img class="h-8 mb-1.5 mx-auto" :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/heart.png?1702443694490'" />
                    <span class="mx-auto text-xs">Wish List</span>
                </div>
                <div class="mr-4 my-auto text-sm">
                    <img class="h-8 mb-1.5 mx-auto" :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/giohang1.png?1702443694490'" />
                    <span class="mx-2 text-xs">Cart</span>
                </div>
                <div class="mr-4 my-auto text-sm">
                    <img class="h-8 mb-1.5 mx-auto" :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/acc.png?1702443694490'" />
                    <span class="mx-1 text-xs">User</span>
                </div>
            </div>
            
        </div>
        <!-- NavBar -->
        <div
            :class="{ 'top-0': isScrolled }"
            class="fixed bg-red-600 z-50 w-full flex h-[3.5rem] px-[2rem] items-center justify-between"
        >
            <div></div>
            <div class="flex">
                <HeaderNavItem link="/" name="STARTED" />
                <HeaderNavItem link="/todo" name="TODO" />
                <HeaderNavItem link="/menu" name="MENU" />
                <HeaderNavItem link="/about" name="ABOUT" />
                <HeaderNavItem link="/" name="HELP" />
            </div>
            <div class="flex font-bold">
                <HeaderNavItem link="/cart" name="Cart" />
                <HeaderNavItem link="/login" name="Login" />
            </div>
        </div>
    </div>
</template>
