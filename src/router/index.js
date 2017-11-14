import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import List from '@/components/List'
import EditText from '@/components/EditText'
import Grid from '@/components/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/edittext',
      name: 'EditText',
      component: EditText
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
