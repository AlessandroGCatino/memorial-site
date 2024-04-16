import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RealHomePage from "./pages/RealHomePage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name: "home",
            component: HomePage
        },
        {
            path:"/home",
            name: "homepage",
            component: RealHomePage
        }
        
    ]
})

export {router};