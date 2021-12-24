<template>
  <div
    class="
      bg-p5-background
      dark:bg-p5-background-dark
      bg-fixed bg-center bg-cover
      h-full
      w-full
      dark:text-offwhite
      transition
      ease-in-out
      duration-500
    "
  >
    <NavigationBar />
    <div class="pt-20">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
export default {
  components: { NavigationBar }
};
</script>
