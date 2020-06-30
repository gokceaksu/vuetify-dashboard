import Vue from 'vue'
import Router from 'vue-router'

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
          name: 'Index',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User',
          path: 'user',
          component: () => import('@/views/dashboard/pages/User'),
        },
        {
          name: 'Calendar',
          path: 'calendar',
          component: () => import('@/views/dashboard/pages/Calendar'),
        },
        /*
        {
          name: 'Notifications',
          path: 'notifications',
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
        }, */
      ],
      meta: {
        user: true,
      },
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/dashboard/Login'),
      meta: {
        guest: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.user)) {
      if (localStorage.getItem('access_token') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath },
          })
      } else {
        next()
      }
  } else if (to.matched.some(record => record.meta.guest)) {
      if (localStorage.getItem('access_token') == null) {
          next()
      } else {
          next({ name: 'Index' })
      }
  } else {
      next()
  }
})

export default router
