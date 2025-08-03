// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image', 
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://fakestoreapi.com',
      siteKey: process.env.NUXT_PUBLIC_SITE_KEY
    }
  },
  app: {
    head: {
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?render=${process.env.NUXT_PUBLIC_SITE_KEY}`
        }
      ]
    }
  }
})