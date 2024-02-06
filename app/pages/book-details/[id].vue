<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const { id } = useRoute().params;
let data = ref([]);
let formattedPrice = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { isbn: id },
        });
        data.value = await response.data;
        formattedPrice = data.value["price"].toLocaleString("de-DE");
        console.log(formattedPrice);
        await console.log(data.value);
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <Header></Header>
    <div class="font-light text-sm">
        <div class="mx-[8rem] my-[2rem]">            
            <span><NavItem :name="'Home'" :link="'/'" /></span>            
            <font-awesome-icon icon="fa fa-angle-right" class="mx-4" style="vertical-align: middle" />
            <span><NavItem :isCategoryItem="true" :name="data['category']" :link="'/'+data['category']" /></span>            
            <font-awesome-icon icon="fa fa-angle-right" class="mx-4" style="vertical-align: middle" />
            <span class="text-xs">{{ data["name"] }}</span>
            
        </div>
        <div class="flex flex-row mt-4">
            <!-- Details -->
            <div class="flex flex-col ml-[8rem]">
                <div class="flex flex-row flex-initial w-[50rem] mb-10">
                    <!-- Image -->
                    <div class="flex-initial w-[16rem] mr-8">
                        <img class="border" :src="data['image']" />
                        <span class="flex justify-center mt-3">
                            <img
                                class="h-9 p-1 border-[1px] border-yellow-300 border-solid"
                                :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/heart.png?1702443694490'"
                            />
                            <span
                                class="p-2 border-y border-r text-xs border-yellow-300 text-yellow-300"
                                >Add to Wish List</span
                            >
                        </span>
                    </div>
                    <!-- Information -->
                    <div class="flex-col flex-1">
                        <div class="border-b text-3xl font-nunito font-semibold">
                            {{ data["name"] }}
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <span>By: </span
                                ><span class="text-red-500">{{ data["author"] }}</span>
                            </div>
                            <div>
                                <span>Category: </span
                                ><span class="text-red-500">{{ data["category"] }}</span>
                            </div>
                        </div>
                        <div class="flex justify-between border-b">
                            <div class="text-3xl text-red-600 font-bold mt-2 pb-2">
                                {{ formattedPrice }}₫
                            </div>
                            <div class="mt-4">
                                <span class="text-white bg-yellow-400 px-2 py-1 rounded"
                                    >Availability: {{ data["amounts"] }}</span
                                >
                            </div>
                        </div>
                        <div class="my-2">
                            <font-awesome-icon icon="fa fa-check" class="custom-bullet"/>
                            <span class="font-bold">Publisher: </span
                            ><span>{{ data["publisher"] }}</span>
                        </div>
                        <div class="mb-2">
                            <font-awesome-icon icon="fa fa-check" class="custom-bullet"/>
                            <span class="font-bold">Release Date: </span
                            ><span>{{ data["release"] }}</span>
                        </div>
                        <div class="mb-6">
                            <font-awesome-icon icon="fa fa-check" class="custom-bullet"/>
                            <span class="font-bold">ISBN: </span
                            ><span>{{ data["isbn"] }}</span>
                        </div>

                        <!-- Format and Condition -->
                        <div class="flex justify-start">
                            <div class="flex flex-col mr-2">
                                <div>Format</div>
                                <div
                                    class="border-[2px] border-red-700 font-bold text-xs p-2 mt-2"
                                >
                                    {{ data["format"] }}
                                </div>
                            </div>
                            <div class="flex flex-col items-start">
                                <div>Condition</div>
                                <div
                                    class="border-[2px] border-red-700 font-bold text-xs p-2 mt-2"
                                >
                                    {{ data["condition"] }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Overview -->
                <div class="flex-initial w-[50rem]">
                    <span class="text-red-600 text-2xl ml-2 font-bold">BOOK OVERVIEW</span>
                    <pre class="border-t mt-5 font-nunito whitespace-pre-wrap text-justify">{{
                        data["overview"]
                    }}</pre>
                </div>
            </div>
            <!-- Right-side -->
            <div class="flex-col flex-1 hidden-lg hidden-sm bg-slate-600"></div>
            <div class="flex-row flex-initial w-[26rem] hidden-sm hidden-md">
                <div class="flex-col ml-[3rem] mr-[7.5rem] text-black">
                    <!-- Service Description boxes -->
                    <div class="flex justify-start border hover:bg-gray-200">
                        <img
                            class="h-8 m-4 ml-6"
                            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/i-prod-ship.png?1702443694490'"
                        /><span class="flex items-center">Nationwide Shipping</span>
                    </div>
                    <div class="flex justify-start border-b border-x hover:bg-gray-200">
                        <img
                            class="h-8 m-4 ml-6"
                            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/i-prod-cart.png?1702443694490'"
                        /><span class="flex items-center">Fast Shipping: Same day Delivery</span
                        >
                    </div>
                    <div class="flex justify-start border-b border-x hover:bg-gray-200">
                        <img
                            class="h-8 m-4 ml-6"
                            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/i-prod-exchange.png?1702443694490'"
                        /><span class="flex items-center">Exchange in 48 hours</span>
                    </div>
                    <div class="flex justify-start border-b border-x hover:bg-gray-200">
                        <img
                            class="h-8 m-4 ml-6"
                            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/settings-tools.png?1702443694490'"
                        /><span class="flex items-center my-4">
                            Repay 1/3 the purchase price of books returns in good condition</span>
                    </div>
                    <div class="flex justify-start border-b border-x hover:bg-gray-200">
                        <img
                            class="h-8 m-4 ml-6"
                            :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/tag.png?1702443694490'"
                        />
                        <span class="flex items-center my-4">Free Shipping for orders >500k in Hanoi, or >800k outside Hanoi</span>
                    </div>
                    <!-- Contact -->
                    <div class="font-bold text-lg border-b my-4">CAN'T FIND US IN STOCK?</div>
                    <div class="font-light text-white text-xs bg-yellow-400 rounded py-3 flex justify-center hover:bg-red-600">
                        Ordering Books
                    </div>
                    <div class="font-bold text-lg border-b my-4">FIND US ON FACEBOOK</div>
                    <a
                        class="text-white font-bold bg-yellow-400 rounded py-3 flex justify-center hover:bg-red-600"
                        href="https://www.facebook.com/BookwormHanoi/"
                        target="_blank"
                    >
                        >> The Bookworm Hanoi
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
