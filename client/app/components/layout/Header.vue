<script setup>
import axios from "axios";
import { useUserStore } from "~/stores/user";

const userProfile = useUserStore();
// userProfile.getUserProfile();

const isScrolled = ref(false);

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
    isScrolled.value = window.scrollY > 2;
}
let genres = ref([]);
let user = ref("");
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/category/allGenres");
        genres.value = await response.data;
        //await console.log(genres.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    try {
        const response = await axios.get("http://localhost:8080/api/user-profile", {
            withCredentials: true,
        });
        user.value = response.data;
        userProfile.setName = response.data.name;
        console.log("setname", response.data.name);
        console.log("getname", userProfile.getName);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
const emit = defineEmits(["user"]);
emit("user", user);

const props = defineProps({
    current: String,
});
let inputValue = ref("");

const search = async () => {
    navigateTo("/search/" + inputValue.value);
};
</script>

<template>
    <div class="mb-[3rem]">
        <div class="flex flex-row items-center">
            <!-- Logo -->
            <div class="flex flex-initial w-11/12 object-cover">
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
                        class="border p-3 bg-white text-sm flex-1 focus:outline-none"
                        type="text"
                        placeholder="Search by title..."
                        v-model="inputValue"
                    />
                    <button @click="search" class="text-white text-sm ml-[3rem] mr-[3rem]">
                        Search
                    </button>
                </form>
            </div>
            <!-- Icon -->
            <div
                class="flex flex-row w-3/4 col-lg-3 col-md-3 col-sm-4 hidden-xs hidden-sm hidden-md"
            >
                <div class="m-4 text-sm">
                    <img
                        class="h-7 mb-1.5 mx-auto"
                        :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/heart.png?1702443694490'"
                    />
                    <span class="mx-auto text-xs">Wish List</span>
                </div>
                <div class="mr-4 my-auto text-sm">
                    <img
                        class="h-7 mb-1.5 mx-auto"
                        :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/giohang1.png?1702443694490'"
                    />
                    <span class="mx-2 text-xs"
                        ><NavItem :link="'/account/cart'" :name="'Cart'"></NavItem
                    ></span>
                </div>
                <div class="mr-4 my-auto text-sm">
                    <img
                        class="h-7 mb-1.5 mx-auto"
                        :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/acc.png?1702443694490'"
                    />
                    <span class="mx-1 text-xs"
                        ><NavItem v-if="user" :link="'/account'" :name="user.name"></NavItem>
                        <NavItem v-else :link="'/account/login'" :name="'Log in'"></NavItem
                    ></span>
                </div>
            </div>
        </div>
        <!-- NavBar -->
        <div
            :class="{ 'top-0': isScrolled }"
            class="fixed bg-red-600 z-50 w-full flex h-[3rem] px-[2rem] items-center justify-between"
        >
            <div></div>
            <div class="flex">
                <div v-for="g in genres" :key="g['prio']">
                    <NavItem
                        :isHeaderItem="true"
                        :link="'/genre/' + g['name']"
                        :name="g['name']"
                        :current="props.current"
                    />
                </div>
                <NavItem
                    :isHeaderItem="true"
                    :current="props.current"
                    link="/Events"
                    name="Events"
                />
                <NavItem
                    :isHeaderItem="true"
                    :current="props.current"
                    link="/About"
                    name="About"
                />
            </div>
            <div></div>
        </div>
    </div>
</template>
