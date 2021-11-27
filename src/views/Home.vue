<template>
  <div class="flex flex-col items-center w-full">
    <div class="md:max-w-3xl text-2xl md:text-5xl text-center font-thin">
      <h1 class="text-4xl md:text-7xl my-8 font-light">Hi, I'm Judi.</h1>
      <p>
        I am a full-stack developer based in Berlin, enthusiastic about
        automation and devoted to Clean Code.
      </p>
      <p>Currently I'm learning TailwindCSS and Creative Coding with p5.js</p>
      <p>
        A minimalist at heart, I like to keep things neat and simple - my code,
        my home, my life.
      </p>
      <p class="pb-32">
        Apart from techy stuff, I like motorcycles, croissants and the ocean.
      </p>
    </div>
    <div
      class="h-72 w-screen fixed bottom-0 bg-gradient-to-b from-transparent"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
@layer base {
  p {
    @apply my-32;
  }
}
</style>
