<template>
  <client-only>
    <v-container>
      <v-btn
        class="theme-icon"
        size="x-large"
        title="Toggle dark/light theme"
        :icon="toggleThemeIcon"
        variant="plain"
        :color="toggleThemeIconColour"
        @click="toggleTheme"
      ></v-btn>
      <v-row justify="center">
        <v-col align="center">
          <CustomHeader :key="customHeaderKey" />
          <WorkWithMe />
          <InfoCard />
          <LegalFooter class="legal-footer" />
        </v-col>
      </v-row>
    </v-container>
  </client-only>
</template>

<script setup lang="ts">
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@mdi/js';
import { useTheme } from 'vuetify/lib/framework.mjs';

useServerSeoMeta({
  title: 'Judith Boehlert - Freelance Software Engineer',
  ogTitle: 'Judith Boehlert - Freelance Software Engineer',
  description: 'Freelance Full-stack Software Engineer and Tech Content Creator based in Berlin.',
  ogDescription: 'Freelance Full-stack Software Engineer and Tech Content Creator based in Berlin.',
  ogUrl: 'https://judithboehlert.com',
  ogImage: {
    url: 'website-thumbnail.png',
    width: 1200,
    height: 630
  }
});

useHead({
  htmlAttrs: {
    lang: 'en'
  }
});

const customHeaderKey = ref(0);
const theme = useTheme();
const isLightTheme = computed(() => {
  return theme.global.name.value === 'lightTheme';
});
const toggleThemeIcon = computed(() => {
  return isLightTheme.value ? mdiMoonWaningCrescent : mdiWhiteBalanceSunny;
});
const toggleThemeIconColour = computed(() => {
  return isLightTheme.value ? 'dark-teal' : 'rose';
});
const toggleTheme = () => {
  customHeaderKey.value++;
  theme.global.name.value = isLightTheme.value ? 'darkTheme' : 'lightTheme';
};
</script>

<style lang="scss">
html,
body {
  font-family: 'Josefin Sans', sans-serif;
  height: 100%;
  width: 100%;
  min-height: 100dvh;
  min-width: 100dvw;
  background-color: rgb(var(--v-theme-background));
  transition: all linear 1s;
}

.legal-footer {
  margin-top: 56px;
}

.theme-icon {
  position: absolute;
  top: 32px;
  right: 32px;
}
</style>
