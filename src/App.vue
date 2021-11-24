<template>
  <div>
    <div class="bg-beige-dark h-14">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="flex justify-center pt-20 bg-beige h-screen">
      <router-view />
    </div>
  </div>
</template>
