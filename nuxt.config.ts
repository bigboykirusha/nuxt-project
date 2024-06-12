export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  swiper: {
    modules: ['navigation', 'pagination', 'autoplay'],
    styleLang: 'css'
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/reset.scss";'
        }
      }
    }
  }
})
