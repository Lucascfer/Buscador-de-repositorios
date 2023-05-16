// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs'
    ],
  },
  imports: {
    dirs: ['store']
  },
})
