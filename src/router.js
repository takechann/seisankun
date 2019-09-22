import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signup from './components/Signup'
import Signin from './components/Signin'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // ユーザがログインされているかどうか認証．
    // もしされていないならば，ログインページにリダイレクト．
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('aaaaa')
        next()
      } else {
        console.log('bbb')
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    console.log('ccc')
    next()
  }
})

export default router
