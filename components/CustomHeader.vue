<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" sm="4" md="3" xl="2" align="center">
        <v-img src="../assets/images/judi.webp" cols="2" class="rounded-circle"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" align="center">
        <h1 class="name">Judith Boehlert</h1>
        <h2 class="subtitle">Software Engineer & Solopreneur.</h2>
        <v-row justify="center" class="pa-5">
          <a
            v-for="icon in icons"
            :key="icon.iconString"
            :href="icon.url"
            target="_blank"
            :title="icon.title"
          >
            <v-icon :icon="icon.iconString" size="36px" class="mx-3" />
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
interface IconLink {
  iconString: string;
  url: string;
  title: string;
}

export default defineComponent({
  data() {
    return {
      icons: [
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
      ] as IconLink[]
    };
  }
});
</script>

<style scoped lang="scss">
.name {
  font-family: 'Nothing You Could Do', cursive;
  font-size: 48px;
}

.subtitle {
  font-weight: 100;
}
</style>
