// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon/module', '@nuxt/image'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  fonts: {
    google: {
      families: {
        Montserrat: true,
      },
    },
  },
  image: {
    domains: ['https://cdn.dummyjson.com']
  }
})
