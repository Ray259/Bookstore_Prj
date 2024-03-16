import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => {
        const user = {};
        return user;
    },
    actions: {
        async getUserProfile() {
            try {
                const response = await axios.get("http://localhost:8080/api/user-profile", {
                    withCredentials: true,
                });
                this.user = response.data.name;
            } catch (error) {
                console.error("Error fetching user data:", error.response.data);
            }
        },
    },
});
