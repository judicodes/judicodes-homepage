import { ThemeDefinition, createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa-svg';
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    'dark-teal': '#316B83',
    'light-teal': '#8CA1A5',
    'blue-grey': '#6D8299',
    rose: '#D5BFBF',
    'rose-lighten-1': '#DDCBCB',
    'rose-lighten-2': '#E5D8D8'
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: { fa }
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
