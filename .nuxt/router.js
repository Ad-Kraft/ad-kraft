import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ff1e53b = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _69c2b5a0 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _7ab40bbe = () => interopDefault(import('../pages/case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _5ca6cd23 = () => interopDefault(import('../pages/digitalni-marketing.vue' /* webpackChunkName: "pages/digitalni-marketing" */))
const _322474e3 = () => interopDefault(import('../pages/drustvene-mreze.vue' /* webpackChunkName: "pages/drustvene-mreze" */))
const _d906c568 = () => interopDefault(import('../pages/graficki-dizajn.vue' /* webpackChunkName: "pages/graficki-dizajn" */))
const _7ae8b731 = () => interopDefault(import('../pages/hosting.vue' /* webpackChunkName: "pages/hosting" */))
const _e179f4ae = () => interopDefault(import('../pages/izrada-web-stranica.vue' /* webpackChunkName: "pages/izrada-web-stranica" */))
const _aeb11bd2 = () => interopDefault(import('../pages/kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _aa386e04 = () => interopDefault(import('../pages/o-nama.vue' /* webpackChunkName: "pages/o-nama" */))
const _4502b4a6 = () => interopDefault(import('../pages/optimizacija-konverzija.vue' /* webpackChunkName: "pages/optimizacija-konverzija" */))
const _15b25054 = () => interopDefault(import('../pages/seo.vue' /* webpackChunkName: "pages/seo" */))
const _37885b9e = () => interopDefault(import('../pages/usluge.vue' /* webpackChunkName: "pages/usluge" */))
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
    path: "/digitalni-marketing",
    component: _5ca6cd23,
    name: "digitalni-marketing"
  }, {
    path: "/drustvene-mreze",
    component: _322474e3,
    name: "drustvene-mreze"
  }, {
    path: "/graficki-dizajn",
    component: _d906c568,
    name: "graficki-dizajn"
  }, {
    path: "/hosting",
    component: _7ae8b731,
    name: "hosting"
  }, {
    path: "/izrada-web-stranica",
    component: _e179f4ae,
    name: "izrada-web-stranica"
  }, {
    path: "/kontakt",
    component: _aeb11bd2,
    name: "kontakt"
  }, {
    path: "/o-nama",
    component: _aa386e04,
    name: "o-nama"
  }, {
    path: "/optimizacija-konverzija",
    component: _4502b4a6,
    name: "optimizacija-konverzija"
  }, {
    path: "/seo",
    component: _15b25054,
    name: "seo"
  }, {
    path: "/usluge",
    component: _37885b9e,
    name: "usluge"
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
