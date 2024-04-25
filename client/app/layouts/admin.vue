<script setup>
import axios from "axios";
let user = ref("");
onMounted(async () => {
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
</script>

<template>
    <div>
        <v-app class="font-nunito">
            <div class="top-0 fixed">
                <!-- Logo -->
                <div class="flex flex-row justify-between">
                    <!-- <NuxtLink class="w-1/5" to="/admin">
                        <img
                            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/logo.png?1702443694490'"
                        />
                    </NuxtLink> -->
                    <!-- User -->
                    <div></div>
                </div>
                <!-- NavItem -->
                <div
                    class="fixed bg-red-600 z-50 w-full flex h-[3rem] px-[2rem] items-center justify-center"
                >
                    <NavItem :isHeaderItem="true" :name="'Users'" link="/admin/manage-users" />
                    <NavItem :isHeaderItem="true" :name="'Books'" link="/admin/manage-books" />
                    <NavItem
                        :isHeaderItem="true"
                        :name="'Orders'"
                        link="/admin/manage-orders"
                    />

                    <NavItem
                        v-if="user"
                        :isHeaderItem="true"
                        :link="'/admin'"
                        :name="user.name"
                    />
                    <NavItem
                        v-else
                        :isHeaderItem="true"
                        :link="'/account/login'"
                        :name="'Log in'"
                    />
                </div>
            </div>
            <slot></slot>
        </v-app>
    </div>
</template>
