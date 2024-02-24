<script setup>
import axios from "axios";
let cart = ref([]);
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
</script>

<template>
    <Header></Header>
    <div class="mx-[8rem] text-sm">
        <div class="py-6 text-xl">CART</div>
        <table v-if="cart" class="table-fixed">
            <thead class="border-y text-xs bg-slate-50">
                <tr>
                    <th class="w-1/6"></th>
                    <th class="text-left w-1/3 py-2">Product</th>
                    <th class="text-left w-1/6">Price</th>
                    <th class="text-left w-1/4">Quantity</th>
                    <th class="text-left w-1/6">Estimated Total</th>
                </tr>
            </thead>
            <tbody class="border-b">
                <tr v-for="c in cart">
                    <td class="m-10"><img class="w-16" :src="c.bookInfo.image" /></td>
                    <td class="text-left">{{ c.bookInfo.name }}</td>
                    <td class="text-left text-xs text-red-600">
                        {{ c.bookInfo.price.toLocaleString("de-DE") }}₫
                    </td>
                    <td class="text-left">
                        <QuantityButton :defaultQuantity="c.quantity"></QuantityButton>
                    </td>
                    <td class="text-left">{{ c.bookInfo.price }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>No products in your cart. Come back shop to buy.</div>
    </div>
</template>
