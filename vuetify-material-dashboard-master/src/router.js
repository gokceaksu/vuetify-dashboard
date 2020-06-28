import Vue from 'vue'
import Router from 'vue-router'
// import { TokenService } from './services/token.service'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/index',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Kullanıcılar',
          path: 'pages/user',
          // component: () => import('@/views/dashboard/pages/UserProfile'),
          component: () => import('@/views/dashboard/pages/User'),
        },
        {
          name: 'Takvim',
          path: 'pages/calendar',
          component: () => import('@/views/dashboard/pages/Calendar'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Login'),
    },
  ],
})
/*
router.beforeEach((to, from, next) => {
  var loggedIn = !!TokenService.getToken()

  if (!loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath },
      // Store the full path to redirect the user to after login
    })
  }
  // Do not allow user to visit login page if they are logged in
  if (loggedIn) {
    return next('/')
  }
  next()
})
*/
export default router
