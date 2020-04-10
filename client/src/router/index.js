import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/404', name: 'NotFound', component: NotFound },  
  { path: '/*', redirect: '/404' }, 

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
