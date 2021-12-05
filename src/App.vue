<template>
  <div class="bg-p5-background bg-fixed bg-center bg-cover h-full w-full">
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
