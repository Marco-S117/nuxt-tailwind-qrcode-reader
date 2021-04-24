export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    title: 'Nuxt QR code reader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', property: 'description', name: 'description', content: 'OG description' },
      { hid: 'author', property: 'author', name: 'author', content: 'Marco Polino' },
      { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: 'Og Site name' },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Og Title' },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'OG description' },
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'og-image.jpg' },
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'OG Url' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/transitions.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-qrcode-reader.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    // [
    //   'nuxt-i18n', {
    //     strategy: 'no_prefix',
    //     defaultLocale: 'it',
    //     locales: [
    //       {
    //         name: 'Italiano',
    //         code: 'it',
    //         iso: 'it-IT'
    //       },
    //       {
    //         name: 'English US',
    //         code: 'en',
    //         iso: 'en-UK'
    //       }
    //     ]
    //   }
    // ]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      /* icon options */
      source: 'static/app-icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      purpose: ['any', 'maskable']
    },
    manifest: {
      name: 'OG Site name',
      short_name: 'Marco Polino Portfolio',
      description: 'OG description',
      display: 'standalone',
      background_color: '#111827',
      theme_color: '#dc2626',
      lang: 'en',
      useWebmanifestExtension: false,
    },
    meta: {
      /* meta options */
      nativeUI: true,
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: '#111827',
      favicon: 'favicon.ico',
      name: 'Nuxt QR code reader',
      author: 'Marco Polino',
      description: 'OG description',
      lang: 'it',
      ogType: 'website',
      ogSiteName: 'Og Site name',
      ogTitle: 'OG Title',
      ogDescription: 'OG description',
      ogHost: 'OG Url',
      ogImage: 'og-image.jpg',
      ogUrl: 'OG Url'
    },
    workbox: {
      // /* workbox options */
      // enabled: true // enable to test PWA on localhost, disable for prod
    }
  },

  // Page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  // Preloader and page loading
  loadingIndicator: {
    name: 'three-bounce',
    color: '#DC2626',
    background: '#111827'
  },

  loading: {
    color: '#DC2626',
    height: '4px',
  }
}
