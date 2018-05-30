import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import Demo4 from '@/components/Demo4'
import Demo5 from '@/components/Demo5'
import Demo6 from '@/components/Demo6'
import Demo7 from '@/components/Demo7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'Demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'Demo4',
      component: Demo4
    },
    {
      path: '/demo5',
      name: 'Demo5',
      component: Demo5
    },
    {
      path: '/demo6',
      name: 'Demo6',
      component: Demo6
    },
    {
      path: '/demo7',
      name: 'Demo7',
      component: Demo7
    }
  ]
})
