<script setup>
import axios from "axios";
definePageMeta({
    layout: "admin",
});
const users = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/users", {
            withCredentials: true,
        });
        users.value = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

const router = useRouter();
const edit = (id) => {
    router.push(`/admin/manage-users/${id}`);
};
</script>
<template>
    <div class="mt-20">
        <table class="">
            <thead class="border-y text-xs bg-slate-200 min-w-80">
                <tr>
                    <th class="text-center p-2">UserId</th>
                    <th class="text-center p-2">Username</th>
                    <th class="text-center w-28 px-4">Email</th>
                    <th class="text-center w-28">Phone</th>
                    <th class="text-center w-32">Role</th>
                    <th class=""></th>
                </tr>
            </thead>
            <tbody class="border-b" v-if="users.length > 0">
                <tr v-for="u in users" class="border-b font-light hover:cursor-pointer hover:bg-slate-100" @click="edit(u.id)">
                    <td class="p-4 border-r text-xs">{{ u.id }}</td>
                    <td class="text-sm p-2 text-red-600">{{ u.name }}</td>
                    <td class="p-4">
                        {{ u.email }}
                    </td>
                    <td class="text-xs text-center font-bold">
                        {{ u.phone }}
                    </td>
                    <td class="flex justify-center p-5">
                        <Badge v-if="u.role == 'client'" :color="'green'" :content="u.role" />
                        <Badge
                            v-else-if="u.role == 'admin'"
                            :color="'red'"
                            :content="u.role"
                        />
                    </td>
                    <td></td>
                </tr>
            </tbody>
            <div v-else class="m-4 font-light text-sm">No users.</div>
        </table>
    </div>
</template>
