import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import aboutView from "@/views/AboutView.vue";
import worksView from "@/views/WorksView.vue";
import notFound from "@/views/NotFoundView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      footerStyle:'footer',
      imgName:"mainImage"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView,
    meta:{
      footerStyle:'footer footer--black',
      imgName:"aboutImage"
    }
  },
  {
    path: '/works',
    name: 'works',
    component: worksView,
    meta:{
      footerStyle:'footer footer--black'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component:notFound,
    meta:{
      footerStyle:'footer',
      imgName:"notFound"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
