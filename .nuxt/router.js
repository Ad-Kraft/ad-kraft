import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13e060c3 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _f285ce90 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _36527f46 = () => interopDefault(import('..\\pages\\case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _4a10d09b = () => interopDefault(import('..\\pages\\digitalni-marketing.vue' /* webpackChunkName: "pages/digitalni-marketing" */))
const _c36a174a = () => interopDefault(import('..\\pages\\drustvene-mreze.vue' /* webpackChunkName: "pages/drustvene-mreze" */))
const _00b9c678 = () => interopDefault(import('..\\pages\\graficki-dizajn.vue' /* webpackChunkName: "pages/graficki-dizajn" */))
const _20622ea9 = () => interopDefault(import('..\\pages\\hosting.vue' /* webpackChunkName: "pages/hosting" */))
const _7cad0921 = () => interopDefault(import('..\\pages\\izrada-web-stranica.vue' /* webpackChunkName: "pages/izrada-web-stranica" */))
const _4e20e98f = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _4d218286 = () => interopDefault(import('..\\pages\\o-nama.vue' /* webpackChunkName: "pages/o-nama" */))
const _36ca2d25 = () => interopDefault(import('..\\pages\\optimizacija-konverzija.vue' /* webpackChunkName: "pages/optimizacija-konverzija" */))
const _550ce3dd = () => interopDefault(import('..\\pages\\search-engine-optimizacija.vue' /* webpackChunkName: "pages/search-engine-optimizacija" */))
const _4c73d5b4 = () => interopDefault(import('..\\pages\\usluge.vue' /* webpackChunkName: "pages/usluge" */))
const _0070f401 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _13e060c3,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _f285ce90,
    name: "blog-details"
  }, {
    path: "/case-details",
    component: _36527f46,
    name: "case-details"
  }, {
    path: "/digitalni-marketing",
    component: _4a10d09b,
    name: "digitalni-marketing"
  }, {
    path: "/drustvene-mreze",
    component: _c36a174a,
    name: "drustvene-mreze"
  }, {
    path: "/graficki-dizajn",
    component: _00b9c678,
    name: "graficki-dizajn"
  }, {
    path: "/hosting",
    component: _20622ea9,
    name: "hosting"
  }, {
    path: "/izrada-web-stranica",
    component: _7cad0921,
    name: "izrada-web-stranica"
  }, {
    path: "/kontakt",
    component: _4e20e98f,
    name: "kontakt"
  }, {
    path: "/o-nama",
    component: _4d218286,
    name: "o-nama"
  }, {
    path: "/optimizacija-konverzija",
    component: _36ca2d25,
    name: "optimizacija-konverzija"
  }, {
    path: "/search-engine-optimizacija",
    component: _550ce3dd,
    name: "search-engine-optimizacija"
  }, {
    path: "/usluge",
    component: _4c73d5b4,
    name: "usluge"
  }, {
    path: "/",
    component: _0070f401,
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
