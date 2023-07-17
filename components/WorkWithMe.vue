<template>
  <v-row justify="center" class="my-10" data-aos="fade-up">
    <v-col cols="10" sm="8" md="6">
      <v-card :class="[cardBackgroundColour, textColour]">
        <v-card-text class="card-text text-center">
          <p class="font-weight-bold">Want to work with me?</p>
          <p>Contact me at hello@judithboehlert.com.</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();
const isLightTheme = computed(() => {
  return theme.global.name.value === 'lightTheme';
});
const cardBackgroundColour = computed(() => {
  return isLightTheme.value ? 'bg-rose-lighten-1' : 'bg-dark-teal';
});
const textColour = computed(() => {
  return isLightTheme.value ? 'text-grey-darken-4' : 'text-white';
});
</script>

<style lang="scss" scoped>
.card-text,
p {
  font-size: 18px;
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 24px;
  }
  font-weight: 300;
  line-height: 1.75rem;
}
</style>
