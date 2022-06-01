<template>
  <div
    class="bg-lighttheme dark:bg-darktheme bg-fixed bg-center bg-cover h-full w-full dark:text-offwhite transition duration-700 ease-in-out"
  >
    <NavigationBar />
    <div class="pt-20">
      <router-view />
    </div>
    <LegalFooter />
    <LegalStuff />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LegalFooter from "./components/LegalFooter.vue";
import LegalStuff from "./components/LegalStuff.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar, LegalFooter, LegalStuff },
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
