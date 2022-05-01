import { createRouter, createWebHashHistory } from 'vue-router'
import GoodsView from "@/views/GoodsView";
import GoodsInfo from "@/components/GoodsInfo";
const routes = [
  {
    path: '/goods',
    name: 'GoodsView',
    component: GoodsView,
    children:   {
      path: '/goodsInfo',
      name: 'GoodsInfo',
      component: GoodsInfo
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
