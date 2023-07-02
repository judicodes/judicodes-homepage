// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify';

vuetify({
  styles: { configFile: 'assets/settings.scss' }
});

export default defineNuxtConfig({
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
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  googleFonts: {
    families: {
      'Josefin+Sans': true,
      'Nothing+You+Could+Do': [400]
    }
  }
});
