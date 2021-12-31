<template>
  <div class="flex flex-col items-center w-full">
    <h1 class="text-4xl md:text-6xl font-light mt-10 text-center">JUDITH BÖHLERT</h1>
    <img
      src="../assets/images/judi.webp"
      alt="Picture of Judith in cold cold Canada"
      class="rounded-full w-40 md:w-72 my-10 shadow-2xl"
    />
    <v-typical
      class="text-2xl md:text-4xl font-light text-center"
      :steps="['Full-Stack Developer | Automation Enthusiast | Clean Code Devotee']"
      :loop="1"
      :wrapper="'h2'"
    ></v-typical>

    <hr class="my-10 w-11/12" />
    <div class="max-w-4xl md:max-w-3xl mx-8 mb-60">
      <p>Hi, I'm Judith.</p>
      <p>
        I am a full-stack developer based in Berlin. <br />
        This website serves first and foremost as my personal playground for technologies I want to try out, so please
        don't expect too much meaningful content.
      </p>

      <h3>Tech Stack</h3>
      <hr class="mt-4" />
      <p>HTML - CSS - JavaScript/TypeScript - Vue.js - Angular - Node.js - Golang - Kotlin - Docker - AWS</p>

      <h3>What I am currently learning</h3>
      <hr class="mt-4" />
      <p>
        TailwindCSS - Creative Coding with p5.js - GitHub Actions - How to make an aubergine taste good without frying
        it in a gallon of olive oil
      </p>

      <h3>Stuff I like</h3>
      <hr class="mt-4" />
      <p>Motorcycles - The Ocean - Croissants - Books - Hummingbirds - Keeping things neat and simple</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VTypical } from "vue-typical";

export default defineComponent({
  components: { VTypical }
});
</script>

<style scoped>
@layer base {
  p {
    @apply mb-16 mt-4 text-xl md:text-3xl font-thin;
  }

  h3 {
    @apply text-xl md:text-3xl font-light;
  }

  hr {
    @apply border-0 static block bg-gray-500 h-1 rounded-3xl;
  }
}
</style>
