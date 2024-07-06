import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/Main.vue";
import Search from "@/components/Index.vue";
import NewDtp from "@/components/NewDtp.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
          path:'/',
          redirect:'/main'
        },
        {
            path:'/main',
            component:Main
        },
        {
            path: '/index',
            component: Search
        },
        {
            path:'/newDtp',
            component:NewDtp
        }
    ]
})



export default router