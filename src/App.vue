<template>
  <div class="font-mono">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="flex justify-center pt-20">
      <router-view />
    </div>
  </div>
</template>
