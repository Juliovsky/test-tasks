import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Game from '@/views/GamePage.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/game-page',
    name: 'game',
    component: Game,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
