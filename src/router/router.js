import { createWebHistory, createRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import HomeView from "../views/HomeView.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Currencies from "../views/Currencies.vue";

const routes = [
    {
        path: '/',
        component: HomeView,
        meta: {
            title: 'Home',
            layout: MainLayout,
            admin: true
        }
    },
    {
        path: '/currencies',
        component: Currencies,
        meta: {
            title: 'Cryptocurrencies',
            layout: MainLayout,
            admin: true
        }
    },
    {
        path: '/signup',
        component: Signup,
        meta: {
            title: 'Register',
            layout: AuthLayout
        }
    },
    {
        path: '/signin',
        component: Signin,
        meta: {
            title: 'Login',
            layout: AuthLayout
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `Crypto Tracker | ${to.meta.title}`;
    next();
});

export default router;