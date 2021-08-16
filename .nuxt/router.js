import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46d823c4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _69c2b5a0 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _2801f8d0 = () => interopDefault(import('../pages/blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _229c5299 = () => interopDefault(import('../pages/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _7ab40bbe = () => interopDefault(import('../pages/case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _1849d1d2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2202a621 = () => interopDefault(import('../pages/service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _668ffe89 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _46d823c4,
    name: "about"
  }, {
    path: "/blog-details",
    component: _69c2b5a0,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _2801f8d0,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _229c5299,
    name: "blog-right-sidebar"
  }, {
    path: "/case-details",
    component: _7ab40bbe,
    name: "case-details"
  }, {
    path: "/contact",
    component: _1849d1d2,
    name: "contact"
  }, {
    path: "/service-details",
    component: _2202a621,
    name: "service-details"
  }, {
    path: "/",
    component: _668ffe89,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
