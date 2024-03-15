<script setup>
import axios from "axios";

//Pagination
const currentPage = ref(1);
const display = computed(() => {
    return filteredBooks.value.filter((n) => {
        const [start, end] = pageRange(currentPage.value);
        return n.id >= start && n.id < end;
    });
});

const addId = (arr) => {
    arr.forEach((item, index) => {
        item.id = index;
    });
};

const pageCount = 24;
const pageRange = (p) => {
    const start = (p - 1) * pageCount;
    const end = p * pageCount;
    return [start, end];
};

//Filter

const filteredBooks = computed(() => {
    return (props.filter?.filter.format ?? []).length === 0 &&
        (props.filter?.filter.condition ?? []).length === 0 &&
        (props.filter?.filter.author ?? []).length === 0
        ? books.value
        : books.value.filter((b) => {
              return (
                  (props.filter?.filter.format ?? []).some((f) => f === b.format) ||
                  (props.filter?.filter.condition ?? []).some((c) => c === b.condition) ||
                    (props.filter?.filter.author ?? []).some((a) => a === b.author)
              );
          });
});

// Get data
let books = ref([]);
let numberOfBooks = ref(0);
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/books/query", {
            params: { genre: props.genre, category: props.category, name: props.name },
        });
        books.value = await response.data;
        addId(books.value);
        numberOfBooks.value = books.value.length;
        console.log(books.value);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

const emit = defineEmits(["books"]);
emit("books", books);

const props = defineProps({
    api: String,
    genre: String,
    category: String,
    name: String,
    filter: Object,
});
</script>

<template>
    <div class="flex flex-col">
        <span class="flex justify-center m-6"
            ><Badge :content="`Have ${filteredBooks.length} product(s).`"/></span>

        <ul class="flex flex-wrap">
            <li v-for="b in display" class="mb-4 mr-2">
                <Item
                    :name="b.name"
                    :price="b.price"
                    :author="b.author"
                    :image="b.image"
                    :isbn="b.isbn"
                />
            </li>
        </ul>

        <!-- <div>displaying: {{ display }}</div>
        <div>{{ filteredBooks }}</div> -->
        <div class="flex justify-end">
            <UPagination
                v-model="currentPage"
                :page-count="pageCount"
                :active-button="{ color: 'red' }"
                :total="filteredBooks.length"
            />
        </div>
    </div>
</template>
