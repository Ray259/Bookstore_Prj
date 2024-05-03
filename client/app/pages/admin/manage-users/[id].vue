<script setup>
import axios from "axios";
definePageMeta({
    layout: "admin",
});

const { id } = useRoute().params;
const user = ref([]);
const orders = ref([]);

onMounted(async () => {
    try {
        const res1 = await axios.get("http://localhost:8080/api/user/" + id, {
            withCredentials: true,
        });
        user.value = await res1.data;
        const res2 = await axios.get("http://localhost:8080/api/order-history/" + id, {
            withCredentials: true,
        });
        orders.value = await res2.data;
    } catch (error) {
        console.error(error);
    }
});

const saveChanges = async () => {
    try {
        const response = await axios.post(
            "http://localhost:8080/api/users/update",
            user.value,
            {
                withCredentials: true,
            }
        );
    } catch (error) {
        console.error("Error saving changes:", error);
    }
};
const deleteUser = async () => {
    try {
        const response = await axios.post("http://localhost:8080/api/users/delete/" + id, {
            withCredentials: true,
        });
    } catch (error) {
        console.error("Error deleting book:", error);
    }
};
const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US");
};
</script>
<template>
    <div class="font-bold">ID: {{ user.id }}</div>
    <div>Email:</div>
    <div class="flex flex-row justify-between">
        <div>
            <input v-model="user.email" class="border px-2" />
            <div>Name:</div>
            <input v-model="user.name" class="border px-2" />
            <div>Phone:</div>
            <input v-model="user.phone" class="border px-2" />
        </div>
        <div>
            <div class="flex flex-col border px-4 pb-5">
                <div>Role:</div>
                <Badge v-if="user.role == 'client'" :color="'green'" :content="user.role" />
                <Badge v-else-if="user.role == 'admin'" :color="'red'" :content="user.role" />
                <div>
                    <input
                        type="radio"
                        id="client"
                        value="client"
                        v-model="user.role"
                        name="role"
                    />
                    <label for="client">client</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="admin"
                        value="admin"
                        v-model="user.role"
                        name="role"
                    />
                    <label for="admin">admin</label>
                </div>
            </div>
        </div>
    </div>
    Order History:
    <table>
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
        <tbody v-else class="m-4 font-light text-sm">
            No orders.
        </tbody>
    </table>
    <div class="flex flex-row justify-between m-10">
        <button
            class="text-white bg-red-600 text-lg font-bold px-4 py-2 rounded hover:bg-slate-800"
            @click="deleteUser"
        >
            Delete User
        </button>
        <button
            class="text-white bg-yellow-400 text-lg font-bold px-10 py-2 rounded hover:bg-red-600"
            @click="saveChanges"
        >
            Save changes
        </button>
    </div>
</template>
