import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RealHomePage from "./pages/RealHomePage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name: "home",
            component: RealHomePage
        },
        {
            path:"/home",
            name: "homepage",
            component: HomePage
        }
    ]
})

export {router};