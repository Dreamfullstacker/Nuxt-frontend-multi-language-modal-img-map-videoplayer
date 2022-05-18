export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'makdoumin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/js/all.min.js',
        integrity:
          'sha512-LW9+kKj/cBGHqnI4ok24dUWNR/e8sUD8RLzak1mNw5Ja2JYCmTXJTF5VpgFSw+VoBfpMvPScCo2DnKTIUjrzYw==',
        crossorigin: 'anonymous',
      },
    ],
  },

  // router: {
  //   prefetchLinks: false,
  // },

  css: [],

  tailwindcss: {
    exposeConfig: true,
  },

  plugins: [
    { src: '~/plugins/vue-plyr' },
    { src: '~/plugins/vue-scrollactive' },
    { src: '~/plugins/vue-easy-lightbox.client.js' },
    { src: '~/plugins/vue-tippy.js' },
    { src: '~/plugins/vue-observe-visibility.js' },
    { src: '~/plugins/vue-zoom-on-hover.client.js' },
    { src: '~/plugins/vue-silentbox.client.js' },
  ],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-i18n',
    'nuxt-protected-mailto',
    [
      'nuxt-social-meta',
      {
        url: 'https://makhdoum.in',
        title: 'Maid for Each | المخدومين',
        site_name: 'Maid for Each | المخدومين',
        description:
          'موقع وثائقي لسوق العمالة المنزلية في لبنان، امتدادا للفيلم التسجيلي «مخدومين»',
        img: '/makhdoumin.jpg',
        locale: 'ar',
        twitter: '@MaherAbiSamra',
        twitter_card: '/makhdoumin.jpg',
      },
    ],
  ],

  i18n: {
    locales: [
      {
        code: 'ar',
        iso: 'ar',
        name: 'ع',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'En',
      },
    ],
    defaultLocale: 'ar',
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: 'ar',
      messages: {
        ar: require('./locales/ar.json'),
        en: require('./locales/en.json'),
      },
    },
  },

  content: {},

  build: {
    html: {
      minify: {
        decodeEntities: false,
      },
    },
  },
}
