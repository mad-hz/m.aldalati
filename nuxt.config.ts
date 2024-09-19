// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appName: 'Mohamad Aldalati'
    }
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'MAD' },
        { name: 'description', content: 'A portfolio site about me, made for an assignment.' }
      ],
      link: [
        // Any other links like icons go here
      ],
      script: [
        {
          src: 'https://player.vimeo.com/api/player.js'
        }
      ]
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: ["~/plugins/preline.client.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
