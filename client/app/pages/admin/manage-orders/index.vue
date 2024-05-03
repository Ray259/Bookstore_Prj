<script setup>
import axios from "axios";
definePageMeta({
    layout: "admin",
});
const orders = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/orders/getAll", {
            withCredentials: true,
        });
        orders.value = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
</script>
<template>
    <div class="mt-20">
        Orders
        <table class="">
            <thead class="border-y text-xs bg-slate-200 min-w-80">
                <tr>
                    <th class="text-center p-2">UserId</th>
                    <th class="text-center p-2">OrderID</th>
                    <th class="text-center w-28 px-4">Date</th>
                    <th class="text-center w-28">Total</th>
                    <th class="text-center w-32">Payment Status</th>
                    <th class=""></th>
                </tr>
            </thead>
            <tbody class="border-b" v-if="orders.length > 0">
                <tr v-for="(o, index) in orders" class="border-b font-light">
                    <td class="p-4 border-r">{{ o.userId}}</td>
                    <td class="text-sm p-2">{{ o.id }}</td>
                    <td class="p-4">
                        {{ formatDate(o.createdAt) }}
                    </td>
                    <td class="text-xs text-center text-red-600 font-bold">
                        {{ o.total.toLocaleString("de-DE") }}₫
                    </td>
                    <td class="flex justify-center p-5">
                        <Badge v-if="o.status == 'pending'" :content="o.status" />
                        <Badge
                            v-else-if="o.status == 'success'"
                            :color="'green'"
                            :content="o.status"
                        />
                        <Badge
                            v-else-if="o.status == 'denied'"
                            :color="'red'"
                            :content="o.status"
                        />
                    </td>
                    <td></td>
                </tr>
            </tbody>
            <div v-else class="m-4 font-light text-sm">No orders.</div>
        </table>
    </div>
</template>
