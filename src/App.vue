<template>
  <div class="absolute pt-28 top-0 bottom-0 bg-fixed bg-center bg-cover w-full dark:text-offwhite">
    <NavigationBar
      class="h-28 -mt-28 -top-14 sticky bg-lighttheme-dark dark:bg-darktheme-dark transition duration-700 ease-in-out"
    />
    <div class="min-h-full bg-lighttheme dark:bg-darktheme transition duration-700 ease-in-out pt-20">
      <router-view />
    </div>
    <Footer class="h-14 -mb-14 bg-lighttheme dark:bg-darktheme transition duration-700 ease-in-out" />
    <LegalStuff />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
import LegalStuff from "./components/LegalStuff.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar, Footer, LegalStuff },
  created() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
});
</script>
