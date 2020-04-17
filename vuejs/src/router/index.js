import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Blog from '../views/Blog.vue'
import MyAccount from '../views/My-Account.vue'
import Weather from "../components/widgets/Weather";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard/:uid',
    name: 'Dashboard',
    component: Dashboard
  },
  {
  path: '/weather',
  name:'Weather',
  component: Weather
  },
  {
  path: '/blog',
  name:'Blog',
  component: Blog
  },
  {
  path: '/my-account',
  name:'MyAccount',
  component: MyAccount
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
