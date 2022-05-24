import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e7c3aea = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _1d5d0e10 = () => interopDefault(import('..\\pages\\chapterfive\\index.vue' /* webpackChunkName: "pages/chapterfive/index" */))
const _9bf2dbf8 = () => interopDefault(import('..\\pages\\chapterfour\\index.vue' /* webpackChunkName: "pages/chapterfour/index" */))
const _631ea68c = () => interopDefault(import('..\\pages\\chapterthree\\index.vue' /* webpackChunkName: "pages/chapterthree/index" */))
const _31eb1dc4 = () => interopDefault(import('..\\pages\\chaptertwo\\index.vue' /* webpackChunkName: "pages/chaptertwo/index" */))
const _e66b0d92 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _cff24d46 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _51d3ab99 = () => interopDefault(import('..\\pages\\film\\index.vue' /* webpackChunkName: "pages/film/index" */))
const _74bb0d20 = () => interopDefault(import('..\\pages\\team\\index.vue' /* webpackChunkName: "pages/team/index" */))
const _8466a378 = () => interopDefault(import('..\\pages\\trailer\\index.vue' /* webpackChunkName: "pages/trailer/index" */))
const _1daae439 = () => interopDefault(import('..\\pages\\chapterthree\\index copy.vue' /* webpackChunkName: "pages/chapterthree/index copy" */))
const _00cdd456 = () => interopDefault(import('..\\pages\\chapterthree\\index2.vue' /* webpackChunkName: "pages/chapterthree/index2" */))

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
    component: _4e7c3aea,
    name: "about___ar"
  }, {
    path: "/chapterfive",
    component: _1d5d0e10,
    name: "chapterfive___ar"
  }, {
    path: "/chapterfour",
    component: _9bf2dbf8,
    name: "chapterfour___ar"
  }, {
    path: "/chapterthree",
    component: _631ea68c,
    name: "chapterthree___ar"
  }, {
    path: "/chaptertwo",
    component: _31eb1dc4,
    name: "chaptertwo___ar"
  }, {
    path: "/contact",
    component: _e66b0d92,
    name: "contact___ar"
  }, {
    path: "/en",
    component: _cff24d46,
    name: "index___en"
  }, {
    path: "/film",
    component: _51d3ab99,
    name: "film___ar"
  }, {
    path: "/team",
    component: _74bb0d20,
    name: "team___ar"
  }, {
    path: "/trailer",
    component: _8466a378,
    name: "trailer___ar"
  }, {
    path: "/chapterthree/index%20copy",
    component: _1daae439,
    name: "chapterthree-index copy___ar"
  }, {
    path: "/chapterthree/index2",
    component: _00cdd456,
    name: "chapterthree-index2___ar"
  }, {
    path: "/en/about",
    component: _4e7c3aea,
    name: "about___en"
  }, {
    path: "/en/chapterfive",
    component: _1d5d0e10,
    name: "chapterfive___en"
  }, {
    path: "/en/chapterfour",
    component: _9bf2dbf8,
    name: "chapterfour___en"
  }, {
    path: "/en/chapterthree",
    component: _631ea68c,
    name: "chapterthree___en"
  }, {
    path: "/en/chaptertwo",
    component: _31eb1dc4,
    name: "chaptertwo___en"
  }, {
    path: "/en/contact",
    component: _e66b0d92,
    name: "contact___en"
  }, {
    path: "/en/film",
    component: _51d3ab99,
    name: "film___en"
  }, {
    path: "/en/team",
    component: _74bb0d20,
    name: "team___en"
  }, {
    path: "/en/trailer",
    component: _8466a378,
    name: "trailer___en"
  }, {
    path: "/en/chapterthree/index%20copy",
    component: _1daae439,
    name: "chapterthree-index copy___en"
  }, {
    path: "/en/chapterthree/index2",
    component: _00cdd456,
    name: "chapterthree-index2___en"
  }, {
    path: "/",
    component: _cff24d46,
    name: "index___ar"
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
