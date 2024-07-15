import { defineStore } from "pinia";

const store = defineStore("piniaStore", {
    state() {
        return {
            theme: 'light',
            isActivePage: null,
            currentUser: {}
        }
    },
    getters: {
        getUserInfo(state) {
            return ` User ID : ${state.currentUser.id} User Name : ${state.currentUser.fullName}`
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
        },
        setUserInfo(id, fullName) {
            this.currentUser.id = id;
            this.currentUser.fullName = fullName;
        }
    },
    persist: true
});

export default store;