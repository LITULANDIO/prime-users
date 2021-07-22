import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue';
import DetailUser from '../views/DetailUser/DetailUser.vue';
import MyFavorites from '../views/Myfavorites/MyFavorites.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/detail-user/:id',
    name: 'DetailUser',
    component: DetailUser
  },
  {
    path: '/my-favorites',
    name: 'MyFavorites',
    component: MyFavorites
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
