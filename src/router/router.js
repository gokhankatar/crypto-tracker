import { createWebHistory, createRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import HomeView from "../views/HomeView.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Currencies from "../views/Currencies.vue";
import { getAuth } from "firebase/auth";

const routes = [
    {
        path: '/',
        component: HomeView,
        meta: {
            title: 'Home',
            layout: MainLayout,
            public: false
        }
    },
    {
        path: '/currencies',
        component: Currencies,
        meta: {
            title: 'Cryptocurrencies',
            layout: MainLayout,
            public: false
        }
    },
    {
        path: '/signup',
        component: Signup,
        meta: {
            title: 'Register',
            layout: AuthLayout,
            public: true
        }
    },
    {
        path: '/signin',
        component: Signin,
        meta: {
            title: 'Login',
            layout: AuthLayout,
            public: true
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

// router guard
router.beforeEach((to, from, next) => {
    if (to.meta.public) {
        next();
    } else {
        let auth = getAuth();
        if (auth.currentUser) {
            next();
        } else {
            next('/signin')
        }
    }
});

export default router;