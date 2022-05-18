import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_27bc1320 from 'nuxt_plugin_plugin_27bc1320' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_index_d04811ae from 'nuxt_plugin_index_d04811ae' // Source: .\\components\\index.js (mode: 'all')
import nuxt_plugin_pluginutils_642374ea from 'nuxt_plugin_pluginutils_642374ea' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_7d18c7d4 from 'nuxt_plugin_pluginrouting_7d18c7d4' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_4f8ab719 from 'nuxt_plugin_pluginmain_4f8ab719' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_image_2326343e from 'nuxt_plugin_image_2326343e' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_pluginclient_7e9ee3d6 from 'nuxt_plugin_pluginclient_7e9ee3d6' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_374f5544 from 'nuxt_plugin_pluginserver_374f5544' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_vueplyr_9db9a11c from 'nuxt_plugin_vueplyr_9db9a11c' // Source: ..\\plugins\\vue-plyr (mode: 'all')
import nuxt_plugin_vuescrollactive_96ef6720 from 'nuxt_plugin_vuescrollactive_96ef6720' // Source: ..\\plugins\\vue-scrollactive (mode: 'all')
import nuxt_plugin_vueeasylightboxclient_d617587e from 'nuxt_plugin_vueeasylightboxclient_d617587e' // Source: ..\\plugins\\vue-easy-lightbox.client.js (mode: 'client')
import nuxt_plugin_vuetippy_1467d320 from 'nuxt_plugin_vuetippy_1467d320' // Source: ..\\plugins\\vue-tippy.js (mode: 'all')
import nuxt_plugin_vueobservevisibility_66676af7 from 'nuxt_plugin_vueobservevisibility_66676af7' // Source: ..\\plugins\\vue-observe-visibility.js (mode: 'all')
import nuxt_plugin_vuezoomonhoverclient_2cf1dbe9 from 'nuxt_plugin_vuezoomonhoverclient_2cf1dbe9' // Source: ..\\plugins\\vue-zoom-on-hover.client.js (mode: 'client')
import nuxt_plugin_vuesilentboxclient_254c34b7 from 'nuxt_plugin_vuesilentboxclient_254c34b7' // Source: ..\\plugins\\vue-silentbox.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"makdoumin","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"hid":"author","name":"author","content":"https:\u002F\u002Fmakhdoum.in"},{"hid":"publisher","name":"publisher","content":"https:\u002F\u002Fmakhdoum.in"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Maid for Each | المخدومين"},{"hid":"og:title","name":"og:title","content":"Maid for Each | المخدومين"},{"hid":"og:description","name":"og:description","content":"موقع وثائقي لسوق العمالة المنزلية في لبنان، امتدادا للفيلم التسجيلي «مخدومين»"},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Fmakhdoum.in"},{"hid":"og:image","name":"og:image","content":"\u002Fmakhdoumin.jpg"},{"hid":"og:locale","name":"og:locale","content":"ar"},{"hid":"og:site_name","name":"og:site_name","content":"Maid for Each | المخدومين"},{"hid":"twitter:card","name":"twitter:card","content":"\u002Fmakhdoumin.jpg"},{"hid":"twitter:site","name":"twitter:site","content":"@MaherAbiSamra"},{"hid":"twitter:creator","name":"twitter:creator","content":"@MaherAbiSamra"},{"hid":"twitter:title","name":"twitter:title","content":"Maid for Each | المخدومين"},{"hid":"twitter:description","name":"twitter:description","content":"موقع وثائقي لسوق العمالة المنزلية في لبنان، امتدادا للفيلم التسجيلي «مخدومين»"},{"hid":"twitter:image","name":"twitter:image","content":"\u002Fmakhdoumin.jpg"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.9.0\u002Fjs\u002Fall.min.js","integrity":"sha512-LW9+kKj\u002FcBGHqnI4ok24dUWNR\u002Fe8sUD8RLzak1mNw5Ja2JYCmTXJTF5VpgFSw+VoBfpMvPScCo2DnKTIUjrzYw==","crossorigin":"anonymous"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_27bc1320 === 'function') {
    await nuxt_plugin_plugin_27bc1320(app.context, inject)
  }

  if (typeof nuxt_plugin_index_d04811ae === 'function') {
    await nuxt_plugin_index_d04811ae(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_642374ea === 'function') {
    await nuxt_plugin_pluginutils_642374ea(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7d18c7d4 === 'function') {
    await nuxt_plugin_pluginrouting_7d18c7d4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_4f8ab719 === 'function') {
    await nuxt_plugin_pluginmain_4f8ab719(app.context, inject)
  }

  if (typeof nuxt_plugin_image_2326343e === 'function') {
    await nuxt_plugin_image_2326343e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_7e9ee3d6 === 'function') {
    await nuxt_plugin_pluginclient_7e9ee3d6(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_374f5544 === 'function') {
    await nuxt_plugin_pluginserver_374f5544(app.context, inject)
  }

  if (typeof nuxt_plugin_vueplyr_9db9a11c === 'function') {
    await nuxt_plugin_vueplyr_9db9a11c(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollactive_96ef6720 === 'function') {
    await nuxt_plugin_vuescrollactive_96ef6720(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueeasylightboxclient_d617587e === 'function') {
    await nuxt_plugin_vueeasylightboxclient_d617587e(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetippy_1467d320 === 'function') {
    await nuxt_plugin_vuetippy_1467d320(app.context, inject)
  }

  if (typeof nuxt_plugin_vueobservevisibility_66676af7 === 'function') {
    await nuxt_plugin_vueobservevisibility_66676af7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuezoomonhoverclient_2cf1dbe9 === 'function') {
    await nuxt_plugin_vuezoomonhoverclient_2cf1dbe9(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesilentboxclient_254c34b7 === 'function') {
    await nuxt_plugin_vuesilentboxclient_254c34b7(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
