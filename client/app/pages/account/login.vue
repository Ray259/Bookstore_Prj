<template>
    <Header></Header>
    <div class="flex flex-col justify-center h-screen">
        <div class="text-xl font-bold mb-8">LOGIN</div>
        <div class="text-xl font-bold mb-8">If you have an account, please sign in below</div>
        <form class="flex flex-col" @submit.prevent="login">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">Email:</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    v-model="password"
                    required
                />
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Login
            </button>
        </form>
    </div>
</template>

<script>
function login() {}
</script>
