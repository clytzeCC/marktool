import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Hello from '@/components/home/Hello'
import Leader from '@/components/home/Leader'
import User from '@/components/home/User'
import Manager from '@/components/home/Manager'
import U from '@/components/mark/U'
import L from '@/components/mark/L'
import database from '@/components/mark/user_home/database'
import download from '@/components/mark/user_home/download'
import UserMark from '@/components/mark/UserMark'
import vueRsource from 'vue-resource'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 
Vue.use(ElementUI);
 
Vue.use(vueRsource);

Vue.use(Router);

Vue.prototype.$ajax=axios;
Vue.prototype.$qs = qs;
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component:Register 
    },  
    {
      path:'/',
      redirect:'/Hello'
    },
    {
      path: '/Manager',
      name: 'Manager',
      component:Manager
    },
    {
      path: '/Hello',
      name: 'Hello',
      component:Hello 
    },
    {
      path: '/Leader',
      name: 'Leader',
      component:Leader 
    },
    {
      path: '/User',
      name: 'User',
      component:User
    },
    {
      path:'/U',
      name:'U',
      component:U,
      children:[
        {
          path: '/U/database',
          name: 'database',
          component: database,
        },{
          path:'/U/download',
          name:'download',
          component:download,
        }
      ]
    },
    {
      path:'/L',
      name:'L',
      component:L,
    },
    {
      path:'/UserMark',
      name:'UserMark',
      component:UserMark,
    }
  ]
})
