<script setup>
import axios from "axios";
const orders = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/order-history", {
            withCredentials: true,
        });
        orders.value = await response.data;
        console.log(orders.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US");
};
const user = ref(null);
</script>

<template>
    <div>
        <Header @user="(u) => (user = u)"></Header>
        <div class="flex flex-row font-bold ml-[8rem]">
            <div class="">
                <div class="text-xl font-light my-4">ACCOUNT INFORMATION</div>
                <div class="text-sm my-3">Hi, {{ user.name }}</div>
                <div class="my-3">Recently Order(s)</div>
                <table class="">
                    <thead class="border-y text-xs bg-slate-200 min-w-80">
                        <tr>
                            <th class=""></th>
                            <th class="text-center p-2">OrderID</th>
                            <th class="text-center w-28 px-4">Date</th>
                            <th class="text-center w-28">Total</th>
                            <th class="text-center w-32">Payment Status</th>
                            <th class=""></th>
                        </tr>
                    </thead>
                    <tbody class="border-b" v-if="orders.length > 0">
                        <tr v-for="(o, index) in orders" class="border-b font-light">
                            <td class="p-4 border-r">{{ index + 1 }}</td>
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
            <!-- <div class="bg-slate-200">
                <div>MY ACCOUNT</div>
                <div>Name:</div>
                <div>Address's list</div>
            </div> -->
        </div>
    </div>
</template>
