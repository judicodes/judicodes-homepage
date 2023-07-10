// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify';

vuetify({
  styles: { configFile: 'assets/styles/settings.scss' }
});

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Judith Boehlert'
    }
  },
  nitro: {
    preset: 'netlify'
  },
  devtools: { enabled: true },
  typescript: {
    shim: false,
    strict: true
  },
  build: {
    transpile: ['vuetify']
  },

  modules: [
    /* Treeshaking: https://next.vuetifyjs.com/en/features/treeshaking/ */
    (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify());
      });
    },
    '@nuxtjs/google-fonts'
  ],
  css: ['assets/styles/variables.scss'],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  googleFonts: {
    families: {
      'Josefin+Sans': [100, 200, 300, 400, 500, 600],
      'Nothing+You+Could+Do': [400]
    }
  }
});
