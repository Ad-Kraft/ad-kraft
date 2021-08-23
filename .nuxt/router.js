import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ff1e53b = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _69c2b5a0 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _7ab40bbe = () => interopDefault(import('../pages/case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _aeb11bd2 = () => interopDefault(import('../pages/kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _aa386e04 = () => interopDefault(import('../pages/o-nama.vue' /* webpackChunkName: "pages/o-nama" */))
const _37885b9e = () => interopDefault(import('../pages/usluge.vue' /* webpackChunkName: "pages/usluge" */))
const _6fbb458e = () => interopDefault(import('../pages/usluge/service-details.vue' /* webpackChunkName: "pages/usluge/service-details" */))
const _1bbf51ac = () => interopDefault(import('../pages/usluge/service-details copy.vue' /* webpackChunkName: "pages/usluge/service-details copy" */))
const _0d6f87be = () => interopDefault(import('../pages/usluge/service-details copy 2.vue' /* webpackChunkName: "pages/usluge/service-details copy 2" */))
const _0d7d9f3f = () => interopDefault(import('../pages/usluge/service-details copy 3.vue' /* webpackChunkName: "pages/usluge/service-details copy 3" */))
const _0d8bb6c0 = () => interopDefault(import('../pages/usluge/service-details copy 4.vue' /* webpackChunkName: "pages/usluge/service-details copy 4" */))
const _0d99ce41 = () => interopDefault(import('../pages/usluge/service-details copy 5.vue' /* webpackChunkName: "pages/usluge/service-details copy 5" */))
const _0da7e5c2 = () => interopDefault(import('../pages/usluge/service-details copy 6.vue' /* webpackChunkName: "pages/usluge/service-details copy 6" */))
const _0db5fd43 = () => interopDefault(import('../pages/usluge/service-details copy 7.vue' /* webpackChunkName: "pages/usluge/service-details copy 7" */))
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
    path: "/blog",
    component: _2ff1e53b,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _69c2b5a0,
    name: "blog-details"
  }, {
    path: "/case-details",
    component: _7ab40bbe,
    name: "case-details"
  }, {
    path: "/kontakt",
    component: _aeb11bd2,
    name: "kontakt"
  }, {
    path: "/o-nama",
    component: _aa386e04,
    name: "o-nama"
  }, {
    path: "/usluge",
    component: _37885b9e,
    name: "usluge",
    children: [{
      path: "service-details",
      component: _6fbb458e,
      name: "usluge-service-details"
    }, {
      path: "service-details%20copy",
      component: _1bbf51ac,
      name: "usluge-service-details copy"
    }, {
      path: "service-details%20copy%202",
      component: _0d6f87be,
      name: "usluge-service-details copy 2"
    }, {
      path: "service-details%20copy%203",
      component: _0d7d9f3f,
      name: "usluge-service-details copy 3"
    }, {
      path: "service-details%20copy%204",
      component: _0d8bb6c0,
      name: "usluge-service-details copy 4"
    }, {
      path: "service-details%20copy%205",
      component: _0d99ce41,
      name: "usluge-service-details copy 5"
    }, {
      path: "service-details%20copy%206",
      component: _0da7e5c2,
      name: "usluge-service-details copy 6"
    }, {
      path: "service-details%20copy%207",
      component: _0db5fd43,
      name: "usluge-service-details copy 7"
    }]
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
