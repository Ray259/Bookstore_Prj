<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

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

const update = async () => {
    //console.log(updatedCart);
    for (let i = 0; i < updatedCart.value.length; i++) {
        console.log(updatedCart.value[i].q.changes);
        if (updatedCart.value[i].q.changes != 0)
            try {
                //console.log(updatedCart.value[i].q.quantity);
                console.log({
                    isbn: updatedCart.value[i].isbn,
                    quantity: updatedCart.value[i].q.quantity,
                });
                const response = await axios.post(
                    "http://localhost:8080/api/update-cart",
                    {
                        isbn: updatedCart.value[i].isbn,
                        quantity: updatedCart.value[i].q.quantity,
                    },
                    { withCredentials: true }
                );
                //await console.log(response);
                await navigateTo("/account/cart", { replace: true });
            } catch (error) {
                console.error("Error updating cart:", error);
            }
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
        navigateTo("/account/cart");
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};
</script>

<template>
    <Header></Header>
    <div class="mx-[8rem] text-sm">
        <div class="py-6 text-xl">CART</div>

        <div v-if="cart">
            <table class="table-fixed">
                <thead class="border-y text-xs bg-slate-50">
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
                        <td class="text-left">{{ c.bookInfo.price * c.quantity }}</td>
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
            <div class="flex flex-grow flex-row justify-between bg-slate-100">
                <button
                    @click="navigateTo('/')"
                    class="p-2 text-xs hover:text-white bg-white hover:bg-red-600 m-2 border"
                >
                    CONTINUE SHOPPING
                </button>
                <button
                    @click="update"
                    class="p-2 text-xs bg-white hover:text-white hover:bg-red-600 m-2 border"
                >
                    Update quantity
                </button>
            </div>
        </div>
        <div v-else>No products in your cart. Come back shop to buy.</div>
    </div>
</template>
