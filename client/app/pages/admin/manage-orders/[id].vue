<script setup>
import axios from "axios";
definePageMeta({
    layout: "admin",
});
const { id } = useRoute().params;
const order = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/order-details/"+id, {
            params: { isbn: id },
        });
        order.value = await response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>
<template>
    <div class="mt-20">
        <table>
            <thead class="border-y text-xs bg-slate-200 min-w-80">
                <tr>
                    <th class="text-center p-2">Image</th>
                    <th class="text-center p-2">ISBN</th>
                    <th class="text-center w-28 px-4">Name</th>
                    <th class="text-center w-28">Total</th>
                    <th class="text-center w-32">Quantity</th>
                    <th class=""></th>
                </tr>
            </thead>
            <tbody class="border-b" v-if="order.length > 0">
                <tr
                    v-for="o in order"
                    class="border-b font-light hover:cursor-pointer hover:bg-slate-100"
                    @click="edit(b.isbn)"
                >
                    <td class="m-10">
                        <img class="w-[5rem] h-[6rem] m-3 border" :src="o.Book.image" />
                    </td>
                    <td class="text-sm p-2">{{ o.Book.isbn }}</td>
                    <td class="p-4">
                        {{ o.Book.name }}
                    </td>
                    <td class="text-xs text-center text-red-600 font-bold">
                        {{ o.price.toLocaleString("de-DE") }}₫
                    </td>
                    <td class="text-center text-base">
                        {{ o.quantity }}
                    </td>
                    <td></td>
                </tr>
            </tbody>
            <div v-else class="m-4 font-light text-sm">No orders.</div>
        </table>
        status: {{ order[0].status }}
        <div>approve </div>
        <div>deny</div>
    </div>
</template>
