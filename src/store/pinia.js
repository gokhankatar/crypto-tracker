import { defineStore } from "pinia";

const store = defineStore("piniaStore", {
    state() {
        return {
            theme: 'light',
            isActivePage: null
        }
    },
    actions: {
        changeTheme() {
            this.theme === 'light'
                ? this.theme = 'dark'
                : this.theme = 'light'
        },
        setHomePage() {
            this.isActivePage = ""
        },
        setAuthPage() {
            this.isActivePage = 'auth'
        },
        setCurrenciesPage() {
            this.isActivePage = 'currencies'
        }
    },
    persist: true
});

export default store;