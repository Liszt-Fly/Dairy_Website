import { createRouter, createWebHashHistory, } from 'vue-router'

import Main from '../views/Main.vue'
import SplashPage from '../views/SplashPage.vue'
import Map from '../views/Map.vue'
import News from "../views/News.vue"
import Rank from "../views/Rank.vue"
import Gallery from "../views/Gallery.vue"
import Technology from "../views/Technology.vue"
import about from "../views/About.vue"
const routes = [
    { path: "/", component: SplashPage },
    { path: "/main", component: Main },
    { path: "/map", component: Map },
    { path: "/news", component: News },
    {
        path: "/rank", component: Rank
    },
    {
        path: "/gallery", component: Gallery
    }, {
        path: "/technology", component: Technology
    },
    {
        path: "/about", component: about
    }

]


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes

})

export default router
