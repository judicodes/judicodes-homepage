<template>
  <v-container>
    <v-row justify="center">
      <v-col align="center">
        <v-img
          src="../assets/images/judi.webp"
          :height="imageWidthHeight"
          :width="imageWidthHeight"
          class="rounded-circle"
        ></v-img>
        <h1 class="name text-darkTeal">Judith Boehlert</h1>
        <h2 class="subtitle text-lightTeal">Software Engineer & Solopreneur.</h2>
        <v-row justify="center" class="pa-5">
          <a
            v-for="icon in iconLinks"
            :key="icon.iconString"
            :href="icon.url"
            target="_blank"
            :title="icon.title"
          >
            <client-only>
              <v-icon :icon="icon.iconString" size="36px" class="mx-3" color="lightTeal" />
            </client-only>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

interface IconLink {
  iconString: string;
  url: string;
  title: string;
}

const iconLinks: IconLink[] = [
  {
    iconString: 'fa-brands fa-linkedin',
    url: 'https://linkedin.com/in/jboehlert',
    title: 'LinkedIn'
  },
  {
    iconString: 'fa-brands fa-square-instagram',
    url: 'https://www.instagram.com/judi_codes/',
    title: 'Instagram @judi_codes'
  },
  {
    iconString: 'fa-brands fa-square-github',
    url: 'https://github.com/judicodes',
    title: 'GitHub'
  },
  {
    iconString: 'fas fa-envelope',
    url: 'mailto:hello@judithboehlert.com',
    title: 'Send me an email'
  }
];

const { name } = useDisplay();
const imageWidthHeight = computed(() => {
  switch (name.value) {
    case 'xs':
      return 220;
    case 'sm':
      return 230;
    case 'md':
      return 270;
    case 'lg':
      return 300;
    case 'xl':
      return 320;
    case 'xxl':
      return 320;
    default:
      return 220;
  }
});
</script>

<style scoped lang="scss">
.name {
  font-family: 'Nothing You Could Do', cursive;
  font-size: 56px;
}

.subtitle {
  font-size: 32px;
  font-weight: 400;
}
</style>
