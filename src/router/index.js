import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import Work from "../views/Work.vue"
import Project_Thermal from "../views/Project_Thermal.vue"
import Project_Filter from "../views/Project_Filter.vue"
import Project_Travel from "../views/Project_Travel.vue"
import Project_SwingLed from "../views/Project_SwingLed.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: "Jayden Website"}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {title:"Jayden Website - About"}
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
    meta: {title:"Jayden Website - Work"}
  },
  {
    path: '/project_thermal',
    name: 'Project_Thermal',
    component: Project_Thermal,
    meta: {title:"Jayden Website - VR熱觸覺遊戲"}
  },
  {
    path: '/project_filter',
    name: 'Project_Filter',
    component: Project_Filter,
    meta: {title:"Jayden Website - AR聖誕互動濾鏡"}
  },
  {
    path: '/project_travel',
    name: 'Project_Travel',
    component: Project_Travel,
    meta: {title:"Jayden Website - 哩趣兜位乘"}
  },
  {
    path: '/project_swingLed',
    name: 'Project_SwingLed',
    component: Project_SwingLed,
    meta: {title:"Jayden Website - 搖擺星火"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  window.document.title = to.meta.title;
  next()
})
export default router
