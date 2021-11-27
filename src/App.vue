<template>
  <div
    class="
      bg-gradient-to-b
      from-beige-dark
      to-beige-light
      bg-fixed bg-center bg-cover
      h-full
      w-full
    "
  >
    <div class="bg-beige-dark h-14 shadow-lg sticky top-0">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="pt-20">
      <router-view />
    </div>
  </div>
</template>
