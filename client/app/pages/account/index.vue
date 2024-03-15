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
</script>

<template>
    <div>
        <Header></Header>
        <div class="flex flex-row font-bold ml-[8rem]">
            <div class="flex-initial">
                <div class="text-xl font-light my-4">ACCOUNT INFORMATION</div>
                <div class="text-sm my-3">Hi,</div>
                <div>Recently Order(s)</div>
                <table class="">
                    <thead class="border-y text-xs bg-slate-200">
                        <tr>
                            <th class=""></th>
                            <th class="text-left p-2">OrderID</th>
                            <th class="text-left px-4">Date</th>
                            <th class="text-left w-[5rem]">Total</th>
                            <th class="text-left">Payment Status</th>
                            <th class=""></th>
                        </tr>
                    </thead>
                    <tbody class="border-b">
                        <tr v-for="(o, index) in orders" class="border-b font-light">
                            <td class="p-4 border-r">{{ index + 1 }}</td>
                            <td class="text-sm p-2">{{ o.id }}</td>
                            <td class="p-4">
                                {{ formatDate(o.createdAt) }}
                            </td>
                            <td class="text-xs text-red-600 font-bold">
                                {{ o.total.toLocaleString("de-DE") }}₫
                            </td>
                            <td class="p-3">
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
                </table>
            </div>
            <!-- <div>
                <div>MY ACCOUNT</div>
                <div>Name:</div>
                <div>Address's list</div>
            </div> -->
        </div>
    </div>
</template>
