import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Dash1 from '@/views/Dash/Dash1.vue'
import Dash2 from '@/views/Dash/Dash2.vue'
import Dash3 from '@/views/Dash/Dash3.vue'
import Blog from '../views/Blog.vue'
import Service from '@/views/Service.vue'
import MyAccount from '../views/My-Account.vue'
import Weather from "../components/widgets/Weather";
import Weather5hours from "../components/widgets/Weather5hours";
import WeatherDays from "../components/widgets/WeatherDays";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/dashboard/:id', component: Dashboard,
  children: [
    {
      path: 'dash1',
      name: 'Dash1',
      component: Dash1
    },
    {
      path: 'dash2',
      name: 'Dash2',
      component: Dash2,
    },
    {
      path: 'dash3',
      name: 'Dash3',
      component: Dash3,
    },
  ]
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
  },

  {
    path: '/services',
    name:'Services',
    component: Service
  },
  {
    path: '/weather5hours',
    name:'Weather5hours',
    component: Weather5hours
  },
  {
    path: '/weatherDays',
    name: 'WeatherDays',
    component: WeatherDays
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
