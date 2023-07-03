import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa-svg';
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: { fa }
    }
  });
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
  library.add(faLinkedin);
  library.add(faInstagramSquare);
  library.add(faGithubSquare);
  library.add(faEnvelope);

  nuxtApp.vueApp.use(vuetify);
});
