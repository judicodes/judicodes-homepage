<template>
  <div class="flex flex-col items-center w-full">
    <h1 class="text-4xl md:text-6xl font-light my-32 text-center">JUDITH BÖHLERT</h1>
    <h2 class="text-2xl md:text-4xl font-light text-center">
      Full-Stack Developer | Automation Enthusiast | Clean Code Devotee
    </h2>
    <hr class="border-0 static block w-11/12 bg-gray-500 h-1 mt-10 rounded-3xl" />
    <div class="max-w-4xl md:max-w-3xl text-2xl md:text-4xl text-center font-thin">
      <p>Hi, I'm Judith.</p>
      <p>
        I am a full-stack developer based in Berlin working on both the frontend and backend, occasionally also jumping
        into DevOps topics.
      </p>
      <p>Currently I'm learning TailwindCSS and Creative Coding with p5.js</p>
      <p>A minimalist at heart, I like to keep things neat and simple - my code, my home, my life.</p>
      <p class="pb-60">Apart from techy stuff, I like motorcycles, croissants and the ocean.</p>
    </div>
    <div class="h-1/3 w-screen fixed bottom-0 bg-gradient-to-b from-transparent to-white"></div>
  </div>
</template>

<style scoped>
@layer base {
  p {
    @apply my-32;
  }
}
</style>
