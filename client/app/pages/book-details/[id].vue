<script setup>
import axios from "axios";

const { id } = useRoute().params;
let data = ref([]);
let formattedFormat = ref(null);
let formattedCondition = ref(null);
let formattedPrice = ref(null);

let quantity = ref();

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { isbn: id },
        });
        data.value = await response.data;
        formattedPrice = data.value.price.toLocaleString("de-DE");
        formattedCondition = data.value.condition.toUpperCase();
        formattedFormat = data.value.format.toUpperCase();
        console.log(formattedPrice);
        await console.log(data.value);
    } catch (error) {
        console.error(error);
    }
});

const addToCart = async () => {
    try {
        await axios.post(
            "http://localhost:8080/api/add-to-cart",
            {
                isbn: id,
                quantity: quantity.value.quantity,
            },
            { withCredentials: true }
        );
        await navigateTo("/account/cart");
    } catch (error) {
        console.error(error);
    }
};

const buy = () => {};
</script>

<template>
    <Header></Header>
    <div class="font-light text-sm">
        <!-- Home > Category > Name -->
        <BreadCrumb :first="data.category" :name="data.name" />
        <!-- Main -->
        <div class="flex flex-row mt-4">
            <!-- Details -->

            <Container>
                <!-- Image -->
                <template #left>
                    <div class="flex-initial w-[16rem]">
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
                </template>
                <!-- Information -->
                <div class="flex-col flex-1">
                    <div class="border-b text-3xl font-nunito font-semibold">
                        {{ data.name }}
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <span>By: </span
                            ><span class="text-red-500">{{ data.author }}</span>
                        </div>
                        <div>
                            <span>Category: </span
                            ><span class="text-red-500">{{ data.category }}</span>
                        </div>
                    </div>
                    <div class="flex justify-between border-b">
                        <div class="text-3xl text-red-600 font-bold mt-2 pb-2">
                            {{ formattedPrice }}₫
                        </div>
                        <div class="mt-4">
                            <span class="text-white bg-yellow-400 px-2 py-1 rounded"
                                >Availability: {{ data.amounts }}</span
                            >
                        </div>
                    </div>
                    <div class="my-2">
                        <font-awesome-icon icon="fa fa-check" class="custom-bullet" />
                        <span class="font-bold">Publisher: </span
                        ><span>{{ data.publisher }}</span>
                    </div>
                    <div class="mb-2">
                        <font-awesome-icon icon="fa fa-check" class="custom-bullet" />
                        <span class="font-bold">Release Date: </span
                        ><span>{{ data.release }}</span>
                    </div>
                    <div class="mb-6">
                        <font-awesome-icon icon="fa fa-check" class="custom-bullet" />
                        <span class="font-bold">ISBN: </span><span>{{ data.isbn }}</span>
                    </div>
                    <!-- Format and Condition -->
                    <div class="flex justify-start mb-5">
                        <div class="flex flex-col mr-2">
                            <div>Format</div>
                            <div
                                class="border-[2px] border-red-600 hover:text-white hover:bg-red-600 font-bold text-xs p-2 mt-2"
                            >
                                {{ formattedFormat }}
                            </div>
                        </div>
                        <div class="flex flex-col items-start">
                            <div>Condition</div>
                            <div
                                class="border-[2px] border-red-600 hover:text-white hover:bg-red-600 font-bold text-xs p-2 mt-2"
                            >
                                {{ formattedCondition }}
                            </div>
                        </div>
                    </div>
                    <!-- Buy/Add to Cart -->
                    <div class="text-xs font-bold mb-2">QUANTITY</div>
                    <div class="flex flex-row">
                        <QuantityButton
                            @quantity="(q) => (quantity = q)"
                            @click="buy()"
                        ></QuantityButton>
                        <button class="text-white bg-red-600 text-lg mx-2 px-2 py-2 rounded">
                            Buy Now
                        </button>
                        <button
                            class="text-white bg-yellow-400 text-lg font-bold px-4 py-2 rounded"
                            @click="addToCart()"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>

                <template #bottom>
                    <!-- Overview -->
                    <div class="flex-initial w-[50rem] font-normal">
                        <span class="text-red-600 text-2xl font-bold">BOOK OVERVIEW</span>
                        <pre
                            class="border-t mt-5 font-nunito whitespace-pre-wrap text-justify"
                            >{{ data.overview }}</pre
                        >
                        <div class="mb-[5rem] mt-[1rem]">
                            <span class="font-bold">Author: </span
                            ><span>{{ data.author }}</span>
                        </div>
                        <div class="mb-[1rem]">
                            <span class="font-bold">Publisher: </span
                            ><span>{{ data.publisher }}</span>
                        </div>
                        <div class="mb-[1rem]">
                            <span class="font-bold">Release Date: </span
                            ><span>{{ data.release }}</span>
                        </div>
                        <div>
                            <span class="font-bold">ISBN: </span><span>{{ data.isbn }}</span>
                        </div>
                    </div>
                </template>

                <template #right>
                    <!-- Right-side -->
                    <div class="flex-col flex-1 hidden-lg hidden-sm"></div>
                    <div class="flex-row flex-initial hidden-sm hidden-md">
                        <div class="flex-col">
                            <!-- Service Description boxes -->
                            <div class="flex justify-start border hover:bg-gray-200">
                                <img
                                    class="h-8 m-4 ml-6"
                                    :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/i-prod-ship.png?1702443694490'"
                                /><span class="flex items-center">Nationwide Shipping</span>
                            </div>
                            <div
                                class="flex justify-start border-b border-x hover:bg-gray-200"
                            >
                                <img
                                    class="h-8 m-4 ml-6"
                                    :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/i-prod-cart.png?1702443694490'"
                                /><span class="flex items-center"
                                    >Fast Shipping: Same day Delivery</span
                                >
                            </div>
                            <div
                                class="flex justify-start border-b border-x hover:bg-gray-200"
                            >
                                <img
                                    class="h-8 m-4 ml-6"
                                    :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/i-prod-exchange.png?1702443694490'"
                                /><span class="flex items-center">Exchange in 48 hours</span>
                            </div>
                            <div
                                class="flex justify-start border-b border-x hover:bg-gray-200"
                            >
                                <img
                                    class="h-8 m-4 ml-6"
                                    :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/settings-tools.png?1702443694490'"
                                /><span class="flex items-center my-4">
                                    Repay 1/3 the purchase price of books returns in good
                                    condition</span
                                >
                            </div>
                            <div
                                class="flex justify-start border-b border-x hover:bg-gray-200"
                            >
                                <img
                                    class="h-8 m-4 ml-6"
                                    :src="'https://bizweb.dktcdn.net/100/326/228/themes/683227/assets/tag.png?1702443694490'"
                                />
                                <span class="flex items-center my-4"
                                    >Free Shipping for orders >500k in Hanoi, or >800k outside
                                    Hanoi</span
                                >
                            </div>
                            <!-- Contact -->
                            <SubscribeBlock></SubscribeBlock>
                        </div>
                    </div>
                </template>
            </Container>
        </div>
    </div>
</template>
