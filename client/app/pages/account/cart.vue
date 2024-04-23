<script setup>
import axios from "axios";
const router = useRouter();

let cart = ref([]);
let updatedCart = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/my-cart", {
            withCredentials: true,
        });
        cart.value = await response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

const total = ref(
    computed(() => {
        return cart.value.reduce((acc, item) => {
            return acc + item.bookInfo.price * item.quantity;
        }, 0);
    })
);

const update = async () => {
    //console.log(updatedCart);
    for (let i = 0; i < updatedCart.value.length; i++) {
        if (updatedCart.value[i].q.changes != 0)
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/update-cart",
                    {
                        isbn: updatedCart.value[i].isbn,
                        quantity: updatedCart.value[i].q.quantity,
                    },
                    { withCredentials: true }
                );
                // router.push("/account/cart");
                reloadNuxtApp();
            } catch (error) {
                console.error("Error updating cart:", error);
            }
    }
};

const order = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/place-order", {
            withCredentials: true,
        });
        router.push("/account/");
    } catch (error) {
        console.error("Error ordering:", error);
    }
};

const deleteItem = async (isbn) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/delete-from-cart",
            {
                isbn: isbn,
            },
            {
                withCredentials: true,
            }
        );
        reloadNuxtApp();
        // navigateTo("/account/cart");
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};
</script>

<template>
    <Header></Header>
    <div class="mx-[8rem] text-sm relative">
        <div class="py-6 text-2xl">CART</div>

        <div v-if="cart.length > 0">
            <table class="table-fixed">
                <thead class="border-y text-xs bg-slate-200">
                    <tr>
                        <th class="w-1/6"></th>
                        <th class="text-left w-1/3 py-2">Product</th>
                        <th class="text-left w-1/6">Price</th>
                        <th class="text-left w-1/6">Quantity</th>
                        <th class="text-left w-1/4">Estimated Total</th>
                        <th class="w-1/6"></th>
                    </tr>
                </thead>
                <tbody class="border-b">
                    <tr v-for="c in cart" class="border-b">
                        <td class="m-10">
                            <img
                                class="w-[5rem] h-[6rem] m-3 border"
                                :src="c.bookInfo.image"
                            />
                        </td>
                        <td class="text-left">
                            <NavItem
                                :name="c.bookInfo.name"
                                :link="'/book-details/' + c.bookInfo.isbn"
                            ></NavItem>
                            <div class="text-xs text-slate-500">
                                {{ c.bookInfo.format }} /
                                {{ c.bookInfo.condition }}
                            </div>
                        </td>
                        <td class="text-left text-xs text-red-600">
                            {{ c.bookInfo.price.toLocaleString("de-DE") }}₫
                        </td>
                        <td class="text-left">
                            <QuantityButton
                                :defaultQuantity="c.quantity"
                                @quantity="
                                    (q) => updatedCart.push({ q, isbn: c.bookInfo.isbn })
                                "
                            ></QuantityButton>
                        </td>
                        <td class="text-left">
                            {{ (c.bookInfo.price * c.quantity).toLocaleString("de-DE") }}
                        </td>
                        <td>
                            <span
                                @click="deleteItem(c.bookInfo.isbn)"
                                class="font-bold border-2 border-slate-600 px-[6px] rounded-full hover:border-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
                                >x</span
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="font- mb-10">No products in your cart. Come back shop to buy.</div>
        <div class="flex flex-grow flex-row justify-between bg-slate-200">
            <button
                @click="navigateTo('/')"
                class="p-2 text-xs hover:text-white bg-slate-50 hover:bg-red-600 m-2 border"
            >
                CONTINUE SHOPPING
            </button>
            <button
                v-if="cart.length > 0"
                @click="update"
                class="p-2 text-xs bg-slate-50 hover:text-white hover:bg-red-600 m-2 border"
            >
                Update quantity
            </button>
        </div>
        <div v-if="cart.length > 0" class="flex justify-end">
            <div class="flex-col">
                <div class="border-b text-base my-6">TOTAL</div>
                <div class="flex justify-between font-bold my-4">
                    Sub-total
                    <div class="text-red-600">{{ total.toLocaleString("de-DE") }}₫</div>
                </div>
                <button
                    @click="order"
                    class="bg-red-600 text-white text-xl hover:bg-slate-800 py-5 px-16"
                >
                    Proceed To Check Out
                </button>
            </div>
        </div>
    </div>
</template>
