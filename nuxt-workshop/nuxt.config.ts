// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    'nuxt-icon',
    '@nuxtjs/apollo',
    'nuxt-headlessui'
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  }
})