import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home/HomeFather.vue"),
    children:[
      {
        path:"/home",
        redirect: "/home/film",
      },
      {
        path:"/home/film",
        component:()=>import("../views/home/father/HomeNav.vue")
      },
      {
        path:"/home/manage",
        component:()=>import("../views/home/father/HomeManage.vue")
      },
      {
        path:"/home/custom",
        component:()=>import("../views/home/father/HomeCustom.vue")
      },
      {
        path:"/home/data",
        component:()=>import("../views/home/father/HomeData.vue")
      },
    ]
  },
  {
    path: "/login",
    component: () => import("../views/LogIn/LogIn.vue"),

  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next)=>{
  if(to.meta.requireLogin){
      if(localStorage.getItem("token")){ 
          next()
      }else{
          next("/login")
      }
  }else{
      next()
  }
})

export default router