<script setup>
import axios from "axios";
definePageMeta({
    layout: "admin",
});
const books = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books", {
            withCredentials: true,
        });
        books.value = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

const router = useRouter();
const edit = (isbn) => {
    router.push(`/admin/manage-books/${isbn}`);
};
</script>
<template>
    <div class="mt-20">
        <table>
            <thead class="border-y text-xs bg-slate-200 min-w-80">
                <tr>
                    <th class="text-center p-2">Image</th>
                    <th class="text-center p-2">ISBN</th>
                    <th class="text-center w-28 px-4">Name</th>
                    <th class="text-center w-28">Price</th>
                    <th class="text-center w-32">Amounts</th>
                    <th class=""></th>
                </tr>
            </thead>
            <tbody class="border-b" v-if="books.length > 0">
                <tr
                    v-for="b in books"
                    class="border-b font-light hover:cursor-pointer hover:bg-slate-100"
                    @click="edit(b.isbn)"
                >
                    <td class="m-10">
                        <img class="w-[5rem] h-[6rem] m-3 border" :src="b.image" />
                    </td>
                    <td class="text-sm p-2">{{ b.isbn }}</td>
                    <td class="p-4">
                        {{ b.name }}
                    </td>
                    <td class="text-xs text-center text-red-600 font-bold">
                        {{ b.price.toLocaleString("de-DE") }}₫
                    </td>
                    <td class="text-center text-base">
                        {{ b.amounts }}
                    </td>
                    <td></td>
                </tr>
            </tbody>
            <div v-else class="m-4 font-light text-sm">No books.</div>
        </table>
    </div>
</template>
