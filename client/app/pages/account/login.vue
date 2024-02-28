<script setup>
import axios from "axios";

const router = useRouter();
let email = ref("");
let password = ref("");
const login = async () => {
    try {
        await axios.post(
            "http://localhost:8080/api/login",
            {
                email: email.value,
                password: password.value,
            },
            {
                withCredentials: true,
            }
        );
        router.push(`/`)
    } catch (error) {
        console.error("Error loging in:", error);
    }
};

// const google = async () => {
//     await axios.get("http://localhost:8080/api/auth/google");
// };
</script>
<template>
    <Header></Header>
    <div class="flex flex-row mt-[1rem] m-[8rem] text-sm">
        <!-- Register section -->
        <div class="section mr-8">
            <div class="font-bold">Register</div>
            <div class="mb-2">
                Create an account to manage orders, and simplify billing and shipping
                information.
            </div>
            <button class="main-button">Create Account</button>
        </div>
        <!-- Login section -->
        <div class="section">
            <div class="font-bold">Login</div>
            <div class="mb-8">If you have an account, please sign in below.</div>
            <form class="flex flex-col" @submit.prevent="login">
                <div class="mb-2">
                    <label class="block text-gray-700 font-bold mb-2" for="email"
                        >Email:</label
                    >
                    <input
                        class="appearance-none border bg-white w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="email"
                        id="email"
                        v-model="email"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="password"
                        >Password:</label
                    >
                    <input
                        class="appearance-none border bg-white w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        type="password"
                        id="password"
                        v-model="password"
                        required
                    />
                </div>
                <div class="flex flex-row">
                    <button class="main-button inline-block" type="submit">Login</button>
                    <a
                        class="main-button mx-2 flex flex-row cursor-pointer"
                        href="http://localhost:8080/api/auth/google"
                    >
                        <img
                            class="h-4 w-4 mr-2"
                            :src="'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png'"
                        />
                        <span>Continue with Google</span>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.main-button {
    padding: 6px;
    padding-inline: 16px;
    width: fit-content;
    border: 1px solid;
    border-color: grey;
    background-color: white;
}

.main-button:hover {
    color: white;
    border: none;
    background-color: rgb(220 38 38);
}

.section {
    display: flex;
    flex-direction: column;
    width: 50%;
    --tw-bg-opacity: 1;
    background-color: rgb(248 250 250 / var(--tw-bg-opacity));
    border-width: 1px;
    padding-block: 3rem;
    padding-inline: 3rem;
}
</style>
