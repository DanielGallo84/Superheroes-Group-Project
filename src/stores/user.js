import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {

    const objectos = reactive (
        {
            username: "admin@gmail.com",
            password: "myPassword",
            isAuthenticated: false
        }

    )
    return { useAuthStore }
})  