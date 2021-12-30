<template>
  <div class="bg-p5-background dark:bg-p5-background-dark bg-fixed bg-center bg-cover h-full w-full dark:text-offwhite">
    <NavigationBar />
    <div class="pt-20">
      <router-view />
    </div>
    <Footer />
    <LegalStuff />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
import LegalStuff from "./components/LegalStuff.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar, Footer, LegalStuff }
});
</script>
