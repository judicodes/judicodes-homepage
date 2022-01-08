<template>
  <header class="flex items-center h-28 -top-14 sticky bg-lighttheme-dark dark:bg-darktheme-dark shadow-lg">
    <div class="flex items-center h-14 w-full sticky top-0 px-8">
      <span class="font-thin text-xl md:text-2xl"> judicodes </span>
      <div class="flex-grow"></div>
      <button @click="toggleDarkMode" aria-label="Toggle dark/light mode" title="Toggle dark/light mode">
        <i class="fas fa-adjust fa-2x p-2"></i>
      </button>
      <a
        href="https://linkedin.com/in/jboehlert"
        title="Go to Judith's LinkedIn"
        aria-label="Go to Judith's LinkedIn"
        target="_blank"
        ><i class="fab fa-linkedin fa-2x"></i
      ></a>
      <a
        href="https://github.com/judicodes"
        title="Go to Judith's GitHub"
        aria-label="Go to Judith's GitHub"
        target="_blank"
        ><i class="fab fa-github fa-2x"></i
      ></a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    toggleDarkMode(): void {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    }
  }
});
</script>

<style scoped>
@layer utilities {
  a,
  button {
    @apply p-2 rounded;
  }

  @media (hover: hover) and (pointer: fine) {
    a,
    button {
      @apply hover:bg-lighttheme dark:hover:bg-darktheme hover:bg-opacity-30;
    }
  }
}
</style>
