import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        id: null,
        email: null,
        name: null,
        role: "client",
        phone: null,
        password: null,
    }),
    getters: {
        getId(state) {
            return state.id;
        },
        getEmail(state) {
            return state.email;
        },
        getName(state) {
            return state.name;
        },
        getRole(state) {
            return state.role;
        },
        getPhone(state) {
            return state.phone;
        },
        getPassword(state) {
            return state.password;
        },
    },
    actions: {
        setId(id) {
            this.id = id;
        },
        setEmail(email) {
            this.email = email;
        },
        setName(name) {
            this.name = name;
        },
        setRole(role) {
            this.role = role;
        },
        setPhone(phone) {
            this.phone = phone;
        },
        setPassword(password) {
            this.password = password;
        },
    },
});
