import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import GoodsView from "@/views/GoodsView";
import GoodsInfo from "@/components/GoodsInfo";
import HomeView from "@/views/HomeView";
import ThreeDView from "@/views/ThreeDView";

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/goods',
    name: 'GoodsView',
    component: GoodsView,
    children:   [
      {
        path: '/goodsInfo',
        name: 'GoodsInfo',
        component: GoodsInfo
      },
    ]
  },
  {
    path: '/three',
    name: 'ThreeDView',
    component: ThreeDView
  }
]

const router = new VueRouter({
  routes
})

export default router
