<template>
  <client-only>
    <v-container>
      <v-row justify="center">
        <v-col align="center">
          <CustomHeader />
          <WorkWithMe />
          <InfoCard />
          <LegalFooter class="legal-footer" />
        </v-col>
      </v-row>
    </v-container>
  </client-only>
</template>

<style lang="scss">
html,
body {
  font-family: 'Josefin Sans', sans-serif;
  height: 100%;
  width: 100%;
  min-height: 100dvh;
  min-width: 100dvw;
  background-color: rgb(var(--v-theme-background));
}

.legal-footer {
  margin-top: 56px;
}
</style>