import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ThemeDefinition, createVuetify } from 'vuetify';
import { fa } from 'vuetify/iconsets/fa-svg';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import 'vuetify/styles';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    'dark-teal': '#316B83',
    'light-teal': '#8CA1A5',
    'light-teal-lighten-1': '#a3b3b7',
    'light-teal-lighten-2': '#bac6c9',
    'light-teal-lighten-3': '#d1d9db',
    'blue-grey': '#6D8299',
    rose: '#D5BFBF',
    'rose-lighten-1': '#DDCBCB',
    'rose-lighten-2': '#E5D8D8'
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { fa, mdi }
    },
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme
      }
    }
  });
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
  library.add(faLinkedin);
  library.add(faInstagramSquare);
  library.add(faGithubSquare);
  library.add(faEnvelope);

  nuxtApp.vueApp.use(vuetify);
});
