<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <CustomHeader />
          <WorkWithMe />
          <InfoCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
html,
body {
  font-family: 'Josefin Sans', sans-serif;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  min-height: 100dvh;
  min-width: 100dvw;
  background-color: rgb(var(--v-theme-background));
}
</style>
