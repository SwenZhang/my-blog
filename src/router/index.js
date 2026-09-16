import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/posts', name: 'posts', component: PostsView },
    { path: '/posts/:slug', name: 'post', component: PostView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
})

export default router
