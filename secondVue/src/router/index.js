import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/views/parentChild/parent'

Vue.use(Router)

export default new Router({
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/parentChild',
      name: 'parentChild',
      component: parent
    }
  ]
})
