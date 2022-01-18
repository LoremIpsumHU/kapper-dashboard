import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/home.vue"
import reserveren from "../views/reserveren.vue"
import error from "../views/error.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: '/:pathMatch(.*)*',
        name: "error",
        component: error
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;