<template>
  <v-container class="h-screen">
    <v-row class="h-100" align-content="center">
      <v-col>
        <div data-aos="zoom-in">
          <nuxt-img
            src="/judi.webp"
            sizes="xs:220px sm:230px md:270px lg:300px xl:320px"
            class="rounded-circle"
          ></nuxt-img>
        </div>
        <h1 class="name text-dark-teal" data-aos="fade-up" data-aos-delay="500">Judith Boehlert</h1>
        <h2 class="subtitle text-light-teal" data-aos="fade-up" data-aos-delay="1000">
          Software Engineer & Solopreneur.
        </h2>
        <v-row justify="center" class="pa-5" data-aos="fade-up" data-aos-delay="1000">
          <a
            v-for="icon in iconLinks"
            :key="icon.iconString"
            :href="icon.url"
            target="_blank"
            :title="icon.title"
          >
            <v-icon :icon="icon.iconString" size="36px" class="mx-3" color="light-teal" />
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface IconLink {
  iconString: string;
  url: string;
  title: string;
}

const iconLinks: IconLink[] = [
  {
    iconString: 'fa:fa-brands fa-linkedin',
    url: 'https://linkedin.com/in/jboehlert',
    title: 'LinkedIn'
  },
  {
    iconString: 'fa:fa-brands fa-square-instagram',
    url: 'https://www.instagram.com/judi.codes/',
    title: 'Instagram @judi_codes'
  },
  {
    iconString: 'fa:fa-brands fa-square-github',
    url: 'https://github.com/judicodes',
    title: 'GitHub'
  },
  {
    iconString: 'fa:fas fa-envelope',
    url: 'mailto:hello@judithboehlert.com',
    title: 'Send me an email'
  }
];
</script>

<style scoped lang="scss">
.name {
  font-family: 'Nothing You Could Do', cursive;
  font-size: 32px;
  @media only screen and (min-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 960px) {
    font-size: 48px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 56px;
  }
}

.subtitle {
  font-size: 20px;
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 960px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 32px;
  }
  font-weight: 400;
}
</style>
